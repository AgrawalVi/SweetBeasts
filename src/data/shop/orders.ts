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
