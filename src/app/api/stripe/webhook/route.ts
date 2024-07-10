import { createOrder } from '@/actions/order/new-order'
import { expireCheckoutSession } from '@/actions/stripe/checkout-session'
import { stripe } from '@/lib/stripe'
import { NextResponse } from 'next/server'

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
      { status: 400 },
    )
  }

  if (event.type === 'checkout.session.completed') {
    const response = await createOrder(event)
    if (response.error) {
      return NextResponse.json({ error: response.error }, { status: 400 })
    }
    return NextResponse.json({ status: 200 })
  } else if (event.type === 'checkout.session.expired') {
    const response = await expireCheckoutSession(event)
    if (response.error) {
      return NextResponse.json({ error: response.error }, { status: 400 })
    }
  }

  return NextResponse.json({ status: 200 })
}
