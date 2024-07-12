import 'server-only'

import { db } from '@/lib/db'

export const getViewOrderTokenByOrderId = async (orderId: number) => {
  try {
    const viewOrderToken = db.viewOrderToken.findFirst({
      where: {
        orderId,
      },
    })
    return viewOrderToken
  } catch (e) {
    console.error('Error getting view order token by order id', e)
    return null
  }
}

export const getViewOrderTokenByToken = async (token: string) => {
  try {
    const viewOrderToken = db.viewOrderToken.findUnique({
      where: {
        token,
      },
    })
    return viewOrderToken
  } catch (e) {
    console.error('Error getting view order token by token', e)
    return null
  }
}

export const deleteViewOrderTokenById = async (id: string) => {
  try {
    const token = db.viewOrderToken.delete({
      where: {
        id,
      },
    })
    return token
  } catch (e) {
    console.error('Error deleting view order token', e)
    return null
  }
}
