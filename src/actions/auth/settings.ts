'use server'

import * as z from 'zod'

import bcrypt from 'bcryptjs'

import { db } from '@/lib/db'
import { getUserById } from '@/data/shop/user'
import { currentUser } from '@/lib/auth'
import { ChangeNameSchema, ChangePasswordSchema } from '@/schemas'

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

  // TODO: move this to database folder
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

export const updatePassword = async (
  values: z.infer<typeof ChangePasswordSchema>,
) => {
  const validatedFields = ChangePasswordSchema.safeParse(values)
  if (!validatedFields.success) {
    return { error: 'Invalid Fields' }
  }

  const { currentPassword, newPassword, confirmNewPassword } =
    validatedFields.data

  const user = await currentUser()

  if (!user) {
    return { error: 'Unauthorized' }
  }

  const dbUser = await getUserById(user.id)

  if (!dbUser) {
    return { error: 'Unauthorized' }
  }

  const passwordsMatch = await bcrypt.compare(currentPassword, dbUser.password)

  if (!passwordsMatch) {
    return { error: 'Incorrect Password' }
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10)

  // TODO: move this to database folder
  await db.user.update({
    where: {
      id: user.id,
    },
    data: {
      password: hashedPassword,
    },
  })

  return { success: 'Password updated' }
}
