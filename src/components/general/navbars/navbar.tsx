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
import Link from 'next/link'
import CartButton from '../cart/cart-button'
import { cn } from '@/lib/utils'
import { FullNavLinks } from './full-nav-links'
import UserButton from './user-button'

export function Navbar({ className }: { className?: string }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <main className="sticky top-0 z-50">
      <div className="relative hidden w-screen items-center justify-center border-b border-muted bg-background py-4 md:flex">
        <div className="grid w-full max-w-2xl grid-cols-4 items-center justify-between lg:max-w-3xl 2xl:max-w-5xl">
          <div className="inline-flex justify-start">logo</div>
          <FullNavLinks className="relative col-span-2 flex items-center justify-center" />
          <div className="inline-flex justify-end space-x-3">
            <UserButton />
            <CartButton />
            <ModeToggle className="" />
          </div>
        </div>
      </div>
      <div
        className={cn(
          'block w-screen space-y-2 border-b bg-background transition-all duration-300 ease-in-out md:hidden',
          expanded
            ? 'grid h-[114px] grid-rows-2' // not sure why this is needed, but it is for some reason
            : 'grid h-16 grid-rows-2',
        )}
      >
        <div
          className={cn(
            'grid h-16 w-full grid-cols-3 items-center px-5',
            expanded ? 'row-span-1' : 'row-span-1', // not sure why this is needed, but it is for some reason
          )}
        >
          <div className="inline-flex w-full justify-start">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setExpanded(!expanded)}
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
          <div className="inline-flex w-full justify-center">logo</div>
          <div className="flex w-full justify-end space-x-2">
            <CartButton />
          </div>
        </div>
        <div
          className={cn(
            'grid w-full grid-cols-3 pb-2 transition-all',
            expanded ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
        >
          <div className="flex h-full w-full justify-start px-5 align-middle">
            <ModeToggle />
          </div>
          <div className="flex h-full w-full justify-center align-middle">
            <FullNavLinks className="flex align-middle" />
          </div>
          <div className="flex h-full w-full justify-end px-5 align-middle">
            <UserButton />
          </div>
        </div>
      </div>
    </main>
  )
}
