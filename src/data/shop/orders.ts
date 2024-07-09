import { db } from '@/lib/db'
import { OrderWithData } from '@/types'

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

export const getOrderWithDataByStripeSessionid = async (
  stripeOrderId: string,
) => {
  try {
    const order = await db.order.findUnique({
      where: {
        stripeOrderId,
      },
      include: {
        lineItems: {
          include: { Product: true },
        },
        ShippingAddress: true,
      },
    })
    console.log('order from db function', order)
    console.log('product from db function', order?.lineItems[0]?.Product)
    return order
  } catch (e) {
    console.error('Error getting order by stripe session id', e)
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

export const getOrderWithDataByEmailAndOrderNumber = async (
  email: string,
  orderNumber: string,
) => {
  try {
    const order = await db.order.findUnique({
      where: {
        email,
        orderNumber,
      },
      include: {
        lineItems: {
          include: { Product: true },
        },
        ShippingAddress: true,
      },
    })
    return order
  } catch (e) {
    console.error('Error getting order by email and order number', e)
    return null
  }
}

export const transferOrderToUserFromGuestUser = async (
  id: number,
  userId: string,
) => {
  try {
    const order = await db.order.update({
      where: {
        id,
      },
      data: {
        userId,
        guestUserId: null,
      },
    })
    return order
  } catch (e) {
    console.error('Error transferring order to user from guest user', e)
    return null
  }
}
