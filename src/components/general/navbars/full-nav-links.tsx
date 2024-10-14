'use client'

import { useState } from 'react'
import {
  Menu,
  MenuItem,
  HoveredLink,
  ProductItem,
} from '@/components/aceternity/navbar-menu'

export const FullNavLinks = ({
  className,
  innerClassName,
}: {
  className?: string
  innerClassName?: string
}) => {
  const [active, setActive] = useState<string | null>(null)
  const [lastActive, setLastActive] = useState<string | null>(null)

  return (
    <div className={className || ''}>
      <Menu
        setActive={setActive}
        active={active}
        setLastActive={setLastActive}
        className={innerClassName}
      >
        <MenuItem
          setActive={setActive}
          active={active}
          lastActive={lastActive}
          setLastActive={setLastActive}
          className="justify-self-end"
          item="About"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about-us">About Us</HoveredLink>
            <HoveredLink href="/sweet-haven">Sweet Haven</HoveredLink>
            {/* <HoveredLink href="/product-updates">Product Updates</HoveredLink> */}
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          lastActive={lastActive}
          setLastActive={setLastActive}
          item="Products"
          className="justify-self-center"
        >
          {/* <div className="grid gap-10 p-4 text-sm sm:grid-cols-2"> FOR MORE THAN 1 PRODUCT */}
          <div className="p-4 text-sm">
            <ProductItem
              title="Pogo"
              href="/products/pogo"
              src="/product-photos/pogo/pogo-front.png"
              description="The Peach Penguin."
            />
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          setLastActive={setLastActive}
          lastActive={lastActive}
          item="Support"
          className="justify-self-start"
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
