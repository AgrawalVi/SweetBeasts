'use server'

import * as z from 'zod'

import { db } from '@/lib/db'
import { getUserById } from '@/data/shop/user'
import { currentUser } from '@/lib/auth'
import { ChangeNameSchema } from '@/schemas'

export const updateSettings = async (
  values: z.infer<typeof ChangeNameSchema>,
) => {
  const validatedFields = ChangeNameSchema.safeParse(values)
  if (!validatedFields.success) {
    return { error: 'Invalid Fields' }
  }

  const { firstName, lastName } = validatedFields.data

  const user = await currentUser()

  if (!user) {
    return { error: 'Unauthorized' }
  }

  const dbUser = await getUserById(user.id)

  if (!dbUser) {
    return { error: 'Unauthorized' }
  }

  await db.user.update({
    where: {
      id: user.id,
    },
    data: {
      firstName,
      lastName,
    },
  })

  // TODO: update stripe customer information

  return { success: 'Settings updated' }
}
