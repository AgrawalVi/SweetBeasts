import { db } from '@/lib/db'
import { notEmpty } from '@/lib/utils'

export const getLineItemsByOrderId = async (orderId: number) => {
  let lineItems
  let toReturn
  try {
    lineItems = await db.lineItem.findMany({
      where: {
        orderId,
      },
    })
  } catch (e) {
    console.error('Error retrieving line items', e)
    return null
  }

  if (!lineItems) {
    return null
  }

  try {
    toReturn = await Promise.all(
      lineItems.map(async (item) => {
        const product = await db.product.findUnique({
          where: {
            id: item.productId,
          },
        })
        if (!product) {
          return null
        } else {
          return {
            ...item,
            product: product,
          }
        }
      }),
    ).then((results) => results.filter(notEmpty))
  } catch (e) {
    console.error('Error retrieving line items', e)
    return null
  }

  return toReturn
}
