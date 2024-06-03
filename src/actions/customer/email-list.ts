'use server'

import { addToGeneralEmailList } from '@/lib/resend'

export async function addToEmailList(email: string) {
  try {
    await addToGeneralEmailList(email)
    return { success: true }
  } catch (error) {
    return { error: 'An unknown error occurred, please try again' }
  }
}
