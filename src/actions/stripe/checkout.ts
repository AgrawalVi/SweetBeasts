'use server'

import { CartItem } from '@/hooks/use-shopping-cart'
import { getProductById } from '../products/products'
import { stripe } from '@/lib/stripe'

export type lineItem = {
  price: string
  quantity: number
}

export const createCheckoutSession = async (cart: CartItem[]) => {
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

  // can create a checkout session
  if (lineItems.length > 0) {
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      ui_mode: 'custom' as any,
    })

    if (session.client_secret) {
      return { success: session.client_secret }
    } else {
      return { error: 'Unable to create checkout session' }
    }
  } else {
    return { error: 'No valid products are in the cart' }
  }
}
