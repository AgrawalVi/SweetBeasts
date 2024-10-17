import 'server-only'

import { LineItemWithProduct } from '@/types'

import { db } from '@/lib/db'

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
            parentProduct: true,
          },
        },
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
