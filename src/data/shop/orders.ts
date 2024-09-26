import 'server-only'

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

export const getOrderByStripeSessionId = async (stripeOrderId: string) => {
  try {
    return await db.order.findUnique({
      where: {
        stripeOrderId
      }
    })
  } catch (e) {
    console.error(e)
    return null
  }
}

export const getOrderWithDataByStripeSessionId = async (
  stripeOrderId: string,
) => {
  try {
    return await db.order.findUnique({
      where: {
        stripeOrderId,
      },
      include: {
        lineItems: {
          include: {
            productVariant: {
              include: { parentProduct: true },
            },
          },
        },
        ShippingAddress: true,
      },
    })
  } catch (e) {
    console.error(e)
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

export const getFourMostRecentOrdersWithDataByUserId = async (
  userId: string,
) => {
  try {
    const orders = await db.order.findMany({
      where: {
        userId,
      },
      include: {
        lineItems: {
          include: { Product: true },
        },
        ShippingAddress: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 4,
    })
    return orders
  } catch (e) {
    console.error('Error getting orders by user id', e)
    return []
  }
}

export const getAllOrdersWithDataByUserId = async (userId: string) => {
  try {
    const orders = await db.order.findMany({
      where: {
        userId,
      },
      include: {
        lineItems: {
          include: { Product: true },
        },
        ShippingAddress: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    return orders
  } catch (e) {
    console.error('Error getting orders by user id', e)
    return []
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
