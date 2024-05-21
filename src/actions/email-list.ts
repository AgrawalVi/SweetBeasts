'use server'

import { addToGeneralEmailList } from "@/utils/mail"

export async function addToEmailList(email: string) {
  try {
    await addToGeneralEmailList(email)
  } catch (error) {
    console.error(error)
  }
}