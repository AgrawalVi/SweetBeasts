'use server'

import { getGuestUserByEmail } from '@/data/shop/guest-user'
import { getUserByEmail } from '@/data/shop/user'
import { ContactSchema } from '@/schemas'
import * as z from 'zod'
import { createGuestUser } from '../shop/guest-user'
import { ContactUsType, GuestUser, User } from '@prisma/client'
import { createContactUsRequestForUser } from '@/data/customer/contact-us'
import { createContactUsRequestForGuestUser } from '@/data/customer/contact-us'
import { getOrderByOrderNumber } from '@/data/shop/orders'
import { sendContactUs as sendContactUsEmail } from '@/lib/resend'
import { sendContactUsAdmin } from '@/lib/resend'

export const sendContactUs = async (data: z.infer<typeof ContactSchema>) => {
  const validatedFields = ContactSchema.safeParse(data)

  if (!validatedFields.success) {
    return { error: 'Invalid Fields' }
  }

  const { email, name, orderNumber, message } = validatedFields.data

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

  if (orderNumber) {
    order = await getOrderByOrderNumber(orderNumber)
  }

  if (user) {
    const contactUsRequest = await createContactUsRequestForUser(
      user,
      name,
      message,
      ContactUsType.SUPPORT,
      order,
    )
    if (!contactUsRequest) {
      console.error('unable to create contact us request in database')
    }
  } else {
    const contactUsRequest = await createContactUsRequestForGuestUser(
      guestUser!,
      name,
      message,
      ContactUsType.SUPPORT,
      order,
    )
    if (!contactUsRequest) {
      console.error('unable to create contact us request in database')
    }
  }

  // finally, send email to person who created the request
  try {
    await sendContactUsEmail(email, name, message)
  } catch {
    return { error: 'Error sending email' }
  }
  try {
    await sendContactUsAdmin(email, name, message, orderNumber)
  } catch {
    console.log('Error sending email to the team')
  }

  return { success: 'Successfully submitted' }
}