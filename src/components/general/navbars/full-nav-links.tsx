'use client'

import { useState } from 'react'
import {
  Menu,
  MenuItem,
  HoveredLink,
  ProductItem,
} from '@/components/aceternity/navbar-menu'

export const FullNavLinks = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null)
  const [lastActive, setLastActive] = useState<string | null>(null)

  return (
    <div className={className || ''}>
      <Menu setActive={setActive} active={active} setLastActive={setLastActive}>
        <MenuItem
          setActive={setActive}
          active={active}
          lastActive={lastActive}
          setLastActive={setLastActive}
          item="Home"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about-us">About Us</HoveredLink>
            <HoveredLink href="/about-us/team">Our Team</HoveredLink>
            <HoveredLink href="/product-updates">Product Updates</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          lastActive={lastActive}
          setLastActive={setLastActive}
          item="Products"
        >
          <div className="grid gap-10 p-4 text-sm sm:grid-cols-2">
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
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/order-status">Order Status</HoveredLink>
            <HoveredLink href="/support/contact-us">Contact Us</HoveredLink>
            <HoveredLink href="/support/faq">FAQ</HoveredLink>
            <HoveredLink href="/feedback-form">Give Feedback</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}