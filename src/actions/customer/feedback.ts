'use server'

import { FeedbackSchema } from '@/schemas'
import { ContactUsType, GuestUser, User } from '@prisma/client'
import * as z from 'zod'

import {
  sendFeedBackAdmin,
  sendFeedBack as sendFeedBackEmail,
} from '@/lib/resend'
import {
  createContactUsRequestForGuestUser,
  createContactUsRequestForUser,
} from '@/data/customer/contact-us'
import { getGuestUserByEmail } from '@/data/shop/guest-user'
import { getUserByEmail } from '@/data/shop/user'

import { createGuestUser } from '../shop/guest-user'

export const sendFeedBack = async (data: z.infer<typeof FeedbackSchema>) => {
  const validatedFields = FeedbackSchema.safeParse(data)

  if (!validatedFields.success) {
    return { error: 'Invalid Fields' }
  }

  const { email, name, feedback } = validatedFields.data

  let user: User | null = null
  let guestUser: GuestUser | null = null

  user = await getUserByEmail(email)
  if (!user) {
    guestUser = await getGuestUserByEmail(email)
    if (!user) {
      const response = await createGuestUser(email)
      if (response.success) {
        guestUser = response.success
      }
    }
  }

  if (!user && !guestUser) {
    console.error('Unable to assign user to the request')
  }

  let order

  if (user) {
    const contactUsRequest = await createContactUsRequestForUser(
      user,
      name,
      feedback,
      ContactUsType.FEEDBACK,
      order,
    )
    if (!contactUsRequest) {
      console.error('unable to create contact us request in database')
    }
  } else {
    const contactUsRequest = await createContactUsRequestForGuestUser(
      guestUser!,
      name,
      feedback,
      ContactUsType.FEEDBACK,
      order,
    )
    if (!contactUsRequest) {
      console.error('unable to create contact us request in database')
    }
  }

  try {
    await sendFeedBackEmail(email, name, feedback)
  } catch {
    return { error: 'Error sending email' }
  }
  try {
    await sendFeedBackAdmin(email, name, feedback)
  } catch {
    console.error('Error sending email to the team')
  }

  return { success: 'Feedback sent successfully' }
}
