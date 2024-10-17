'use server'

import { CartItem as LocalCartItem } from '@/hooks/use-shopping-cart'
import {
  addToCartUsingCartId,
  createGuestCartItem,
  createUserCartItem,
  deleteCartItemByGuestIdAndProductId,
  deleteCartItemById,
  deleteCartItemByUserIdAndProductId,
  deleteCartItemsByGuestId,
  deleteCartItemsByUserId,
  getCartByGuestId as getCartByGuestIdDB,
  getCartByUserId as getCartByUserIdDB,
  getCartItemByGuestIdAndProductId,
  getCartItemByUserIdAndProductId,
  getTotalCartPrice as getTotalCartPriceDB,
} from '@/data/shop/cart'
import { getProductVariantWithParentById } from '@/data/shop/product'
import { getUserById } from '@/data/shop/user'

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
  let existingProduct = await getProductVariantWithParentById(productId)
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
    // Need to increment quantity of existing cart item by quantity
    const response = await addToCartUsingCartId(existingCartItem, quantity)
    if (!response) {
      return { error: 'Error updating cart item' }
    } else {
      return { success: 'Cart item updated' }
    }
  }

  // Add the product to the user's cart
  const response = await createUserCartItem(productId, userId, quantity)
  if (!response) {
    return { error: 'Error adding product to cart' }
  } else {
    return { success: 'Product added to cart' }
  }
}

export const addToGuestCart = async (
  guestId: string,
  productId: number,
  quantity: number,
) => {
  // Verify that the product exists
  const existingProduct = await getProductVariantWithParentById(productId)
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
    const response = await addToCartUsingCartId(existingCartItem, quantity)
    if (!response) {
      return { error: 'Error updating cart item' }
    } else {
      return { success: 'Cart item updated!' }
    }
  }

  // Add the product to the guest's cart
  const response = await createGuestCartItem(productId, guestId, quantity)
  if (!response) {
    return { error: 'Error adding product to cart' }
  } else {
    return { success: 'Product added to cart' }
  }
}

export const getCartByGuestId = async (guestId: string) => {
  try {
    const cart = await getCartByGuestIdDB(guestId)
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
  const cartItems = await deleteCartItemsByGuestId(guestId)
  if (!cartItems) {
    return { error: 'Error clearing cart' }
  } else {
    return { success: 'Cart cleared' }
  }
}

export const clearUserCart = async (userId: string) => {
  const cartItems = await deleteCartItemsByUserId(userId)
  if (!cartItems) {
    return { error: 'Error clearing cart' }
  } else {
    return { success: 'Cart cleared' }
  }
}

export const removeProductFromCartByIdAndProductId = async (
  id: string,
  productId: number,
) => {
  if (id.slice(0, 6) === 'guest_') {
    const cartItems = await deleteCartItemByGuestIdAndProductId(id, productId)
    if (!cartItems) {
      return { error: 'Error removing product from cart' }
    }
  } else {
    const cartItems = await deleteCartItemByUserIdAndProductId(id, productId)
    if (!cartItems) {
      return { error: 'Error removing product from cart' }
    }
  }
  return { success: 'Product removed from cart' }
}

export const decrementProductFromCartByIdAndProductId = async (
  userId: string,
  productId: number,
) => {
  // first try and get existing cart
  let existingCartItem

  if (userId.slice(0, 6) === 'guest_') {
    existingCartItem = await getCartItemByGuestIdAndProductId(userId, productId)
  } else {
    existingCartItem = await getCartItemByUserIdAndProductId(userId, productId)
  }
  if (!existingCartItem) {
    return { success: 'Product removed from cart' }
  }

  // if cart item exists with quantity > 2, decrement quantity by 1
  if (existingCartItem.quantity > 1) {
    const response = await addToCartUsingCartId(existingCartItem, -1)
    if (!response) {
      return { error: 'Error updating cart item' }
    }
    // otherwise, delete the cart item
  } else {
    const response = await deleteCartItemById(existingCartItem.id)
    if (!response) {
      return { error: 'Error deleting cart item' }
    }
  }

  return { success: 'Product decremented from cart' }
}

export const getTotalCartPrice = async (cart: LocalCartItem[]) => {
  try {
    const totalPrice = await getTotalCartPriceDB(cart)
    return { success: totalPrice }
  } catch {
    return { error: 'Error retrieving total cart price' }
  }
}
