import { db } from '@/lib/db'

export const getOrderById = async (id: number) => {
  try {
    const order = await db.order.findUnique({
      where: {
        id,
      },
    })
    return order
  } catch (e) {
    console.error('Error getting order by id', e)
    return null
  }
}

export const getAllOrdersByEmail = async (email: string) => {
  try {
    const orders = await db.order.findMany({
      where: {
        email,
      },
    })
    return orders
  } catch (e) {
    console.error('Error getting orders by email', e)
    return null
  }
}

export const getOrderByOrderNumber = async (orderNumber: string) => {
  try {
    const order = await db.order.findUnique({
      where: {
        orderNumber,
      },
    })
    return order
  } catch (e) {
    console.error('Error getting order by order number', e)
    return null
  }
}

export const getOrderByEmailAndOrderNumber = async (
  email: string,
  orderNumber: string,
) => {
  try {
    const order = await db.order.findUnique({
      where: {
        email,
        orderNumber,
      },
    })
    return order
  } catch (e) {
    console.error('Error getting order by email and order number', e)
    return null
  }
}
