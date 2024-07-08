import { db } from '@/lib/db'
import { getUserByEmail } from './user'
import { CartItem } from '@prisma/client'
import { getProductById } from './product'
import { CartItem as CartItemType } from '@/hooks/use-shopping-cart'

export const createUserCartItem = async (
  productId: number,
  userId: string,
  quantity: number,
) => {
  try {
    const cartItem = await db.cartItem.create({
      data: {
        productId,
        userId,
        quantity,
      },
    })
    return cartItem
  } catch (e) {
    console.error('Error creating user cart item', e)
    return null
  }
}

export const createGuestCartItem = async (
  productId: number,
  guestId: string,
  quantity: number,
) => {
  try {
    const cartItem = await db.cartItem.create({
      data: {
        productId,
        guestId,
        quantity,
      },
    })
    return cartItem
  } catch (e) {
    console.error('Error creating guest cart item', e)
    return null
  }
}

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
    return []
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
    return []
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
    return null
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
    return null
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

export const addToCartUsingCartId = async (
  existingCartItem: CartItem,
  quantity: number,
) => {
  try {
    const cartItem = await db.cartItem.update({
      where: {
        id: existingCartItem.id,
      },
      data: {
        quantity: existingCartItem.quantity + quantity,
      },
    })
    return cartItem
  } catch (e) {
    console.error('Error adding to cart using cart id', e)
    return null
  }
}

export const deleteCartItemById = async (id: number) => {
  try {
    const cartItem = await db.cartItem.delete({
      where: {
        id,
      },
    })
    return cartItem
  } catch (e) {
    console.error('Error deleting cart item by id', e)
    return null
  }
}

export const deleteCartItemsByGuestId = async (guestId: string) => {
  try {
    const cartItems = await db.cartItem.deleteMany({
      where: {
        guestId,
      },
    })
    return cartItems
  } catch (e) {
    console.error('Error deleting cart items by guest id', e)
    return null
  }
}

export const deleteCartItemByGuestIdAndProductId = async (
  guestId: string,
  productId: number,
) => {
  try {
    const cartItem = await db.cartItem.deleteMany({
      where: {
        guestId,
        productId,
      },
    })
    return cartItem
  } catch (e) {
    console.error('Error deleting cart item by guest id and product id', e)
    return null
  }
}

export const deleteCartItemsByUserId = async (userId: string) => {
  try {
    const cartItems = await db.cartItem.deleteMany({
      where: {
        userId,
      },
    })
    return cartItems
  } catch (e) {
    console.error('Error deleting cart items by guest id', e)
    return null
  }
}

export const deleteCartItemByUserIdAndProductId = async (
  userId: string,
  productId: number,
) => {
  try {
    const cartItem = await db.cartItem.deleteMany({
      where: {
        userId,
        productId,
      },
    })
    return cartItem
  } catch (e) {
    console.error('Error deleting cart item by user id and product id', e)
    return null
  }
}
