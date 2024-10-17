import { db } from '@/lib/db'

export const addToMailingList = async (email: string, resendId: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    })

    await db.mailingList.create({
      data: {
        resendId,
        email,
        userId: user?.id,
      },
    })
  } catch (e) {
    console.error('Error adding user to mailing list', e)
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

export const updateMailingListSubscribedStatus = async (
  resendId: string,
  subscribed: boolean,
) => {
  try {
    await db.mailingList.update({
      where: {
        resendId,
      },
      data: {
        subscribed,
      },
    })
  } catch (e) {
    console.error('Error updating mailing list subscribed status', e)
    return false
  }
  return true
}
