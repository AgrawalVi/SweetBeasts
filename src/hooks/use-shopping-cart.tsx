"use client"

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react"
import { useCurrentUser } from "@/hooks/use-current-user"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface ShoppingCartContextType {
  cart: CartItem[]
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
  addToCart: (item: CartItem) => void
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
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem("shopping_cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      }
      return [...prevCart, item]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
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
