import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

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
        'fixed inset-x-0 top-10 z-[1000] mx-auto flex max-w-fit items-center justify-center space-x-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-lg backdrop-saturate-150 md:min-w-[70vw] lg:min-w-fit',
        className,
      )}
      style={{
        backgroundColor: 'rgba(17, 25, 40, 0.75)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.125)',
      }}
    >
      {navItems.map((navItem: any, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            'relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300',
          )}
        >
          <div>{navItem.name}</div>
        </Link>
      ))}
      <Link href="/my-account"></Link>
    </div>
  )
}
