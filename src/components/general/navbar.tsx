'use client'

import React, { useState } from 'react'
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from '@/components/aceternity/navbar-menu'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { MenuIcon, UserIcon } from 'lucide-react'
import { useCurrentUser } from '@/hooks/use-current-user'
import { useShoppingCart } from '@/hooks/use-shopping-cart'
import Link from 'next/link'
import CartButton from './cart/cart-button'

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  const [lastActive, setLastActive] = useState<string | null>(null);

  return (
    <main className="sticky top-0 z-50">
      <div className="relative hidden w-screen items-center justify-center border-b border-muted bg-background py-4 md:flex">
        <div className="grid w-full max-w-5xl grid-cols-5 items-center justify-between">
          <div className="inline-flex justify-start">logo</div>
          <div></div>
          <div className="relative flex items-center justify-center">
            <Menu
              setActive={setActive}
              active={active}
              setLastActive={setLastActive}
            >
              <MenuItem
                setActive={setActive}
                active={active}
                lastActive={lastActive}
                setLastActive={setLastActive}
                item="Home"
                href="/"
              >
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/about-us">About Us</HoveredLink>
                  <HoveredLink href="/about-us/team">Our Team</HoveredLink>
                  <HoveredLink href="/product-updates">
                    Product Updates
                  </HoveredLink>
                </div>
              </MenuItem>
              <MenuItem
                setActive={setActive}
                active={active}
                lastActive={lastActive}
                setLastActive={setLastActive}
                item="Products"
                href="/products"
              >
                <div className="grid grid-cols-2 gap-10 p-4 text-sm">
                  <ProductItem
                    title="Pogo"
                    href="/products/pogo"
                    src="/product-images/pogo/main.jpg"
                    description="The Peachy Penguin."
                  />
                  <ProductItem
                    title="Pineapple Parrot"
                    href="/products/pineapple-parrot"
                    src="/product-images/pavia/main.jpg"
                    description="The Pineapple Parrot"
                  />
                  <ProductItem
                    title="Tangerine Turtle"
                    href="/products/tangerine-turtle"
                    src="/product-images/turpy/main.jpg"
                    description="The Tangerine Turtle."
                  />
                  <ProductItem
                    title="Lemon Lion"
                    href="/products/lemon-lion"
                    src="/product-images/lemon-lion/main.jpg"
                    description="The Lemon Lion."
                  />
                </div>
              </MenuItem>
              <MenuItem
                setActive={setActive}
                active={active}
                setLastActive={setLastActive}
                lastActive={lastActive}
                item="Support"
                href="/support/contact-us"
              >
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/order-status">Order Status</HoveredLink>
                  <HoveredLink href="/support/contact-us">
                    Contact Us
                  </HoveredLink>
                  <HoveredLink href="/support/faq">FAQ</HoveredLink>
                  <HoveredLink href="/feedback-form">Give Feedback</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </div>
          <div></div>
          <div className="inline-flex justify-end space-x-3">
            <Link href="/my-account">
              <Button size="icon" variant="outline">
                <UserIcon className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </Link>
            <CartButton />
            <ModeToggle className="" />
          </div>
        </div>
      </div>
      <div className="block h-20 w-screen border bg-white dark:bg-black md:hidden">
        <div className="flex justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="m-5 ml-5">
                <MenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>Hello</SheetContent>
          </Sheet>
        </div>
      </div>
    </main>
  )
}
