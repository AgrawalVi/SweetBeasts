import { db } from '@/lib/db'

export const getOrdersWithEmail = async (email: string) => {
  try {
    const orders = await db.order.findMany({
      where: {
        email,
      },
    })
    return orders
  } catch {
    console.error('Error retrieving orders')
  }
}
