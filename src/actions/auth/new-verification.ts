'use server'

import { getUserByEmail, verifyUserWithEmail } from '@/data/shop/user'
import {
  deleteVerificationTokenById,
  getVerificationTokenByToken,
} from '@/data/auth/verification-token'

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token)

  if (!existingToken) {
    return { error: 'Invalid token, please login again' }
  }

  const hasExpired = new Date(existingToken.expires) < new Date()

  if (hasExpired) {
    return { error: 'Token has expired, please login again' }
  }

  const existingUser = await getUserByEmail(existingToken.email)

  if (!existingUser) {
    return { error: 'Email does not exist' }
  }

  await verifyUserWithEmail(existingUser.id, existingToken.email)

  await deleteVerificationTokenById(existingToken.id)

  return { success: 'Email verified!' }
}
