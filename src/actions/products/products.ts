'use server'

import { getProductById as getProductByIdDB } from '@/data/shop/product'

export const getProductById = async (productId: number) => {
  try {
    const product = await getProductByIdDB(productId)
    if (product) {
      return { success: product }
    }
    return { error: 'Product does not exist!' }
  } catch {
    return { error: 'Error retrieving product' }
  }
}
