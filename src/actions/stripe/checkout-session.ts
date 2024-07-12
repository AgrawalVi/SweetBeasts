'use server'

import { deleteOpenCheckoutSessionByStripeCheckoutSessionId } from '@/data/shop/open-checkout-session'
import Stripe from 'stripe'

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export const expireCheckoutSession = async (
  event: Stripe.CheckoutSessionExpiredEvent,
  secret: string,
) => {
  // verify that the secret matches
  if (secret !== webhookSecret) {
    return { error: 'UNAUTHORIZED' }
  }

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
