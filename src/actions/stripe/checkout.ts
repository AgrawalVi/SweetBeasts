'use server'

import { CartItem } from '@/hooks/use-shopping-cart'
import { stripe } from '@/lib/stripe'
import { getUserById } from '@/data/shop/user'
import { redirect } from 'next/navigation'
import { getProductById, getProductByStripePriceId } from '@/data/shop/product'
import Stripe from 'stripe'
import { db } from '@/lib/db'
import { notEmpty } from '@/lib/utils'

export type lineItem = {
  price: string
  quantity: number
  id: number
}

export const createCheckoutSession = async (
  cart: CartItem[],
  guestId: string | null | undefined,
  userId: string | null | undefined,
) => {
  // create lineItems for each product in the cart
  const lineItems: lineItem[] = (
    await Promise.all(
      cart.map(async (item) => {
        const product = await getProductById(item.productId)
        if (product) {
          return {
            price: product.stripePriceId,
            quantity: item.quantity,
            id: item.productId,
          }
        }
      }),
    )
  ).filter((item): item is lineItem => item !== undefined)

  // check if there are any valid products in the cart
  if (lineItems.length === 0) {
    return { error: 'No valid products are in the cart' }
  }

  let filteredItems: lineItem[] = []
  // make sure there is enough inventory to send products to stripe
  try {
    const processedItems = await Promise.all(
      lineItems.map(async (item) => {
        const product = await getProductByStripePriceId(item.price)
        if (product) {
          if (product.inventory < item.quantity) {
            item.quantity = product.inventory
          }
          return item
        }
        return null
      }),
    )

    filteredItems = processedItems.filter(
      (item): item is typeof item & { quantity: number } =>
        notEmpty(item) && item.quantity > 0,
    )
  } catch {
    return { error: 'Error changing not available inventory' }
  }

  if (filteredItems.length === 0) {
    return {
      error: 'All products in your cart are out of stock.',
    }
  }

  console.log('guestId', guestId)
  const metadata = userId ? null : { guestId: guestId ? guestId : null }

  // object to contain base checkout session config
  const checkoutSessionConfig: Stripe.Checkout.SessionCreateParams = {
    line_items: filteredItems.map((item) => ({
      price: item.price,
      quantity: item.quantity,
    })),
    mode: 'payment',
    ui_mode: 'hosted',
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    shipping_address_collection: {
      allowed_countries: ['US'],
    },
    custom_text: {
      after_submit: {
        message: 'Thank you for your order!',
      },
      shipping_address: {
        message: 'Please enter your shipping address',
      },
    },
    ...(metadata ? { metadata: metadata } : null),
  }

  // if there's a userId that's passed, we must validate that a user exists with that Id
  const existingUser = userId ? await getUserById(userId) : null
  // If there's no userId, then we create a checkout session with a guest customer
  if (!existingUser) {
    return createCheckoutSessionHelper(filteredItems, checkoutSessionConfig)
  }

  // if the user exists and they don't have a stripeCustomerId, we create a customer and open a new checkout session
  if (!existingUser.stripeCustomerId) {
    let customer
    try {
      customer = await stripe.customers.create({
        email: existingUser.email,
        name: existingUser.name || undefined,
      })
    } catch (e) {
      console.error('error creating customer in stripe', e)
      return { error: 'Error creating customer in Stripe' }
    }
    try {
      await db.user.update({
        where: { id: existingUser.id },
        data: { stripeCustomerId: customer.id },
      })
    } catch (e) {
      console.error('Error updating user in database', e)
      return { error: 'Error updating user in database' }
    }
    checkoutSessionConfig.customer = customer.id
  } else {
    checkoutSessionConfig.customer = existingUser.stripeCustomerId
  }

  // if the user exists and they have a stripeCustomerId, we can use it to create a checkout session
  return createCheckoutSessionHelper(filteredItems, checkoutSessionConfig)
}

const createCheckoutSessionHelper = async (
  filteredItems: lineItem[],
  checkoutSessionConfig: Stripe.Checkout.SessionCreateParams,
) => {
  let session
  try {
    session = await stripe.checkout.sessions.create(checkoutSessionConfig)
  } catch (e) {
    console.error('An error occurred while creating a checkout session', e)
    return { error: 'An error occurred while creating a checkout session' }
  }

  await db.openCheckoutSessions.create({
    data: {
      stripeCheckoutSessionId: session.id,
      products: {
        connect: filteredItems.map((item) => ({
          id: item.id,
        })),
      },
    },
  })

  if (session.url) {
    redirect(session.url)
  }
  return { error: 'Unable to redirect to checkout' }
}

export const getCheckoutSession = async (sessionId: string) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    if (session) {
      return { success: session }
    }
    return { error: 'Unable to retrieve the checkout session' }
  } catch (e) {
    console.error('An error occurred while retrieving the checkout session', e)
    return { error: 'An error occurred while retrieving the checkout session' }
  }
}
