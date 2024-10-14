'use server'

import * as z from 'zod'
import { LoginSchema } from '@/schemas'
import { signIn } from '@/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'
import { generateVerificationToken, generateTwoFactorToken } from '@/lib/tokens'
import { getUserByEmail } from '@/data/shop/user'
import {
  deleteTwoFactorTokenById,
  getTwoFactorTokenByEmail,
} from '@/data/auth/two-factor-token'
import { sendVerificationEmail, sendTwoFactorEmail } from '@/lib/resend'
import {
  createTwoFactorConfirmation,
  deleteTwoFactorConfirmationById,
  getTwoFactorConfirmationByUserId,
} from '@/data/auth/two-factor-confirmation'

export const login = async (
  values: z.infer<typeof LoginSchema>,
  redirectTo?: string,
) => {
  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'invalid fields' }
  }
  const { email, password, code } = validatedFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: 'Invalid credentials' }
  }

  if (existingUser && !existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email,
    )

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
    )

    return { success: 'Confirmation email sent!' }
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    if (code) {
      const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email)

      if (!twoFactorToken) {
        return { error: 'Invalid code' }
      }

      if (twoFactorToken.token !== code) {
        return { error: 'Invalid code' }
      }

      const hasExpired = new Date(twoFactorToken.expires) < new Date()

      if (hasExpired) {
        return { error: 'Code has expired' }
      }

      await deleteTwoFactorTokenById(twoFactorToken.id)

      const existingConfirmation = await getTwoFactorConfirmationByUserId(
        existingUser.id,
      )

      if (existingConfirmation) {
        await deleteTwoFactorConfirmationById(existingConfirmation.id)
      }

      await createTwoFactorConfirmation(existingUser.id)
    } else {
      const twoFactorToken = await generateTwoFactorToken(existingUser.email)
      await sendTwoFactorEmail(existingUser.firstName, twoFactorToken.email, twoFactorToken.token)
      return { twoFactor: true }
    }
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: redirectTo || DEFAULT_LOGIN_REDIRECT,
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin': {
          return { error: 'Invalid credentials' }
        }
        default:
          return { error: 'Something went wrong!' }
      }
    }
    throw error
  }
}
