import { Resend } from 'resend';
import EmailConfirmation from '@/emails/email-confirmation';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.NEXT_PUBLIC_RESEND_EMAIL_NEW_ACCOUNT!

export async function POST(request: Request) {
    const {email, firstName} = await request.json();
    await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: 'Email Confirmation Required',
        react: EmailConfirmation({ firstName: firstName, confirmationLink: 'https://en.wikipedia.org/wiki/Dinosaur' }),
      });
}