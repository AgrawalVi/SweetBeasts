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

export const getProductByStripePriceId = async (stripePriceId: string) => {
  try {
    const product = await db.product.findUnique({
      where: {
        stripePriceId: stripePriceId,
      },
    })
    return product
  } catch {
    console.error('Error retrieving product')
  }
}
