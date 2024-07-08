import { db } from '@/lib/db'
import { notEmpty } from '@/lib/utils'
import { LineItemWithProduct } from '@/types'
import { LineItem, Product } from '@prisma/client'

export const getLineItemsByOrderId = async (orderId: number) => {
  let lineItems
  try {
    lineItems = await db.lineItem.findMany({
      where: {
        orderId,
      },
      include: {
        Product: true,
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
      item !== null && item.Product !== null,
  )
}
