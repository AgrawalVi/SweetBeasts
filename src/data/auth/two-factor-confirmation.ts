import { db } from '@/lib/db'

export const getTwoFactorConfirmationByUserId = async (userId: string) => {
  try {
    const twoFactorConfirmation = await db.twoFactorConfirmation.findUnique({
      where: { userId },
    })

    return twoFactorConfirmation
  } catch (e) {
    console.error(
      'Error in @/data/auth/two-factor-confirmation.ts getTwoFactorConfirmationByUserId',
      e,
    )
    return null
  }
}

export const deleteTwoFactorConfirmation = async (id: string) => {
  try {
    await db.twoFactorConfirmation.delete({
      where: { id },
    })
  } catch (e) {
    console.error(
      'Error in @/data/auth/two-factor-confirmation.ts deleteTwoFactorConfirmation',
      e,
    )
    return null
  }
}
