import { db } from '@/lib/db'
import { getUserByEmail } from '../auth/user'
import { CartItem } from '@prisma/client'
import { getProductById } from './product'
import { CartItem as CartItemType } from '@/hooks/use-shopping-cart'

export const getCartByUserId = async (id: string) => {
  try {
    const cart = await db.cartItem.findMany({
      where: {
        userId: id,
      },
    })

    return cart ? cart : []
  } catch {
    console.error('Error retrieving user cart')
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
    console.error('Error retrieving guest cart')
  }
}

export const getCartItemByGuestIdAndProductId = async (
  guestId: string,
  productId: number,
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
    console.error('Error retrieving cart item')
  }
}

export const getCartItemByUserIdAndProductId = async (
  userId: string,
  productId: number,
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
    console.error('Error retrieving cart item')
  }
}

export const getTotalCartPrice = async (cart: CartItemType[]) => {
  let totalPrice = 0

  for (const item of cart) {
    let product = await getProductById(item.productId)
    if (product) {
      totalPrice += product.priceInCents * item.quantity
    }
  }

  return totalPrice
}
