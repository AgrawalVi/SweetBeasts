import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const generalAudienceId = process.env.RESEND_GENERAL_AUDIENCE_ID

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

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/verify-email?token=${token}`

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Verify your email',
    html: `<p>Click <a href="${confirmLink}">here</a> to verify your email</p>`,
  })
}

export const sendResetPasswordEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Reset your password',
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password</p>`,
  })
}

export const sendTwoFactorEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Two Factor Authentication Code',
    html: `<p>Your two factor authentication code is: ${token}</p>`,
  })
}

export const confirmShoppingCart = async (email: string, firstName: string) => {
  await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: email,
    subject: 'Shopping Cart Confirmation',
    html: `<p>Click <a href="">here</a> to reset your password</p>`,
  })
}
