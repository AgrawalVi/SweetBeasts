import Stripe from 'stripe'
import { getProductById } from '@/data/shop/product'

const API_KEY = process.env.STRIPE_SECRET_KEY

if (!API_KEY) {
  console.error('STRIPE API KEY UNAVAILABLE')
  process.exit(1)
}

export const stripe = new Stripe(API_KEY, {
  apiVersion: '2024-04-10',
})
