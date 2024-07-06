import { db } from '@/lib/db'

export const getUserByEmail = async (email: string | undefined) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    })
    return user
  } catch {
    return null
  }
}

export const getUserById = async (id: string | undefined) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    })
    return user
  } catch {
    return null
  }
}

export const getUserByStripeCustomerId = async (stripeCustomerId: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        stripeCustomerId,
      },
    })
    return user
  } catch (e) {
    console.error('Error retrieving user by stripe customer id', e)
    return null
  }
}
