'use server'

import { getUserByEmail } from "@/data/auth/user";
import { getProductById } from "@/data/shop/product";
import { getCartItemByUserIdAndProductId } from "@/data/shop/cart";
import { db } from "@/lib/db";

export const addToCart = async (userEmail: string, productId: number, quantity: number) => {
  // Verify that a user exists with the given userId
  let existingUser = await getUserByEmail(userEmail)
  if (!existingUser) {
    return { error: "User does not exist"}
  }
  // Verify that a product exists with the given productId
  let existingProduct = await getProductById(productId)
  if (!existingProduct) {
    return { error: "Product does not exist" }
  }
  // Verify that the quantity is a positive number
  if (quantity < 1) {
    return { error: "Quantity must be a positive number" }
  }
  // Check if the user already has the product in their cart, and if they do, update the quantity by 1
  let existingCartItem = await getCartItemByUserIdAndProductId(existingUser.id, productId)
  if (existingCartItem) {
    // Need to increment quantity of existing cart item by 1
    try {
      await db.cartItem.update({
        where: {
          id: existingCartItem.id
        },
        data: {
          quantity: existingCartItem.quantity + quantity
        }
      })
      return { success: "Cart item updated" }
    } catch {
      return { error: "Error updating cart item" }
    }
  }

  // Add the product to the user's cart
  try {
    await db.cartItem.create({
      data: {
        productId: productId,
        userId: existingUser.id,
        quantity: quantity
      }
    })
    return { success: "Product added to cart" }
  } catch {
    return { error: "Error adding product to cart" }
  }
}