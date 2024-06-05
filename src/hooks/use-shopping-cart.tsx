'use client'

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react'
import { useCurrentUser } from '@/hooks/use-current-user'

import { logout } from '@/actions/auth/logout'
import { v4 as uuidv4 } from 'uuid'
import Cookies from 'js-cookie'

import {
  addToUserCart,
  addToGuestCart,
  getCartByGuestId,
  getCartByUserId,
  removeProductFromCartByIdAndProductId,
  decrementProductFromCartByIdAndProductId,
} from '@/actions/customer/cart'
import { getProductById } from '@/actions/products/products'

import { cartLoginHandler } from '@/utils/cart-utils'

export interface CartItem {
  productId: number
  quantity: number
}

interface ShoppingCartContextType {
  cart: CartItem[]
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
  addToCart: (
    item: CartItem,
  ) => Promise<{ error: string } | { success: string }>
  removeItemFromCart: (
    id: number,
  ) => Promise<{ error: string } | { success: string }>
  decrementItemFromCart: (
    id: number,
  ) => Promise<{ error: string } | { success: string }>
  clearCart: () => void
  handleLogout: () => Promise<void>
  handleLogin: () => Promise<void>
  guestId: string | null
}

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(
  undefined,
)

const generateGuestId = () => {
  return `guest_${uuidv4()}`
}

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const user = useCurrentUser()

  const [guestId, setGuestId] = useState<string | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('shopping_cart')
      return storedCart ? JSON.parse(storedCart) : []
    }
    return []
  })

  /**
   * Make sure there's a guestId in the cookie if there's no user
   */
  useEffect(() => {
    if (!user) {
      // retrieve guestId from cookie if there's no user
      const storedGuestId = Cookies.get('guestId')
      if (storedGuestId) {
        setGuestId(storedGuestId)
      } else {
        // generate a new guestId if one doesn't exist
        const newGuestId = generateGuestId()
        Cookies.set('guestId', newGuestId, { expires: 365 })
        setGuestId(newGuestId)
      }
    }
  }, [user])

  // Fetches cart items for a guest or user whenever there's a change in user or guestId
  useEffect(() => {
    if (user || guestId) {
      fetchCartItems()
    }
  }, [user, guestId])

  // Sets the local storage to the updated cart whenever there's a change in the cart
  useEffect(() => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart))
  }, [cart])

  const fetchCartItems = async () => {
    // If user exists, fetch cart items by userId
    if (user?.id) {
      // Fetch cart items by userId
      const response = await getCartByUserId(user.id)
      if (response.error) {
        return { error: response.error }
      }
      const cartItems = response.success
      // Extract necessary data from cart items and set the cart state
      if (cartItems) {
        const formattedCartItems = cartItems.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
        }))
        setCart(formattedCartItems)
      } else {
        setCart([])
      }
    } else if (guestId) {
      // Fetch cart items by guestId
      const response = await getCartByGuestId(guestId)
      if (response.error) {
        return { error: response.error }
      }
      const cartItems = response.success
      // Extract necessary data from cart items and set the cart state
      if (cartItems) {
        const formattedCartItems = cartItems.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
        }))
        setCart(formattedCartItems)
      } else {
        setCart([])
      }
    } else {
      // cart should be empty if there's no guestID or userID
      setCart([])
    }
  }

  const addToCart = async (item: CartItem) => {
    // Verify that the product exists
    const response = await getProductById(item.productId)
    if (!response.success) {
      return { error: 'Product does not exist' }
    }
    const product = response.success
    // Verify that the quantity is a positive number
    if (item.quantity < 1) {
      return { error: 'Quantity must be a positive number' }
    }

    // Check if user exists
    if (user?.id) {
      // If user exists, add the item to the cart in the database
      // add to database
      const response = await addToUserCart(
        user.id,
        item.productId,
        item.quantity,
      )
      if (response.error) {
        return { error: response.error }
      }
    } else {
      // If no user, check if there's currently a guestId saved in local storage
      let currentGuestId = guestId
      // If there is no guestID, create a new guestID, add the item to the cart in the database and localstorage
      if (!currentGuestId) {
        // Create a new guest if there's no guestId
        currentGuestId = generateGuestId()
        Cookies.set('guestId', currentGuestId, { expires: 365 })
        setGuestId(currentGuestId)
      }

      // Then add to the database
      const response = await addToGuestCart(
        currentGuestId,
        item.productId,
        item.quantity,
      )
      if (response.error) {
        return { error: response.error }
      }
    }

    // Finally, update the local storage cart state
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.productId === item.productId,
      )
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.productId === item.productId
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem,
        )
      }
      return [...prevCart, item]
    })
    setIsCartOpen(true) // open the cart in the menu
    return { success: `Successfully added ${product.name} to cart!` }
  }

  const removeItemFromCart = async (productId: number) => {
    const id = user?.id || guestId

    if (id) {
      // remove item from database
      const response = await removeProductFromCartByIdAndProductId(
        id,
        productId,
      )
      if (response.error) {
        return { error: response.error }
      }
    }
    // remove item from local storage
    setCart((prevCart) =>
      prevCart.filter((item) => item.productId !== productId),
    )

    return { success: 'Successfully removed item from cart' }
  }

  const decrementItemFromCart = async (productId: number) => {
    const id = user?.id || guestId

    if (id) {
      // decrement item from user's cart
      const response = await decrementProductFromCartByIdAndProductId(
        id,
        productId,
      )

      if (response.error) {
        return { error: response.error }
      }
    }

    // update local storage cart
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )

    return { success: 'Successfully removed from cart' }
  }

  const handleLogin = async () => {
    if (cart.length > 0 && user?.id && guestId) {
      const updatedCart = await cartLoginHandler(cart, guestId, user.id)
      clearGuestId()
      setCart(updatedCart)
    }
  }

  /**
   * Universal logout function that handles clearing the cart and creating a new guestID
   */
  const handleLogout = async () => {
    clearLocalCart()
    const newGuestId = generateGuestId()
    Cookies.set('guestId', newGuestId, { expires: 365 })
    setGuestId(newGuestId)
    console.log('signing out')
    await logout()
  }

  const clearGuestId = () => {
    Cookies.remove('guestId')
    setGuestId(null)
  }

  const clearLocalCart = () => {
    setCart([])
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeItemFromCart,
        decrementItemFromCart,
        clearCart: clearLocalCart,
        handleLogout,
        handleLogin,
        guestId,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext)
  if (context === undefined) {
    throw new Error(
      'useShoppingCart must be used within a ShoppingCartProvider',
    )
  }
  return context
}
