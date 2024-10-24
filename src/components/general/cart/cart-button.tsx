'use client'

import React from 'react'
import { ShoppingCart } from 'lucide-react'

import { useShoppingCart } from '@/hooks/use-shopping-cart'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import CartContents from './cart-contents'

export default function CartButton() {
  const { cart, isCartOpen, setIsCartOpen } = useShoppingCart()
  // TODO: Add indicator to cart when there are items in the cart
  return (
    <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setIsCartOpen(true)}
          size="icon"
          variant="outline"
        >
          <ShoppingCart className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Your Shopping Cart</DialogTitle>
        </DialogHeader>
        <CartContents />
      </DialogContent>
    </Dialog>
  )
}
