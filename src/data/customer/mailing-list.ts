import { db } from '@/lib/db'
import { sendWelcomeEmail } from '@/lib/resend'

export const addToMailingList = async (email: string, resendId: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    })

    const existingContact = await db.mailingList.findUnique({
      where: {
        email,
      },
    })

    if (existingContact) {
      return await updateMailingListSubscribedStatus(email, resendId, true)
    }

    await db.mailingList.create({
      data: {
        resendId,
        email,
        userId: user?.id,
      },
    })
    await sendWelcomeEmail(email)
  } catch (e) {
    console.error('Error adding user to mailing list', e)
    return false
  }
  return true
}

export const getMailingListUserByEmail = async (email: string) => {
  let user
  try {
    user = await db.mailingList.findUnique({
      where: {
        email,
      },
    })
  } catch (e) {
    console.error('Error getting mailing list user by email', e)
    return null
  }
  return user
}

export const updateMailingListSubscribedStatus = async (
  email: string,
  resendId: string,
  subscribed: boolean,
) => {
  try {
    await db.mailingList.update({
      where: {
        email,
      },
      data: {
        resendId,
        subscribed,
      },
    })
  } catch (e) {
    console.error('Error updating mailing list subscribed status', e)
    return false
  }
  return true
}

export const deleteFromMailingList = async (resendId: string) => {
  try {
    await db.mailingList.delete({
      where: {
        resendId,
      },
    })
  } catch (e) {
    console.error('Error deleting user from mailing list', e)
    return false
  }
  return true
}
