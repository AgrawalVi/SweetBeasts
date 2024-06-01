"use client"

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react"
import { useCurrentUser } from "@/hooks/use-current-user"
import useGuestId from "@/hooks/use-guest-id"
import { addToUserCart, addToGuestCart } from "@/actions/customer/cart"
import { getProductById } from "@/actions/products/products"
import { getCartByGuestId, getCartByUserEmail } from "@/actions/customer/cart"
import { ProductItem } from "@/components/aceternity/navbar-menu"
interface CartItem {
  productId: number
  quantity: number
}

interface ShoppingCartContextType {
  cart: CartItem[]
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
  addToCart: (item: CartItem) => Promise<{ error: string } | { success: string }>
  removeFromCart: (id: number) => void
  clearCart: () => void
}

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(
  undefined
)

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("shopping_cart")
      return storedCart ? JSON.parse(storedCart) : []
    }
    return []
  })
  const user = useCurrentUser()
  const { guestId, createNewGuestId, clearGuestId } = useGuestId()
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    if (user || guestId) {
      fetchCartItems()
    }
  }, [user, guestId])

  useEffect(() => {
    localStorage.setItem("shopping_cart", JSON.stringify(cart))
  }, [cart])

  const fetchCartItems = async () => {
    // If user exists, fetch cart items by user's email
    if (user?.email) {
      // Fetch cart items by user's email
      const response = await getCartByUserEmail(user.email)
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
      return { error: "Product does not exist" }
    }
    const product = response.success
    // Verify that the quantity is a positive number
    if (item.quantity < 1) {
      return { error: "Quantity must be a positive number" }
    }

    // Check if user exists
    if (user?.email) {
      // If user exists, add the item to the cart in the database
      // add to database
      const response = await addToUserCart(
        user.email,
        item.productId,
        item.quantity
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
        currentGuestId = createNewGuestId()
      }

      // Then add to the database
      const response = await addToGuestCart(
        currentGuestId,
        item.productId,
        item.quantity
      )
      if (response.error) {
        return { error: response.error }
      }
    }

    // Finally, update the local storage cart state
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.productId === item.productId
      )
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.productId === item.productId
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      }
      return [...prevCart, item]
    })
    setIsCartOpen(true) // open the cart in the menu
    return { success: `Successfully added ${product.name} to cart!` }
  }

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.productId !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        clearCart,
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
      "useShoppingCart must be used within a ShoppingCartProvider"
    )
  }
  return context
}
