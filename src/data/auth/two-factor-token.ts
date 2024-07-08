import { db } from '@/lib/db'

export const getTwoFactorTokenByToken = async (token: string) => {
  try {
    const twoFactorToken = await db.twoFactorToken.findUnique({
      where: { token },
    })

    return twoFactorToken
  } catch (e) {
    console.error('Error getting two factor token by token', e)
    return null
  }
}

export const getTwoFactorTokenByEmail = async (email: string) => {
  try {
    const twoFactorToken = await db.twoFactorToken.findFirst({
      where: { email },
    })

    return twoFactorToken
  } catch (e) {
    console.error('Error getting two factor token by email', e)
    return null
  }
}

export const deleteTwoFactorTokenById = async (id: string) => {
  try {
    const token = await db.twoFactorToken.delete({
      where: { id },
    })
    return token
  } catch (e) {
    console.error('Error deleting two factor token', e)
    return null
  }
}
