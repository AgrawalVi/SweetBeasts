import 'server-only'

import { db } from '@/lib/db'

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const resetPasswordToken = await db.resetPasswordToken.findUnique({
      where: { token },
    })
    return resetPasswordToken
  } catch (e) {
    console.error('Error getting password reset token by token', e)
    return null
  }
}

export const getResetPasswordTokenByEmail = async (email: string) => {
  try {
    const resetPasswordToken = await db.resetPasswordToken.findFirst({
      where: { email },
    })
    return resetPasswordToken
  } catch (e) {
    console.error('Error getting reset password token by email', e)
    return null
  }
}

export const deleteResetPasswordTokenById = async (id: string) => {
  try {
    const token = await db.resetPasswordToken.delete({
      where: { id },
    })
    return token
  } catch (e) {
    console.error('Error deleting reset password token', e)
    return null
  }
}
