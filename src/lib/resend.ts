import { Resend } from 'resend'

import TwoFactorConfirmationEmail from '@/emails/two-factor'
import { ResetPasswordEmail } from '@/emails/reset-password'
import EmailConfirmation from '@/emails/email-confirmation'
import ContactUsEmail from '@/emails/contact-us'
import { PrismaClient } from '@prisma/client'

const resend = new Resend(process.env.RESEND_API_KEY)
const generalAudienceId = process.env.RESEND_GENERAL_AUDIENCE_ID!
const fromEmail = process.env.NEXT_PUBLIC_RESEND_EMAIL_NEW_ACCOUNT!
const base_url = process.env.NEXT_PUBLIC_BASE_URL!
const prisma = new PrismaClient();

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
  const resetLink = `${base_url}/auth/new-password?token=${token}`

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


export const sendContactUs = async (email: string, userName: string, message: string) => {
  try {
    console.log('Checking if user exists:', email);
    let user = await prisma.user.findUnique({ where: { email } });
    console.log('User found:', user);

    let guestUser = null;
    if (!user) {
      console.log('Creating guest user:', email);
      guestUser = await prisma.guestUser.create({
        data: {
          email,
          stripeCustomerId: '', 
        },
      });
      console.log('Guest user created:', guestUser);
    }

    console.log('Creating contact submission for:', email);
    const contactSubmission = await prisma.contactUsSubmission.create({
      data: {
        email,
        name: userName,
        userId: user?.id || null,
        guestUserId: guestUser?.id || null,
        message: [message],
      },
    });
    console.log('Contact submission created:', contactSubmission);

    console.log('Sending confirmation email to:', email);
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Contact Us - SweetBeasts',
      react: ContactUsEmail({ userName, userMessage: message }),
    });
    console.log('Confirmation email sent to:', email);

  } catch (error) {
    console.error('Failed to submit contact request:', error);
    throw new Error('Failed to submit contact request');
  }
};