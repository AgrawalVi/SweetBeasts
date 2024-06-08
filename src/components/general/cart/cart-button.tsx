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
import { createCheckoutSession } from '@/actions/stripe/checkout'
import { useRouter } from 'next/navigation'
import { useCurrentUser } from '@/hooks/use-current-user'
import { useToast } from '@/components/ui/use-toast'

export default function Cart() {
  const { cart, isCartOpen, setIsCartOpen } = useShoppingCart()
  const router = useRouter()
  const user = useCurrentUser()
  const { toast } = useToast()

  const handleCheckout = async () => {
    // await
    const response = await createCheckoutSession(cart, user?.id)
    if (response?.error) {
      toast({
        title: 'An error has occurred',
        description: response.error,
        variant: 'destructive',
      })
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
