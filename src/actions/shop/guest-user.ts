'use server'

import { stripe } from '@/lib/stripe'
import { createGuestUser as createGuestUserDB } from '@/data/shop/guest-user'

export const createGuestUser = async (email: string) => {
  // first create a stripe customer id
  let customer
  try {
    customer = await stripe.customers.create({
      email,
    })
  } catch (e) {
    console.error('Error creating stripe customer', e)
    return { error: 'Error creating stripe customer' }
  }

  const guestUser = await createGuestUserDB(email, customer.id)
  if (!guestUser) {
    console.error('Error creating guest user')
    return { error: 'Error creating guest user' }
  }

  return { success: guestUser }
}
