import { db } from '@/lib/db'

export async function getVerificationTokenByEmail(email: string) {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: { email },
    })
    return verificationToken
  } catch (e) {
    console.error('Error getting verification token by email', e)
    return null
  }
}

export async function getVerificationTokenByToken(token: string) {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: { token },
    })
    return verificationToken
  } catch (e) {
    console.error('Error getting verification token by token', e)
    return null
  }
}

export async function deleteVerificationTokenById(id: string) {
  try {
    await db.verificationToken.delete({
      where: { id },
    })
  } catch (e) {
    console.error('Error deleting verification token', e)
    return null
  }
}
