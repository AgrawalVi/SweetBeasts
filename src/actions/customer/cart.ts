'use server'

import { getUserById } from '@/data/auth/user'
import { getProductById } from '@/data/shop/product'
import {
  getCartItemByUserIdAndProductId,
  getCartItemByGuestIdAndProductId,
  getCartByGuestId as getCartByGuestIdDB,
  getCartByUserId as getCartByUserIdDB,
} from '@/data/shop/cart'
import { db } from '@/lib/db'
import { CartItem } from '@prisma/client'

export const addToUserCart = async (
  userId: string,
  productId: number,
  quantity: number,
) => {
  // Verify that a user exists with the given userId
  let existingUser = await getUserById(userId)
  if (!existingUser) {
    return { error: 'User does not exist' }
  }
  // Verify that a product exists with the given productId
  let existingProduct = await getProductById(productId)
  if (!existingProduct) {
    return { error: 'Product does not exist' }
  }
  // Verify that the quantity is a positive number
  if (quantity < 1) {
    return { error: 'Quantity must be a positive number' }
  }
  // Check if the user already has the product in their cart, and if they do, update the quantity by quantity
  let existingCartItem = await getCartItemByUserIdAndProductId(
    existingUser.id,
    productId,
  )
  if (existingCartItem) {
    // Need to increment quantity of existing cart item by 1
    try {
      await db.cartItem.update({
        where: {
          id: existingCartItem.id,
        },
        data: {
          quantity: existingCartItem.quantity + quantity,
        },
      })
      return { success: 'Cart item updated' }
    } catch {
      return { error: 'Error updating cart item' }
    }
  }

  // Add the product to the user's cart
  try {
    await db.cartItem.create({
      data: {
        productId: productId,
        userId: existingUser.id,
        quantity: quantity,
      },
    })
    return { success: 'Product added to cart' }
  } catch {
    return { error: 'Error adding product to cart' }
  }
}

export const addToGuestCart = async (
  guestId: string,
  productId: number,
  quantity: number,
) => {
  // Verify that the product exists
  const existingProduct = await getProductById(productId)
  if (!existingProduct) {
    return { error: 'Product does not exist' }
  }

  // Verify that the quantity is a positive number
  if (quantity < 1) {
    return { error: 'Quantity must be a positive number' }
  }

  // Check if the guest already has the product in their cart, and if they do, update the quantity by quantity
  const existingCartItem = await getCartItemByGuestIdAndProductId(
    guestId,
    productId,
  )

  if (existingCartItem) {
    // Need to increment the quantity of the existing cart item by quantity
    try {
      await db.cartItem.update({
        where: {
          id: existingCartItem.id,
        },
        data: {
          quantity: existingCartItem.quantity + quantity,
        },
      })
      return { success: 'Cart item updated!' }
    } catch (e) {
      console.log(e)
      return { error: 'Error updating cart item' }
    }
  }

  // Add the product to the guest's cart
  try {
    await db.cartItem.create({
      data: {
        productId: productId,
        guestId: guestId,
        quantity: quantity,
      },
    })
    return { success: 'Product added to cart' }
  } catch {
    return { error: 'Error adding product to cart' }
  }
}

export const getCartByGuestId = async (guestId: string) => {
  try {
    const cart = await getCartByGuestIdDB(guestId)
    if (cart && cart.length > 0) {
      for (const item of cart) {
        const product = await getProductById(item.productId)
        if (product) {
        }
      }
    }

    return { success: cart ? cart : [] }
  } catch {
    return { error: 'Error retrieving guest cart' }
  }
}

export const getCartByUserId = async (id: string) => {
  try {
    const cart = await getCartByUserIdDB(id)
    return { success: cart }
  } catch {
    return { error: 'Error retrieving user cart' }
  }
}

export const clearGuestIdCart = async (guestId: string) => {
  try {
    await db.cartItem.deleteMany({
      where: {
        guestId,
      },
    })
    return { success: 'Cart cleared' }
  } catch {
    return { error: 'Error clearing cart' }
  }
}

export const removeProductFromCartByIdAndProductId = async (
  id: string,
  productId: number,
) => {
  try {
    if (id.slice(0, 6) === 'guest_') {
      await db.cartItem.deleteMany({
        where: {
          guestId: id,
          productId,
        },
      })
    } else {
      await db.cartItem.deleteMany({
        where: {
          userId: id,
          productId,
        },
      })
    }
    return { success: 'Product removed from cart' }
  } catch {
    return { error: 'Error removing product from cart' }
  }
}

export const decrementProductFromCartByIdAndProductId = async (
  id: string,
  productId: number,
) => {
  // first try and get existing cart
  try {
    let existingCartItem: CartItem | null | undefined = null

    if (id.slice(0, 6) === 'guest_') {
      existingCartItem = await getCartItemByGuestIdAndProductId(id, productId)
    } else {
      existingCartItem = await getCartItemByUserIdAndProductId(id, productId)
    }
    if (!existingCartItem) {
      return { success: 'Product removed from cart' }
    }

    // if cart item exists with quantity > 2, decrement quantity by 1
    if (existingCartItem.quantity > 1) {
      await db.cartItem.update({
        where: {
          id: existingCartItem.id,
        },
        data: {
          quantity: existingCartItem.quantity - 1,
        },
      })
    } else {
      await db.cartItem.delete({
        where: {
          id: existingCartItem.id,
        },
      })
    }

    return { success: 'Product decremented from cart' }
  } catch {
    return { error: 'Error decrementing product from cart' }
  }
}
