'use server'

import { getUserByEmail } from "@/data/auth/user";
import { getProductById } from "@/data/shop/product";
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