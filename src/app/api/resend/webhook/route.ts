import { NextRequest, NextResponse } from 'next/server'
import { ResendWebhookBody } from '@/types'
import { Webhook } from 'svix'

import { sendWelcomeEmail } from '@/lib/resend'
import {
  addToMailingList,
  deleteFromMailingList,
  updateMailingListSubscribedStatus,
} from '@/data/customer/mailing-list'

const secret = process.env.RESEND_WEBHOOK_SECRET!

export const POST = async (req: NextRequest, res: NextResponse) => {
  // verify the webhook signature to be sure that the request came from Resend
  const wh = new Webhook(secret)
  let payload

  try {
    const rawBody = await req.text()
    const svixHeaders = {
      'svix-id': req.headers.get('svix-id') ?? '',
      'svix-timestamp': req.headers.get('svix-timestamp') ?? '',
      'svix-signature': req.headers.get('svix-signature') ?? '',
    }
    payload = wh.verify(rawBody, svixHeaders) as
      | ResendWebhookBody
      | null
      | undefined
  } catch (e) {
    return new Response('Invalid webhook signature', { status: 400 })
  }

  if (!payload) {
    return new Response('Invalid webhook payload', { status: 400 })
  }

  let response
  switch (payload.type) {
    case 'contact.created':
      // handle the contact.created event
      response = await addToMailingList(payload.data.email, payload.data.id)
      break
    case 'contact.deleted':
      // handle the contact.deleted event
      response = await deleteFromMailingList(payload.data.id)
      break
    case 'contact.updated':
      // handle the contact.updated event
      response = await updateMailingListSubscribedStatus(
        payload.data.email,
        payload.data.id,
        !payload.data.unsubscribed,
      )
      break
    default:
      return new Response('Ignored Webhook Event', { status: 200 })
  }

  if (!response) {
    return new Response('Error handling webhook event', { status: 500 })
  }

  return new Response('Webhook event handled successfully', { status: 200 })
}
