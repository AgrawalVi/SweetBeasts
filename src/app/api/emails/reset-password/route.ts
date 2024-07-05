import { Resend } from 'resend';
import { ResetPasswordEmail } from '@/emails/reset-password';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.NEXT_PUBLIC_RESEND_EMAIL_NEW_ACCOUNT!

export async function POST(request: Request) {
    const {email, firstName} = await request.json();
    await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: 'Email Confirmation Required',
        react: ResetPasswordEmail({ firstName: firstName, resetLink: 'https://en.wikipedia.org/wiki/Dinosaur' }),
      });
}