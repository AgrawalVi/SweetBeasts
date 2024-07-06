'use server'

import * as z from 'zod'

import { SettingsSchema } from '@/schemas'
import { db } from '@/lib/db'
import { getUserById } from '@/data/shop/user'
import { currentUser } from '@/lib/auth'

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
  const user = await currentUser()

  if (!user) {
    return { error: 'UNAUTHORIZED' }
  }

  const dbUser = await getUserById(user.id)

  if (!dbUser) {
    return { error: 'UNAUTHORIZED' }
  }

  await db.user.update({
    where: { id: dbUser.id },
    data: {
      ...values,
    },
  })
  return { success: 'settings updated' }
}
