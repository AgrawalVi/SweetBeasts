import { NextRequest } from 'next/server'
import { UnsubscribeSchema } from '@/schemas'

import { unsubscribeFromGeneralEmailList } from '@/lib/resend'
import {
  getMailingListUserByEmail,
  updateMailingListSubscribedStatus,
} from '@/data/customer/mailing-list'

export async function POST(req: NextRequest) {
  const email = req.nextUrl.searchParams.get('email')

  if (!email) {
    return new Response('Email not found', { status: 400 })
  }

  const validatedFields = UnsubscribeSchema.safeParse({ email })

  if (!validatedFields.success) {
    return new Response('Invalid email', { status: 400 })
  }

  try {
    // get mailingList user by email
    const user = await getMailingListUserByEmail(email)
    if (!user) {
      return new Response('User not found', { status: 404 })
    }
    console.log('unsubscribing', email)
    await updateMailingListSubscribedStatus(user.email, user.resendId, false)
    await unsubscribeFromGeneralEmailList(user.resendId)
  } catch (e) {
    console.log(e)
    return new Response('Error unsubscribing from email list', { status: 500 })
  }

  return new Response('Successfully unsubscribed from email list', {
    status: 200,
  })
}
