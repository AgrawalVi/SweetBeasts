'use server'

import * as z from 'zod'

import { ResetPasswordSchema } from '@/schemas'
import { getUserByEmail } from '@/data/shop/user'
import { sendResetPasswordEmail } from '@/lib/resend'
import { generateResetPasswordToken } from '@/lib/tokens'

export const resetPassword = async (
  values: z.infer<typeof ResetPasswordSchema>,
) => {
  const validatedFields = ResetPasswordSchema.safeParse(values)

  if (!validatedFields.success) {
    return {
      error: 'Please enter a valid email address!',
    }
  }

  const { email } = validatedFields.data
  const existingUser = await getUserByEmail(email)

  if (!existingUser) {
    return {
      success: 'Reset email sent!',
    }
  }

  const resetPasswordToken = await generateResetPasswordToken(email)
  if (!resetPasswordToken) {
    return { error: 'Error generating token, please try again' }
  }

  await sendResetPasswordEmail(
    resetPasswordToken.email,
    resetPasswordToken.token,
  )

  return { success: 'Reset email sent!' }
}