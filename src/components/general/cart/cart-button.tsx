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
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useShoppingCart } from '@/hooks/use-shopping-cart'
import CartContents from './cart-contents'

export default function Cart() {
  const { cart, isCartOpen, setIsCartOpen } = useShoppingCart()

  const handleCheckout = async () => {
    setIsCartOpen(false)
    // await
  }

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
          <Link href="/checkout">
            <Button onClick={handleCheckout}>Checkout</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
