import { Resend } from 'resend'
import TwoFactorConfirmation from '@/emails/two-factor'

const resend = new Resend(process.env.RESEND_API_KEY)
const fromEmail = process.env.NEXT_PUBLIC_RESEND_EMAIL_NEW_ACCOUNT!

export async function POST(request: Request) {
  const { email, firstName } = await request.json()
  await resend.emails.send({
    from: fromEmail,
    to: email,
    subject: 'Two Factor Confirmation Required',
    react: TwoFactorConfirmation({
      firstName: firstName,
      twoFactorCode: '000000',
    }),
  })
}
