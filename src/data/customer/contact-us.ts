import { db } from '@/lib/db'
import { ContactUsType, GuestUser, Order, User } from '@prisma/client'

export const createContactUsRequestForUser = async (
  user: User,
  name: string,
  message: string,
  contactUsType: ContactUsType,
  order?: Order | null,
) => {
  try {
    const contactUsRequest = await db.contactUsSubmission.create({
      data: {
        userId: user.id,
        email: user.email,
        name,
        orderId: order?.id,
        message: [message],
        contactUsType,
      },
    })
    return contactUsRequest
  } catch (e) {
    console.error('Unable to create contact us request', e)
    return null
  }
}

export const createContactUsRequestForGuestUser = async (
  user: GuestUser,
  name: string,
  message: string,
  contactUsType: ContactUsType,
  order?: Order | null,
) => {
  try {
    const contactUsRequest = await db.contactUsSubmission.create({
      data: {
        guestUserId: user.id,
        email: user.email,
        name,
        orderId: order?.id,
        message: [message],
        contactUsType,
      },
    })
    return contactUsRequest
  } catch (e) {
    console.error('Unable to create contact us request', e)
    return null
  }
}
