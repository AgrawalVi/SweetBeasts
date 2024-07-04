import { db } from '@/lib/db'

export const getOrdersWithEmail = async (email: string) => {
  try {
    const orders = await db.order.findMany({
      where: {
        email,
      },
    })
    return orders
  } catch (e) {
    console.error('Error retrieving orders', e)
    return null
  }
}

export const getOrderByEmailAndOrderNumber = async (
  email: string,
  orderNumber: string,
) => {
  try {
    const order = await db.order.findFirst({
      where: {
        email,
        orderNumber,
      },
    })
    return order
  } catch (e) {
    console.error('Error retrieving order', e)
    return null
  }
}

export const getOrderByFindOrderToken = async (token: string) => {
  let order
  let tokenObject
  // find token object by token
  try {
    tokenObject = await db.viewOrderToken.findFirst({
      where: {
        token,
      },
    })
  } catch (e) {
    console.error('Error retrieving token object', e)
    return null
  }

  if (!tokenObject) {
    return null
  }

  // verify that the token has not expired
  if (tokenObject.expires < new Date()) {
    // delete the token
    try {
      await db.viewOrderToken.delete({
        where: { id: tokenObject.id },
      })
    } catch (e) {
      console.error('Error deleting view order token', e)
      return null
    }
    return null
  }
  // then get the order by the orderId
  try {
    order = await db.order.findUnique({
      where: {
        id: tokenObject.orderId,
      },
    })
    return order
  } catch (e) {
    console.error('Error retrieving order', e)
    return null
  }
}

export const getViewOrderTokenByOrderId = async (orderId: number) => {
  try {
    const viewOrderToken = db.viewOrderToken.findFirst({
      where: {
        orderId,
      },
    })
    return viewOrderToken
  } catch (e) {
    console.error('Error retrieving view order token', e)
    return null
  }
}
