'use server'

import { ChangeNameSchema, ChangePasswordSchema } from '@/schemas'
import bcrypt from 'bcryptjs'
import * as z from 'zod'

import { currentUser } from '@/lib/auth'
import { stripe } from '@/lib/stripe'
import {
  changePasswordById,
  changeUserNameById,
  getUserById,
} from '@/data/shop/user'

export const updateName = async (values: z.infer<typeof ChangeNameSchema>) => {
  const validatedFields = ChangeNameSchema.safeParse(values)
  if (!validatedFields.success) {
    return { error: 'Invalid Fields' }
  }

  const { firstName, lastName } = validatedFields.data

  const user = await currentUser()

  if (!user) {
    return { error: 'Unauthorized' }
  }

  const dbUser = await getUserById(user.id)

  if (!dbUser) {
    return { error: 'Unauthorized' }
  }

  const newUser = await changeUserNameById(dbUser.id, firstName, lastName)
  if (!newUser) {
    return { error: 'Something went wrong!' }
  }

  try {
    await stripe.customers.update(dbUser.stripeCustomerId, {
      name: `${firstName} ${lastName}`,
    })
  } catch (e) {
    console.error('Error updating stripe customer', e)
    return { error: 'Something went wrong!' }
  }

  return { success: 'Settings updated' }
}

export const updatePassword = async (
  values: z.infer<typeof ChangePasswordSchema>,
) => {
  const validatedFields = ChangePasswordSchema.safeParse(values)
  if (!validatedFields.success) {
    return { error: 'Invalid Fields' }
  }

  const { currentPassword, newPassword, confirmNewPassword } =
    validatedFields.data

  const user = await currentUser()

  if (!user) {
    return { error: 'Unauthorized' }
  }

  const dbUser = await getUserById(user.id)

  if (!dbUser) {
    return { error: 'Unauthorized' }
  }

  const passwordsMatch = await bcrypt.compare(currentPassword, dbUser.password)

  if (!passwordsMatch) {
    return { error: 'Incorrect Password' }
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10)

  const newUser = changePasswordById(dbUser.id, hashedPassword)

  if (!newUser) {
    return { error: 'Something went wrong!' }
  }

  return { success: 'Password updated' }
}
