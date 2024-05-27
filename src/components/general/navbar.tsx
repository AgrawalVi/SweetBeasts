"use client"
import React, { useState } from "react"
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/aceternity/navbar-menu"
import { cn } from "@/utils/cn"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"
import Image from "next/image"

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  const [lastActive, setLastActive] = useState<string | null>(null)
  return (
    <>
      <div className="relative w-screen z-50 hidden md:flex items-center justify-between bg-white dark:bg-black p-4">
        <div className="flex items-center">
          <Image src="/logo.jpg" width={100} height={100} alt="Logo" />
        </div>
        <div className="flex-1 flex justify-center">
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
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Pogo"
                  href="/products/pogo"
                  src="/pogo.jpg"
                  description="The Peachy Penguin."
                />
                <ProductItem
                  title="Pineapple Parrot"
                  href="/products/pineapple-parrot"
                  src="/pineapple-parrot.jpg"
                  description="The Pineapple Parrot"
                />
                <ProductItem
                  title="Tangerine Turtle"
                  href="/products/tangerine-turtle"
                  src="/tangerine-turtle.jpg"
                  description="The Tangerine Turtle."
                />
                <ProductItem
                  title="Lemon Lion"
                  href="/products/lemon-lion"
                  src="/lemon-lion.jpg"
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
        </div>

        {/* Mode Toggle Section */}
        <div className="flex items-center">
          <ModeToggle className="" />
        </div>
      </div>

      <div className="block md:hidden h-20 bg-white dark:bg-black w-screen border">
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
    </>
  )
}
