'use server'

import * as z from 'zod'

import bcrypt from 'bcryptjs'
import { NewPasswordSchema } from '@/schemas'
import {
  deleteResetPasswordTokenById,
  getPasswordResetTokenByToken,
} from '@/data/auth/reset-password-token'
import { changePasswordById, getUserByEmail } from '@/data/shop/user'

export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null,
) => {
  if (!token) {
    return { error: 'Missing Token' }
  }

  const validatedFields = NewPasswordSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid fields' }
  }

  const { password } = validatedFields.data

  const existingToken = await getPasswordResetTokenByToken(token)

  if (!existingToken) {
    return { error: 'Invalid Token' }
  }

  const hasExpired = new Date(existingToken.expires) < new Date()

  if (hasExpired) {
    return { error: 'Token has expired' }
  }

  const existingUser = await getUserByEmail(existingToken.email)

  if (!existingUser) {
    return { error: 'User not found' }
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const response = await changePasswordById(existingUser.id, hashedPassword)
  if (!response) {
    return { error: 'Error changing password' }
  }

  await deleteResetPasswordTokenById(existingToken.id)

  return { success: 'Password updated' }
}
