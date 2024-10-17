import 'server-only'

import { stripeLineItemWithProductId } from '@/types'

import { db } from '@/lib/db'

export const createOpenCheckoutSession = async (
  stripeCheckoutSessionId: string,
  items: stripeLineItemWithProductId[],
) => {
  try {
    return await db.openCheckoutSessions.create({
      data: {
        stripeCheckoutSessionId,
        products: {
          connect: items.map((item) => ({
            id: item.id,
          })),
        },
      },
    })
  } catch (e) {
    console.error('Error creating open checkout session', e)
    return null
  }
}

export const getAllOpenCheckoutSessionsWithProductByProductId = async (
  productId: number,
) => {
  try {
    return await db.openCheckoutSessions.findMany({
      where: {
        products: {
          some: {
            id: productId,
          },
        },
      },
    })
  } catch (e) {
    console.error('Error getting all open checkout sessions with product', e)
    return []
  }
}

export const deleteOpenCheckoutSessionById = async (id: number) => {
  try {
    return await db.openCheckoutSessions.delete({
      where: {
        id,
      },
    })
  } catch (e) {
    console.error('Error deleting open checkout session', e)
    return null
  }
}

export const deleteOpenCheckoutSessionByStripeCheckoutSessionId = async (
  stripeCheckoutSessionId: string,
) => {
  try {
    await db.openCheckoutSessions.delete({
      where: {
        stripeCheckoutSessionId,
      },
    })
  } catch (e) {
    console.error('Error deleting open checkout session', e)
    return null
  }
}
