import { db } from '@/lib/db'

export const createUser = async (
  name: string,
  email: string,
  password: string,
  stripeCustomerId: string,
  newsletterSubscribed: boolean,
) => {
  try {
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password,
        stripeCustomerId,
        newsletterSubscribed,
      },
    })
    return newUser
  } catch (e) {
    console.error('Error creating user', e)
    return null
  }
}

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

export const verifyUserWithEmail = async (id: string, email: string) => {
  try {
    await db.user.update({
      where: {
        id,
      },
      data: {
        emailVerified: new Date(),
        email,
      },
    })
  } catch (e) {
    console.error('Error verifying user', e)
  }
}

export const changePassword = async (id: string, password: string) => {
  try {
    await db.user.update({
      where: {
        id,
      },
      data: {
        password,
      },
    })
  } catch (e) {
    console.error('Error changing password', e)
  }
}
