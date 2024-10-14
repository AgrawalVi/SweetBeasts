'use server'

import { deleteOpenCheckoutSessionByStripeCheckoutSessionId } from '@/data/shop/open-checkout-session'
import Stripe from 'stripe'

export const deleteOpenCheckoutSession = async (
  event: Stripe.CheckoutSessionExpiredEvent,
) => {
  const checkoutSession = event.data.object as Stripe.Checkout.Session

  // delete the checkout session from the database
  const response = await deleteOpenCheckoutSessionByStripeCheckoutSessionId(
    checkoutSession.id,
  )
  if (!response) {
    return { error: 'Error deleting open checkout session' }
  }
  return { success: 'Checkout session expired' }
}
