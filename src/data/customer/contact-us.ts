import { db } from '@/lib/db'
import { GuestUser, Order, User } from '@prisma/client'

export const createContactUsRequestForUser = async (
  user: User,
  name: string,
  message: string,
  order?: Order | null | undefined,
) => {
  try {
    const contactUsRequest = await db.contactUsSubmission.create({
      data: {
        userId: user.id,
        email: user.email,
        name,
        orderId: order?.id,
        message: [message],
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
  order: Order | null | undefined,
) => {
  try {
    const contactUsRequest = await db.contactUsSubmission.create({
      data: {
        guestUserId: user.id,
        email: user.email,
        name,
        orderId: order?.id,
        message: [message],
      },
    })
    return contactUsRequest
  } catch (e) {
    console.error('Unable to create contact us request', e)
    return null
  }
}
