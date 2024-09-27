import 'server-only'

import { db } from '@/lib/db'

export const getProductVariantWithParentById = async (id: number) => {
  try {
    return await db.productVariant.findUnique({
      where: {
        id: id,
      },
      include: {
        parentProduct: true,
      },
    })
  } catch (e) {
    console.error(e)
  }
}

export const getProductVariantById = async (id: number) => {
  try {
    return await db.productVariant.findUnique({
      where: {
        id: id,
      },
    })
  } catch (e) {
    console.error(e)
  }
}

export async function getProductByStripePriceId(
  stripePriceId: string | undefined | null,
) {
  if (!stripePriceId) {
    return null
  }
  try {
    return await db.productVariant.findUnique({
      where: {
        stripePriceId: stripePriceId,
      },
      include: {
        parentProduct: true,
      },
    })
  } catch (e) {
    console.error(e)
    return null
  }
}

export const updateProductInventoryAndNumSold = async (
  id: number,
  quantity: number,
) => {
  try {
    return await db.productVariant.update({
      where: {
        id,
      },
      data: {
        inventory: {
          decrement: quantity,
        },
        numSold: {
          increment: quantity,
        },
      },
    })
  } catch (e) {
    console.error(e)
    return null
  }
}
