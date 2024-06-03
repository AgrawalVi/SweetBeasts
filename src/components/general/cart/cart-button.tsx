'use client'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetHeader,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useShoppingCart } from '@/hooks/use-shopping-cart'
import CartContents from './cart-contents'

export default function Cart() {
  const { isCartOpen, setIsCartOpen } = useShoppingCart()

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetTrigger asChild>
        <Button onClick={() => setIsCartOpen(true)}>
          <ShoppingCart size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetClose />
        </SheetHeader>
        <div className="flex flex-col items-center justify-center">
          <CartContents />
          <Button onClick={() => setIsCartOpen(false)}>
            Continue Shopping
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
