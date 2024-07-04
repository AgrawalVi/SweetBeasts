'use server'

import { FindOrderSchema } from '@/schemas'
import * as z from 'zod'
import { getOrderByEmailAndOrderNumber } from '@/data/shop/orders'
import { generateViewOrderToken } from '@/lib/tokens'
import { redirect } from 'next/navigation'

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

  // now that we know the order exists, we can create a view order token and redirect the user to the order page
  const viewOrderToken = await generateViewOrderToken(existingOrder.id)

  if (!viewOrderToken) {
    return { error: 'Error creating view order token' }
  }

  // can redirect the user to the order page with the view order token
  redirect(`/order-status?orderToken=${viewOrderToken.token}`)
}
