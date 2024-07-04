import { db } from '@/lib/db'

export const getProductById = async (id: number) => {
  try {
    const product = await db.product.findUnique({
      where: {
        id: id,
      },
    })
    return product
  } catch {
    console.error('Error retrieving product')
  }
}

export async function getProductByStripePriceId(
  stripePriceId: string | undefined | null,
) {
  try {
    if (!stripePriceId) {
      return null
    }
    const product = await db.product.findFirst({
      where: {
        stripePriceId: stripePriceId,
      },
    })
    return product
  } catch {
    return null
  }
}

export const setProductNumAvailable = async (
  productId: number,
  numAvailable: number,
) => {
  try {
    const product = await db.product.update({
      where: {
        id: productId,
      },
      data: {
        numAvailable: numAvailable,
      },
    })
    return product
  } catch {
    console.error('Error updating product')
  }
}
