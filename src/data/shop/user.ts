import 'server-only'

import { db } from '@/lib/db'

export const createUser = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  stripeCustomerId: string,
) => {
  try {
    const newUser = await db.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
        stripeCustomerId,
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

export const addStripeCustomerIdToUser = async (
  userId: string,
  stripeCustomerId: string,
) => {
  try {
    const user = await db.user.update({
      where: {
        id: userId,
      },
      data: {
        stripeCustomerId,
      },
    })
    return user
  } catch (e) {
    console.error('Error adding stripe customer id to user', e)
    return null
  }
}

export const verifyUser = async (id: string | undefined) => {
  try {
    const user = await db.user.update({
      where: {
        id,
      },
      data: {
        emailVerified: new Date(),
      },
    })
    return user
  } catch (e) {
    console.error('Error verifying user', e)
    return null
  }
}

export const verifyUserWithEmail = async (id: string, email: string) => {
  try {
    const user = await db.user.update({
      where: {
        id,
      },
      data: {
        emailVerified: new Date(),
        email,
      },
    })
    return user
  } catch (e) {
    console.error('Error verifying user', e)
    return null
  }
}

export const changePasswordById = async (id: string, password: string) => {
  try {
    const user = await db.user.update({
      where: {
        id,
      },
      data: {
        password,
      },
    })
    return user
  } catch (e) {
    console.error('Error changing password', e)
    return null
  }
}

export const changeUserNameById = async (
  id: string,
  firstName: string,
  lastName: string,
) => {
  try {
    const user = await db.user.update({
      where: {
        id,
      },
      data: {
        firstName,
        lastName,
      },
    })
    return user
  } catch (e) {
    console.error('Error changing user name', e)
    return null
  }
}
