import 'server-only'

import { db } from '@/lib/db'
import { LineItemWithProduct } from '@/types'

export const getLineItemsByOrderId = async (orderId: number) => {
  let lineItems
  try {
    lineItems = await db.lineItem.findMany({
      where: {
        orderId,
      },
      include: {
        productVariant: {
          include: {
            parentProduct: true
          }
        }
      },
    })
  } catch (e) {
    console.error('Error retrieving line items', e)
    return null
  }

  if (!lineItems) {
    return null
  }

  return lineItems.filter(
    (item): item is LineItemWithProduct =>
      item !== null && item.productId !== null,
  )
}
