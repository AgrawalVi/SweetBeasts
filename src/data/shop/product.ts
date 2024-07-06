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
