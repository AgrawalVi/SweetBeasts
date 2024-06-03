import Stripe from 'stripe'

const API_KEY = process.env.STRIPE_SECRET_KEY

if (!API_KEY) {
  console.error('STRIPE API KEY UNAVAILABLE')
  process.exit(1)
}

const stripe = new Stripe(API_KEY)

export async function createPaymentIntent(amount: number, currency: string) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
    })

    return paymentIntent
  } catch (e) {
    console.error('Error creating payment intent', e)
  }
}
