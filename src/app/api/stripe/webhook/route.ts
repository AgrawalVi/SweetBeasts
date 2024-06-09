import { stripe } from '@/lib/stripe'
import { NextResponse } from 'next/server'

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export const POST = async (req: Request, res: Response) => {
  const rawBody = await req.json()
  const sig = req.headers.get('Stripe-Signature')

  let event
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig!, webhookSecret)
  } catch (err) {
    return NextResponse.json(
      { error: 'Webhook Signature Verification Failed' },
      { status: 400 },
    )
  }

  console.log(event)
  console.log(event.type)
}
