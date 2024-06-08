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
import { createCheckoutSession } from '@/actions/stripe/checkout'
import { useRouter } from 'next/navigation'

export default function Cart() {
  const { cart, isCartOpen, setIsCartOpen } = useShoppingCart()
  const router = useRouter()

  const handleCheckout = async () => {
    setIsCartOpen(false)
    // await
    const response = await createCheckoutSession(cart)
    if (response.error) {
      console.error(response.error)
    } else {
      // we have a client secret
      router.push(`/checkout?client_secret=${response.success}`)
    }
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
          <Button onClick={handleCheckout}>Checkout</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
