'use server'

import { CartItem } from '@/hooks/use-shopping-cart'
import { getProductById } from '../products/products'
import { stripe } from '@/lib/stripe'
import { getUserById } from '@/data/auth/user'
import { RedirectType, redirect } from 'next/navigation'

export type lineItem = {
  price: string
  quantity: number
}

export const createCheckoutSession = async (
  cart: CartItem[],
  userId: string | null | undefined,
) => {
  // create lineItems for each product in the cart

  const lineItems: lineItem[] = (
    await Promise.all(
      cart.map(async (item) => {
        const response = await getProductById(item.productId)
        if (response.success) {
          return {
            price: response.success.stripePriceId,
            quantity: item.quantity,
          }
        }
      }),
    )
  ).filter((item): item is lineItem => item !== undefined)

  // check if there are any valid products in the cart
  if (lineItems.length === 0) {
    return { error: 'No valid products are in the cart' }
  }

  // if there's a userId that's passed, we must validate that a user exists with that Id
  const existingUser = userId ? await getUserById(userId) : null

  // If there's no userId, then we create a checkout session with a guest customer
  if (!existingUser) {
    let session
    try {
      session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        ui_mode: 'hosted',
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
        // automatic_tax: {
        //   enabled: true,
        // },
        // customer_creation: 'always',
        // shipping_address_collection: {
        //   allowed_countries: ['US'],
        // },
      })
    } catch (e) {
      console.error(e)
      return { error: 'An error occurred while creating a checkout session' }
    }

    if (session.url) {
      redirect(session.url)
    }
    return { error: 'Unable to redirect to checkout' }
  }

  return { error: 'Have not implemented checkout if a user is logged in' }
  // if the user exists, we can check if  they have a stripeCustomerId

  // check if there's a stripeCustomerId and if so, use it to create a checkout session.
  // if a stripeCustomerId exists, so does the user's email address

  //  if no stripeCustomerId, check if there's an email and if so, create a customer and open a new checkout session
}

export const getCheckoutSession = async (sessionId: string) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    if (session) {
      return { success: session }
    }
    return { error: 'Unable to retrieve the checkout session' }
  } catch {
    return { error: 'An error occurred while retrieving the checkout session' }
  }
}
