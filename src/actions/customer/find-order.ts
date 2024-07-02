'use server'

import { FindOrderSchema } from '@/schemas'
import * as z from 'zod'
import { db } from '@/lib/db'

export const findOrder = async (values: z.infer<typeof FindOrderSchema>) => {
  const validatedFields = FindOrderSchema.safeParse(values)
}
