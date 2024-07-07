import { db } from '@/lib/db'
import { stripeLineItemWithProductId } from '@/types'

export const createOpenCheckoutSession = async (
  stripeCheckoutSessionId: string,
  items: stripeLineItemWithProductId[],
) => {
  try {
    const openCheckoutSession = await db.openCheckoutSessions.create({
      data: {
        stripeCheckoutSessionId,
        products: {
          connect: items.map((item) => ({
            id: item.id,
          })),
        },
      },
    })
    return openCheckoutSession
  } catch (e) {
    console.error('Error creating open checkout session', e)
    return null
  }
}

export const getAllOpenCheckoutSessionsWithProductByProductId = async (
  productId: number,
) => {
  try {
    const openCheckoutSessions = await db.openCheckoutSessions.findMany({
      where: {
        products: {
          some: {
            id: productId,
          },
        },
      },
    })
    return openCheckoutSessions
  } catch (e) {
    console.error('Error getting all open checkout sessions with product', e)
    return []
  }
}

export const deleteOpenCheckoutSessionById = async (id: number) => {
  try {
    const openCheckoutSession = await db.openCheckoutSessions.delete({
      where: {
        id,
      },
    })
    return openCheckoutSession
  } catch (e) {
    console.error('Error deleting open checkout session', e)
    return null
  }
}

export const deleteOpenCheckoutSessionByStripeCheckoutSessionId = async (
  stripeCheckoutSessionId: string,
) => {
  try {
    const openCheckoutSession = await db.openCheckoutSessions.delete({
      where: {
        stripeCheckoutSessionId,
      },
    })
    return openCheckoutSession
  } catch (e) {
    console.error('Error deleting open checkout session', e)
    return null
  }
}
