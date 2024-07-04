'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useShoppingCart } from '@/hooks/use-shopping-cart'
import CartContents from './cart-contents'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog'

export default function CartButton() {
  const { Cart, isCartOpen, setIsCartOpen } = useShoppingCart()

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
