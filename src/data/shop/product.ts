import 'server-only'

import { db } from '@/lib/db'

export const getProductById = async (id: number) => {
  try {
    const product = await db.product.findUnique({
      where: {
        id: id,
      },
    })
    return product
  } catch (e) {
    console.error('Error getting product by id', e)
  }
}

export const getProductByName = async (name: string) => {
  try {
    const product = await db.product.findFirst({
      where: {
        name: {
          equals: name,
          mode: 'insensitive',
        },
      },
    })
    return product
  } catch (e) {
    console.error('Error getting product by name', e)
  }
}

export const getProducts = async () => {
  try {
    const products = await db.product.findMany()
    return products
  } catch (e) {
    console.error('Error getting products', e)
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
  } catch (e) {
    console.error('Error getting product by stripe price id', e)
    return null
  }
}

export const updateProductInventoryAndNumSold = async (
  id: number,
  quantity: number,
) => {
  try {
    const product = await db.product.update({
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
    return product
  } catch (e) {
    console.error('Error updating product inventory and num sold', e)
    return null
  }
}
