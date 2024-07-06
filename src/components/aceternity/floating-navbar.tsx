'use client'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { UserIcon } from 'lucide-react'
import Image from 'next/image'
import emblem from '@/assets/logos/icon.svg'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { FullNavLinks } from '../general/navbars/full-nav-links'

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
  }[]
  className?: string
}) => {
  return (
    <div
      className={cn(
        'big-phone:w-[20rem] big-phone:gap-2 fixed inset-x-0 top-5 z-[1000] mx-auto grid h-16 w-[17rem] grid-cols-5 items-center justify-center rounded-xl border-border bg-muted/70 align-middle shadow-[0_1px_10px_rgb(0,0,0,0.2)] backdrop-blur-lg backdrop-saturate-200',
        className,
      )}
      style={{}}
    >
      <Link href="/" className="inline-flex justify-start p-3">
        <Image src={emblem} alt="logo" className="relative h-8 w-8" />
      </Link>
      <FullNavLinks
        className="relative col-span-3 w-full justify-center align-middle"
        innerClassName="bg-transparent absolute -top-3 md:static md:py-5 sm:px-0"
      />
      <Link href="/my-account" className="flex w-full justify-end p-3">
        <UserIcon className="big-phone:h-6 big-phone:w-6 h-5 w-5" />
      </Link>
    </div>
  )
}
