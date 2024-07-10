'use server'

import { getOrderById } from '@/data/shop/orders'
import {
  deleteViewOrderTokenById,
  getViewOrderTokenByToken,
} from '@/data/shop/view-order-token'

export const verifyViewOrderToken = async (token: string) => {
  // find token object by token
  const tokenObject = await getViewOrderTokenByToken(token)

  if (!tokenObject) {
    return { error: 'Token not found' }
  }

  // verify that the token has not expired
  if (tokenObject.expires < new Date()) {
    // delete the token
    const response = await deleteViewOrderTokenById(tokenObject.id)
    if (!response) {
      return { error: 'Error deleting view order token' }
    }
    return { error: 'Token has expired' }
  }
  // then get the order by the orderId
  const order = await getOrderById(tokenObject.orderId)

  if (!order) {
    return { error: 'Order not found' }
  }

  return { success: order }
}
