import { db } from "@/lib/db"
import { getUserByEmail } from "../auth/user"

export const getCartByUserEmail = async(email: string) => {
  try {
    const existingUser = await getUserByEmail(email)

  if (!existingUser) {
    return null
  }

  const cart = await db.cartItem.findMany({
    where: {
      userId: existingUser.id
    }
  })

  return cart
  } catch {
    console.error("Error retrieving cart")
  }
}

