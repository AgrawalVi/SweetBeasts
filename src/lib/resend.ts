import { Resend } from 'resend'

import TwoFactorConfirmationEmail from '@/emails/two-factor'
import { ResetPasswordEmail } from '@/emails/reset-password'
import EmailConfirmation from '@/emails/email-confirmation'

const resend = new Resend(process.env.RESEND_API_KEY)
const generalAudienceId = process.env.RESEND_GENERAL_AUDIENCE_ID!
const fromEmail = process.env.NEXT_PUBLIC_RESEND_EMAIL_NEW_ACCOUNT!
const NEXT_BASE_URL = process.env.NEXT_BASE_URL!

export const addToGeneralEmailList = async (email: string) => {
  if (generalAudienceId) {
    try {
      await resend.contacts.create({
        email,
        unsubscribed: false,
        audienceId: generalAudienceId,
      })
    } catch {
      throw new Error('Error adding to email list')
    }
  } else {
    throw new Error('Error adding to email list')
  }
}

// TODO: Test this functionality, and also change first name to be dynamic. Need to change register form and database to do this.

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${NEXT_BASE_URL}/auth/verify-email?token=${token}`
  console.log('confirmLink', confirmLink)
  await resend.emails.send({
    from: fromEmail,
    to: email,
    subject: 'Verify your email',
    react: EmailConfirmation({
      firstName: 'john',
      confirmationLink: confirmLink,
    }),
  })
}

export const sendResetPasswordEmail = async (email: string, token: string) => {
  const resetLink = `${NEXT_BASE_URL}/auth/new-password?token=${token}`

  await resend.emails.send({
    from: fromEmail,
    to: email,
    subject: 'Reset your password',
    react: ResetPasswordEmail({ firstName: 'john', resetLink }),
  })
}

export const sendTwoFactorEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: fromEmail,
    to: email,
    subject: 'Two Factor Authentication Code',
    react: TwoFactorConfirmationEmail({
      firstName: 'john',
      twoFactorCode: token,
    }),
  })
}
