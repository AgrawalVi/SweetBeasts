'use server'

import { CartItem } from '@/hooks/use-shopping-cart'
import { stripe } from '@/lib/stripe'
import { addStripeCustomerIdToUser, getUserById } from '@/data/shop/user'
import { redirect } from 'next/navigation'
import { getProductById, getProductByStripePriceId } from '@/data/shop/product'
import Stripe from 'stripe'
import { notEmpty } from '@/lib/utils'
import { stripeLineItemWithProductId } from '@/types'
import { createOpenCheckoutSession } from '@/data/shop/open-checkout-session'
import { currentUser } from '@/lib/auth'

export const createCheckoutSession = async (
  cart: CartItem[],
  guestId: string | null | undefined,
) => {
  const user = await currentUser()
  // create lineItems for each product in the cart
  const lineItems: stripeLineItemWithProductId[] = (
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
  ).filter((item): item is stripeLineItemWithProductId => item !== undefined)

  // check if there are any valid products in the cart
  if (lineItems.length === 0) {
    return { error: 'No valid products are in the cart' }
  }

  let filteredItems
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
  const metadata = user ? null : { guestId: guestId ? guestId : null }

  // object to contain base checkout session config
  const checkoutSessionConfig: Stripe.Checkout.SessionCreateParams = {
    line_items: filteredItems.map((item) => ({
      price: item.price,
      quantity: item.quantity,
    })),
    mode: 'payment',
    ui_mode: 'hosted',
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
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
  const existingUser = user ? await getUserById(user.id) : null
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
        name: `${existingUser.firstName} ${existingUser.lastName}`,
      })
    } catch (e) {
      console.error('error creating customer in stripe', e)
      return { error: 'Error creating customer in Stripe' }
    }
    const response = await addStripeCustomerIdToUser(
      existingUser.id,
      customer.id,
    )
    if (!response) {
      return { error: 'Error adding stripe customer id to user' }
    }
    checkoutSessionConfig.customer = customer.id
  } else {
    checkoutSessionConfig.customer = existingUser.stripeCustomerId
  }

  // if the user exists and they have a stripeCustomerId, we can use it to create a checkout session
  return createCheckoutSessionHelper(filteredItems, checkoutSessionConfig)
}

const createCheckoutSessionHelper = async (
  filteredItems: stripeLineItemWithProductId[],
  checkoutSessionConfig: Stripe.Checkout.SessionCreateParams,
) => {
  let session
  try {
    session = await stripe.checkout.sessions.create(checkoutSessionConfig)
  } catch (e) {
    console.error('An error occurred while creating a checkout session', e)
    return { error: 'An error occurred while creating a checkout session' }
  }

  const response = await createOpenCheckoutSession(session.id, filteredItems)
  if (!response) {
    return { error: 'Error creating open checkout session in database' }
  }

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
