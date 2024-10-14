import 'server-only'

import { Resend } from 'resend'

import TwoFactorConfirmationEmail from '@/emails/two-factor'
import { ResetPasswordEmail } from '@/emails/reset-password'
import EmailConfirmation from '@/emails/email-confirmation'
import ContactUsEmail from '@/emails/contact-us'
import TeamNotificationEmail from '@/emails/contact-us-team'
import { OrderWithData } from '@/types'
import OrderConfirmedUserEmail from '@/emails/order-confirm-user'

import {
  RESEND_FROM_EMAIL_ACCOUNT,
  RESEND_FROM_EMAIL_SUPPORT,
  RESEND_FROM_EMAIL_ORDER,
  CONTACT_US_EMAILS,
} from '@/constants'

const resend = new Resend(process.env.RESEND_API_KEY)
const generalAudienceId = process.env.RESEND_GENERAL_AUDIENCE_ID!
const base_url = process.env.NEXT_PUBLIC_BASE_URL!

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

export const addToGeneralEmailListWithName = async (
  email: string,
  firstName: string,
  lastName: string,
) => {
  if (generalAudienceId) {
    try {
      await resend.contacts.create({
        firstName,
        lastName,
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
  const confirmLink = `${base_url}/auth/verify-email?token=${token}`
  console.log('confirmLink', confirmLink)
  await resend.emails.send({
    from: `SweetBeasts <${RESEND_FROM_EMAIL_ACCOUNT}>`,
    to: email,
    subject: 'Verify your email',
    react: EmailConfirmation({
      confirmationLink: confirmLink,
    }),
  })
}

export const sendResetPasswordEmail = async (
  first_name: string,
  email: string,
  token: string,
) => {
  const resetLink = `${base_url}/auth/new-password?token=${token}`

  await resend.emails.send({
    from: `SweetBeasts <${RESEND_FROM_EMAIL_ACCOUNT}>`,
    to: email,
    subject: 'Reset your password',
    react: ResetPasswordEmail({ firstName: first_name, resetLink }),
  })
}

export const sendTwoFactorEmail = async (
  first_name: string,
  email: string,
  token: string,
) => {
  await resend.emails.send({
    from: `SweetBeasts <${RESEND_FROM_EMAIL_ACCOUNT}>`,
    to: email,
    subject: 'Your Two Factor Authentication Code',
    react: TwoFactorConfirmationEmail({
      firstName: first_name,
      twoFactorCode: token,
    }),
  })
}

export const sendContactUs = async (
  email: string,
  userName: string,
  message: string,
) => {
  console.log('Sending confirmation email to:', email)
  await resend.emails.send({
    from: `SweetBeasts Support <${RESEND_FROM_EMAIL_SUPPORT}>`,
    to: email,
    bcc: CONTACT_US_EMAILS,
    subject: "We've received your support request",
    react: ContactUsEmail({ userName, userMessage: message }),
  })
  console.log('Confirmation email sent to:', email)
}

export const sendContactUsAdmin = async (
  email: string,
  userName: string,
  message: string,
  orderNumber?: string,
) => {
  console.log('Sending confirmation email to:', email)
  await resend.emails.send({
    from: RESEND_FROM_EMAIL_SUPPORT,
    to: CONTACT_US_EMAILS,
    subject: 'Support Request from User',
    react: TeamNotificationEmail({
      userName,
      userMessage: message,
      userEmail: email,
      messageDate: new Date().toLocaleDateString(),
      orderNumber,
    }),
  })
  console.log('Confirmation email sent to:', CONTACT_US_EMAILS)
}

export const sendFeedBack = async (
  email: string,
  name: string,
  feedback: string,
) => {
  console.log('Sending feedback email to:', email)
  await resend.emails.send({
    from: `SweetBeasts Support <${RESEND_FROM_EMAIL_SUPPORT}>`,
    to: email,
    subject: 'Feedback Received',
    bcc: CONTACT_US_EMAILS,
    react: ContactUsEmail({ userName: name, userMessage: feedback }),
  })
  console.log('Feedback email sent to:', email)
}

export const sendFeedBackAdmin = async (
  email: string,
  name: string,
  feedback: string,
) => {
  console.log('Sending feedback email to:', email)
  await resend.emails.send({
    from: RESEND_FROM_EMAIL_SUPPORT,
    to: CONTACT_US_EMAILS,
    subject: 'Feedback Received',
    react: TeamNotificationEmail({
      userName: name,
      userEmail: email,
      userMessage: feedback,
      messageDate: new Date().toLocaleDateString(),
    }),
  })
  console.log('Feedback email sent to:', CONTACT_US_EMAILS)
}

export const sendOrderConfirmationEmail = async (order: OrderWithData) => {
  await resend.emails.send({
    from: `SweetBeasts <${RESEND_FROM_EMAIL_ORDER}>`,
    to: CONTACT_US_EMAILS,
    subject: 'Thank You for Your Order!',
    react: OrderConfirmedUserEmail({ orderWithData: order }),
  })
}
