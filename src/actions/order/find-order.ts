'use server'

import { redirect } from 'next/navigation'
import { FindOrderSchema } from '@/schemas'
import * as z from 'zod'

import { getOrderByEmailAndOrderNumber } from '@/data/shop/orders'

export const findOrder = async (values: z.infer<typeof FindOrderSchema>) => {
  const validatedFields = FindOrderSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid Fields' }
  }

  const { email, orderNumber } = validatedFields.data

  // check if the order exists
  const existingOrder = await getOrderByEmailAndOrderNumber(email, orderNumber)
  if (!existingOrder) {
    return { error: 'Order not found' }
  }

  // can redirect the user to the order page with the view order token
  redirect(`/order-status?orderToken=${existingOrder.viewOrderToken}`)
}
