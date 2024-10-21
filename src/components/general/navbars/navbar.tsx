'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import iconLogo from '@/assets/logos/icon.svg'
import { MenuIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/mode-toggle'

import CartButton from '../cart/cart-button'
import { FullNavLinks } from './full-nav-links'
import UserButton from './user-button'

export function Navbar({ className }: { className?: string }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <main className="sticky top-0 z-50">
      <div className="relative hidden w-full items-center justify-center border-b border-muted bg-background py-4 md:flex">
        <div className="grid w-full max-w-2xl grid-cols-3 items-center justify-between lg:max-w-4xl 2xl:max-w-6xl">
          <div className="inline-flex justify-start">
            <Link
              href="/"
              className="flex h-full items-center space-x-2 transition-all duration-300 ease-in-out hover:scale-110"
            >
              <Image
                src={iconLogo}
                alt="logo"
                className="mb-1 h-8 w-8 transition-all"
              />
              <div className="header-gradient text-2xl transition-all">
                SweetBeasts
              </div>
            </Link>
          </div>
          <FullNavLinks className="relative flex items-center justify-center" />
          <div className="inline-flex justify-end space-x-3">
            <UserButton />
            <CartButton />
            <ModeToggle className="" />
          </div>
        </div>
      </div>
      <div
        className={cn(
          'block w-full space-y-2 border-b bg-background transition-all duration-300 ease-in-out md:hidden',
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
          <div className="inline-flex w-full justify-center">
            <Link
              href="/"
              className="flex h-full items-center justify-center space-x-2 transition-all duration-300 ease-in-out hover:scale-110"
            >
              <Image
                src={iconLogo}
                alt="logo"
                className="mb-1 h-8 w-8 transition-all"
              />
              <div className="header-gradient text-xl transition-all min-[370px]:text-2xl">
                SweetBeasts
              </div>
            </Link>
          </div>
          <div className="flex w-full justify-end space-x-2">
            <CartButton />
          </div>
        </div>
        <div
          className={cn(
            'grid w-full grid-cols-5 transition-all',
            expanded ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
        >
          <div className="flex h-full w-full justify-start px-5 align-middle">
            <ModeToggle />
          </div>
          <div className="col-span-3 flex h-full w-full justify-center align-middle">
            <FullNavLinks className="flex gap-6 align-middle" />
          </div>
          <div className="flex h-full w-full justify-end px-5 align-middle">
            <UserButton />
          </div>
        </div>
      </div>
    </main>
  )
}
