'use server'

import * as z from 'zod'
import bcrypt from 'bcryptjs'
import { stripe } from '@/lib/stripe'

import { RegisterSchema } from '@/schemas'
import { createUser, getUserByEmail } from '@/data/shop/user'
import { generateVerificationToken } from '@/lib/tokens'
import { addToGeneralEmailList, sendVerificationEmail } from '@/lib/resend'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid Fields' }
  }

  const { email, password, name, newsletter } = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  // make sure email is not taken
  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return { error: 'Account already exists, please Login!' }
  }

  // create a stripe customer
  const customer = await stripe.customers.create({
    email,
  })

  const newUser = await createUser(
    name,
    email,
    hashedPassword,
    customer.id,
    newsletter,
  )

  try {
    addToGeneralEmailList(email)
  } catch (e) {
    console.error('Error adding email to general email list', e, 'EMAIL', email)
  }

  //TODO: COMBINE GUEST ORDERS WITH NEW USER ORDERS

  const verificationToken = await generateVerificationToken(email)

  await sendVerificationEmail(verificationToken.email, verificationToken.token)

  return { success: 'Confirmation email sent!' }
}
