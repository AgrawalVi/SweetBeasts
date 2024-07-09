import { NextRequest, NextResponse } from 'next/server';
import { sendContactUs } from '../../../lib/resend';

export async function POST(req: NextRequest) {
  try {
    const { email, name, message } = await req.json();
    console.log('Received request:', { email, name, message });
    await sendContactUs(email, name, message);
    return NextResponse.json({ message: 'Contact request submitted successfully!' });
  } catch (error) {
    console.error('Error handling contact request:', error);
    return NextResponse.json({ message: 'Failed to submit contact request' }, { status: 500 });
  }
}
