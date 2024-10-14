import 'server-only'

import { db } from '@/lib/db'

export const createGuestUser = async (
  email: string,
  stripeCustomerId: string,
) => {
  try {
    return await db.guestUser.create({
      data: {
        email,
        stripeCustomerId,
      },
    })
  } catch (e) {
    console.error('Error creating guest user', e)
    return null
  }
}

export const getGuestUserByEmail = async (email: string) => {
  try {
    return await db.guestUser.findUnique({
      where: {
        email,
      },
    })
  } catch (e) {
    console.error('Error getting guest user by email', e)
    return null
  }
}

export const getGuestUserWithDataByEmail = async (email: string) => {
  try {
    return await db.guestUser.findFirst({
      where: {
        email,
      },
      include: {
        orders: true,
        shippingAddresses: true,
      },
    })
  } catch (e) {
    console.error('Error getting guest user by email', e)
    return null
  }
}

export const deleteGuestUserById = async (id: string) => {
  try {
    return await db.guestUser.delete({
      where: {
        id,
      },
    })
  } catch (e) {
    console.error('Error deleting guest user by id', e)
    return null
  }
}
