import Cookies from 'js-cookie'

import { CartItem } from '@/hooks/use-shopping-cart'
import {
  addToUserCart,
  clearGuestIdCart,
  getCartByUserId,
} from '@/actions/customer/cart'

export const cartLoginHandler = async (
  guestCart: CartItem[],
  guestId: string,
  userId: string,
) => {
  console.log('hello')
  if (guestCart.length > 0 && userId) {
    // add all the current items to the user's cart
    await Promise.all(
      guestCart.map(async (item) => {
        const response = await addToUserCart(
          userId,
          item.productId,
          item.quantity,
        )
        console.log(response)
      }),
    )

    // Retrieve the user's cart items from the database
    const response = await getCartByUserId(userId)
    if (response.error) {
      console.error(response.error)
    }
    const cartItems = response.success

    // Clear the guest's cart if there's a guestId
    if (guestId) {
      console.log('deleting guest cart', guestId)
      await clearGuestIdCart(guestId)
      Cookies.remove('guestId')
    }

    // Extract necessary data from cart items and set the cart state
    if (cartItems) {
      const formattedCartItems = cartItems.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      }))
      return formattedCartItems
    } else {
      return []
    }
  }

  return []
}
