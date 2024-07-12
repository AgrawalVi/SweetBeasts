'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const transitionIn = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}

const transitionOut = {
  type: 'spring',
  mass: 0.7,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}

export const MenuItem = ({
  setActive,
  active,
  lastActive,
  setLastActive,
  item,
  children,
  className,
}: {
  setActive: (item: string) => void
  active: string | null
  lastActive: string | null
  setLastActive: (item: string) => void
  item: string
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      className={cn('relative', className)}
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-foreground hover:text-foreground/60"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transitionIn}
        >
          {active === item && (
            <div className="absolute left-1/2 top-[calc(100%_+_0.8rem)] -translate-x-1/2 transform md:top-[calc(100%_+_1.2rem)] md:pt-4">
              <motion.div
                transition={transitionIn}
                layoutId="active" // layoutId ensures smooth animation
                className="overflow-hidden rounded-2xl border border-border bg-muted/70 shadow-[0_1px_10px_rgb(0,0,0,0.2)] backdrop-blur-lg backdrop-saturate-200"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="h-full w-max p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
      {active === null && lastActive === item ? (
        <motion.div
          initial={{ opacity: 1, scale: 1, y: 0 }}
          animate={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={transitionOut}
          className="pointer-events-none"
        >
          <div className="absolute left-1/2 top-[calc(100%_+_0.8rem)] -translate-x-1/2 transform md:top-[calc(100%_+_1.2rem)] md:pt-4">
            <motion.div
              transition={transitionOut}
              layoutId="active" // layoutId ensures smooth animation
              className="overflow-hidden rounded-2xl border border-border bg-muted/70 shadow-[0_1px_10px_rgb(0,0,0,0.2)] backdrop-blur-lg backdrop-saturate-200"
            >
              <motion.div
                layout // layout ensures smooth animation
                className="h-full w-max p-4"
              >
                {children}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </div>
  )
}

export const Menu = ({
  active,
  setActive,
  setLastActive,
  children,
  className,
}: {
  active: string | null
  setActive: (item: string | null) => void
  setLastActive: (item: string | null) => void
  children: React.ReactNode
  className?: string
}) => {
  return (
    <nav
      onMouseLeave={() => {
        setLastActive(active)
        setActive(null)
      }}
      className={cn(
        'relative grid w-full grid-cols-3 items-center gap-2 bg-background pb-3 text-sm big-phone:gap-4 big-phone:text-base sm:px-8 md:py-6',
        className,
      )}
    >
      {children}
    </nav>
  )
}

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string
  description: string
  href: string
  src: string
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="h-16 w-16 flex-shrink-0 rounded-md shadow-2xl big-phone:h-20 big-phone:w-20 md:h-32 md:w-32"
      />
      <div>
        <h4 className="mb-1 text-xl font-bold text-black dark:text-white">
          {title}
        </h4>
        <p className="max-w-[10rem] text-sm text-neutral-700 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  )
}

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 transition-all hover:text-black dark:text-neutral-200 dark:hover:text-neutral-500"
    >
      {children}
    </Link>
  )
}
