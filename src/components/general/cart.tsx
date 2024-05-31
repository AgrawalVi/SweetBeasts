'use client';
import React from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useShoppingCart } from '@/components/general/context/shopping-cart-context';

export default function Cart() {
  const { isCartOpen, setIsCartOpen, cart } = useShoppingCart();

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
          {cart.length === 0 ? (
            <p className="text-2xl">Your cart is empty</p>
          ) : (
            <ul>
              {cart.map(item => (
                <li key={item.id}>
                  {item.name} - {item.quantity} x ${item.price}
                </li>
              ))}
            </ul>
          )}
          <Button onClick={() => setIsCartOpen(false)}>Continue Shopping</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
