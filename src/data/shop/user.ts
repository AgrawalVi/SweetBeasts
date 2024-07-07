import { db } from '@/lib/db'

export const getUserByEmail = async (email: string | undefined) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    })
    return user
  } catch (e) {
    console.error('Error getting user by email', e)
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
  } catch (e) {
    console.error('Error getting user by id', e)
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
    console.error('Error getting user by stripe customer id', e)
    return null
  }
}

export const verifyUser = async (id: string | undefined) => {
  try {
    await db.user.update({
      where: {
        id,
      },
      data: {
        emailVerified: new Date(),
      },
    })
  } catch (e) {
    console.error('Error verifying user', e)
  }
}
