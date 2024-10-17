import { NextResponse } from 'next/server'

import { stripe } from '@/lib/stripe'
import { createOrder } from '@/actions/order/new-order'
import { deleteOpenCheckoutSession } from '@/actions/stripe/checkout-session'

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export const POST = async (req: Request, res: Response) => {
  const rawBody = await req.text()

  let event

  // verify the webhook signature to be sure that the request came from Stripe
  try {
    const sig = req.headers.get('Stripe-Signature')
    if (!sig) {
      throw new Error('Stripe signature missing')
    }

    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 401 },
    )
  }

  if (event.type === 'checkout.session.completed') {
    const response = await createOrder(event)
    if (response.error) {
      return NextResponse.json({ error: response.error }, { status: 400 })
    }
    return NextResponse.json({ status: 200 })
  } else if (event.type === 'checkout.session.expired') {
    const response = await deleteOpenCheckoutSession(event)
    if (response.error) {
      return NextResponse.json({ error: response.error }, { status: 400 })
    }
  }

  return NextResponse.json({ status: 200 })
}
