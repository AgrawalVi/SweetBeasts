import 'server-only'

import { db } from '@/lib/db'

export const getOrderById = async (id: number) => {
  try {
    return await db.order.findUnique({
      where: {
        id,
      },
    })
  } catch (e) {
    console.error('Error getting order by id', e)
    return null
  }
}

export const getOrderByOrderNumber = async (orderNumber: string) => {
  try {
    return await db.order.findUnique({
      where: {
        orderNumber,
      },
    })
  } catch (e) {
    console.error('Error getting order by order number', e)
    return null
  }
}

export const getOrderByStripeSessionId = async (stripeOrderId: string) => {
  try {
    return await db.order.findUnique({
      where: {
        stripeOrderId,
      },
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
    return await db.order.findUnique({
      where: {
        email,
        orderNumber,
      },
    })
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
    return await db.order.findUnique({
      where: {
        email,
        orderNumber,
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
    console.error('Error getting order by email and order number', e)
    return null
  }
}

export const getFourMostRecentOrdersWithDataByUserId = async (
  userId: string,
) => {
  try {
    return await db.order.findMany({
      where: {
        userId,
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
      orderBy: {
        createdAt: 'desc',
      },
      take: 4,
    })
  } catch (e) {
    console.error('Error getting orders by user id', e)
    return []
  }
}

export const getAllOrdersWithDataByUserId = async (userId: string) => {
  try {
    return await db.order.findMany({
      where: {
        userId,
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
      orderBy: {
        createdAt: 'desc',
      },
    })
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
    return await db.order.update({
      where: {
        id,
      },
      data: {
        userId,
        guestUserId: null,
      },
    })
  } catch (e) {
    console.error('Error transferring order to user from guest user', e)
    return null
  }
}

export const getOrderWithDataByViewOrderToken = async (token: string) => {
  try {
    return await db.order.findUnique({
      where: {
        viewOrderToken: token,
      },
      include: {
        lineItems: {
          include: { productVariant: { include: { parentProduct: true } } },
        },
      },
    })
  } catch (e) {
    console.error(e)
    return null
  }
}
