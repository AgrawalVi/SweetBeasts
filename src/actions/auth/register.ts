'use server'

import * as z from 'zod'
import bcrypt from 'bcryptjs'
import { stripe } from '@/lib/stripe'

import { RegisterSchema } from '@/schemas'
import { createUser, getUserByEmail } from '@/data/shop/user'
import { generateVerificationToken } from '@/lib/tokens'
import {
  addToGeneralEmailListWithName,
  sendVerificationEmail,
} from '@/lib/resend'
import {
  deleteGuestUserById,
  getGuestUserWithDataByEmail,
} from '@/data/shop/guest-user'
import { GuestUserWithData } from '@/types'
import { transferOrderToUserFromGuestUser } from '@/data/shop/orders'
import { transferShippingAddressToUserFromGuestUser } from '@/data/shop/address'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid Fields' }
  }

  const { email, password, firstName, lastName, newsletter } =
    validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  // make sure email is not taken
  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return { error: 'Account already exists, please Login!' }
  }

  const guestUser: GuestUserWithData | null =
    await getGuestUserWithDataByEmail(email)

  let customer
  if (!guestUser) {
    // create a stripe customer
    customer = await stripe.customers.create({
      email,
      name: `${firstName} ${lastName}`,
    })
  } else {
    customer = await stripe.customers.update(guestUser.stripeCustomerId, {
      name: `${firstName} ${lastName}`,
    })
  }

  const newUser = await createUser(
    firstName,
    lastName,
    email,
    hashedPassword,
    guestUser ? guestUser.stripeCustomerId : (customer?.id as string),
  )

  if (!newUser) {
    return { error: 'Error creating user' }
  }

  if (newsletter) {
    try {
      addToGeneralEmailListWithName(email, firstName, lastName)
    } catch (e) {
      console.error(
        'Error adding email to general email list',
        e,
        'EMAIL',
        email,
      )
    }
  }

  if (guestUser) {
    for (const order of guestUser.orders) {
      const updatedOrder = await transferOrderToUserFromGuestUser(
        order.id,
        newUser.id,
      )
      if (!updatedOrder) {
        console.error('Error transferring order to user from guest user')
      }
    }
    for (const shippingAddress of guestUser.shippingAddresses) {
      const updatedShippingAddress =
        await transferShippingAddressToUserFromGuestUser(
          shippingAddress.id,
          newUser.id,
        )
      if (!updatedShippingAddress) {
        console.error(
          'Error transferring shipping address to user from guest user',
          shippingAddress.id,
          newUser.id,
        )
      }
    }

    const deletedUser = await deleteGuestUserById(guestUser.id)
    if (!deletedUser) {
      console.error('Error deleting guest user', guestUser.id)
    }
  }

  const verificationToken = await generateVerificationToken(email)

  await sendVerificationEmail(verificationToken.email, verificationToken.token)

  return { success: 'Confirmation email sent!' }
}
