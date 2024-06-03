'use server'

import { createPaymentIntent as createPaymentIntentLib } from '@/lib/stripe'

export const createPaymentIntent = async (amount: number, currency: string) => {
  try {
    return await createPaymentIntentLib(amount, currency)
  } catch {
    return { error: 'error thrown' }
  }
}
