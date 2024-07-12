import 'server-only'

import { db } from '@/lib/db'

export const getTwoFactorConfirmationByUserId = async (userId: string) => {
  try {
    const twoFactorConfirmation = await db.twoFactorConfirmation.findUnique({
      where: { userId },
    })
    return twoFactorConfirmation
  } catch (e) {
    console.error('Error getting two factor confirmation by user id', e)
    return null
  }
}

export const deleteTwoFactorConfirmationById = async (id: string) => {
  try {
    const confirmation = await db.twoFactorConfirmation.delete({
      where: { id },
    })
    return confirmation
  } catch (e) {
    console.error('Error deleting two factor confirmation', e)
    return null
  }
}

export const createTwoFactorConfirmation = async (userId: string) => {
  try {
    const confirmation = await db.twoFactorConfirmation.create({
      data: {
        userId,
      },
    })
    return confirmation
  } catch (e) {
    console.error('Error creating two factor confirmation', e)
    return null
  }
}
