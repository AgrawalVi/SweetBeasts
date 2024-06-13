'use client'
import React, { useEffect, useState } from 'react'
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from '@/components/aceternity/navbar-menu'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

import { MenuIcon } from 'lucide-react'

import { useCurrentUser } from '@/hooks/use-current-user'

import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useShoppingCart } from '@/hooks/use-shopping-cart'

const productItems = [
  { name: 'Pogo' },
  { image: '/' },
  { href: '' },
  { name: '' },
  { image: '' },
  { href: '' },
  { name: '' },
  { image: '' },
  { href: '' },
  { name: '' },
  { image: '' },
  { href: '' },
]

export function Navbar({ className }: { className?: string }) {
  const user = useCurrentUser()

  const [active, setActive] = useState<string | null>(null)
  const [lastActive, setLastActive] = useState<string | null>(null)
  const { handleLogout } = useShoppingCart()

  return (
    <main className="sticky top-0 z-50">
      <div className="relative hidden w-screen items-center justify-between border-b bg-background p-4 md:flex">
        <div className="flex items-center">
          <Image
            src="/logos/square-dark.svg"
            width={100}
            height={100}
            alt="Logo"
          />
        </div>
        <div className="flex flex-1 justify-center">
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
              item="Services"
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">
                  Interface Design
                </HoveredLink>
                <HoveredLink href="/seo">
                  Search Engine Optimization
                </HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem
              setActive={setActive}
              active={active}
              lastActive={lastActive}
              setLastActive={setLastActive}
              item="Products"
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
              item="Pricing"
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
          {user ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <a href="/auth/login">
              <Button>login</Button>
            </a>
          )}
        </div>

        {/* Mode Toggle Section */}
        <div className="flex items-center">
          <ModeToggle className="" />
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
