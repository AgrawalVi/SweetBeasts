import { db } from "@/lib/db"
import { getUserByEmail } from "../auth/user"
import { CartItem } from "@prisma/client"

export const getCartByUserEmail = async (email: string) => {
  try {
    const existingUser = await getUserByEmail(email)

    if (!existingUser) {
      return null
    }

    const cart = await db.cartItem.findMany({
      where: {
        userId: existingUser.id,
      },
    })

    return cart ? cart : []
  } catch {
    console.error("Error retrieving user cart")
  }
}

export const getCartByGuestId = async (guestId: string) => {
  try {
    const cart = await db.cartItem.findMany({
      where: {
        guestId: guestId,
      },
    })

    return cart ? cart : []
  } catch {
    console.error("Error retrieving guest cart")
  }
}

export const getCartItemByGuestIdAndProductId = async (
  guestId: string,
  productId: number
) => {
  try {
    const cartItem = await db.cartItem.findFirst({
      where: {
        guestId: guestId,
        productId: productId,
      },
    })

    return cartItem
  } catch {
    console.error("Error retrieving cart item")
  }
}

export const getCartItemByEmailAndProductId = async (
  email: string,
  productId: number
) => {
  try {
    const existingUser = await getUserByEmail(email)

    if (!existingUser) {
      return null
    }

    const cartItem = await db.cartItem.findFirst({
      where: {
        userId: existingUser.id,
        productId: productId,
      },
    })

    return cartItem
  } catch {
    console.error("Error retrieving cart item")
  }
}

export const getCartItemByUserIdAndProductId = async (
  userId: string,
  productId: number
) => {
  try {
    const cartItem = await db.cartItem.findFirst({
      where: {
        userId: userId,
        productId: productId,
      },
    })

    return cartItem
  } catch {
    console.error("Error retrieving cart item")
  }
}