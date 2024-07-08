import { db } from '@/lib/db'
import { TURBO_TRACE_DEFAULT_MEMORY_LIMIT } from 'next/dist/shared/lib/constants'

export const createGuestUser = async (
  email: string,
  stripeCustomerId: string,
) => {
  try {
    const guestUser = await db.guestUser.create({
      data: {
        email,
        stripeCustomerId,
      },
    })
    return guestUser
  } catch (e) {
    console.error('Error creating guest user', e)
    return null
  }
}

export const getGuestUserByEmail = async (email: string) => {
  try {
    const guestUser = await db.guestUser.findUnique({
      where: {
        email,
      },
    })
    return guestUser
  } catch (e) {
    console.error('Error getting guest user by email', e)
    return null
  }
}

export const getGuestUserWithDataByEmail = async (email: string) => {
  try {
    const guestUser = await db.guestUser.findFirst({
      where: {
        email,
      },
      include: {
        orders: true,
        shippingAddresses: true,
      },
    })
    return guestUser
  } catch (e) {
    console.error('Error getting guest user by email', e)
    return null
  }
}

export const deleteGuestUserById = async (id: string) => {
  try {
    const guestUser = await db.guestUser.delete({
      where: {
        id,
      },
    })
    return guestUser
  } catch (e) {
    console.error('Error deleting guest user by id', e)
    return null
  }
}
