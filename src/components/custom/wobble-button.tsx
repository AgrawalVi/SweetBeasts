'use client'

// This component was abstracted from the wobble-card, by aceternity ui by Vishrut Agrawal
// The source code for that component can be found here: https://ui.aceternity.com/components/wobble-card

import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Noise } from '../aceternity/wobble-card'

interface WobbleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const WobbleButton = ({
  children,
  className,
  ...props
}: WobbleButtonProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (clientX - (rect.left + rect.width / 2)) / 7
    const y = (clientY - (rect.top + rect.height / 2)) / 7
    setMousePosition({ x, y })
  }

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false)
        setMousePosition({ x: 0, y: 0 })
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
          : 'translate3d(0px, 0px, 0) scale3d(1, 1, 1)',
        transition: 'transform 0.1s ease-out',
      }}
      className={cn(
        'reverse-button-gradient relative mx-auto w-fit overflow-hidden rounded-md',
        className,
      )}
    >
      <div
        style={{
          transform: isHovering
            ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.1, 1.1, 1)`
            : 'translate3d(0px, 0px, 0) scale3d(1, 1, 1)',
          transition: 'transform 0.1s ease-out',
        }}
      >
        <Noise />
        <button
          className="flex w-full justify-center px-5 py-3 text-white"
          {...props}
        >
          {children}
        </button>
      </div>
    </motion.section>
  )
}
