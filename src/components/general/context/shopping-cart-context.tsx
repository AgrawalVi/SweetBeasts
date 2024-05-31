'use client';
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface ShoppingCartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('shopping_cart');
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  // Save cart to local storage whenever it changes
  useEffect(() => {
    console.log('Saving cart to local storage:', cart);
    localStorage.setItem('shopping_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      let updatedCart;
      if (existingItem) {
        updatedCart = prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        updatedCart = [...prevCart, item];
      }
      console.log('Updated cart:', updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <ShoppingCartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (context === undefined) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }
  return context;
};
