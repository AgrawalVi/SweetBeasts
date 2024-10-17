'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '../ui/button'

interface AnimatedSubscribeButtonProps {
  isSubscribed: boolean
  setIsSubscribed: (isSubscribed: boolean) => void
  initialText: React.ReactElement | string
  changeText: React.ReactElement | string
  isPending: boolean
}

export const AnimatedSubscribeButton: React.FC<
  AnimatedSubscribeButtonProps
> = ({ isSubscribed, setIsSubscribed, changeText, initialText, isPending }) => {
  return (
    <AnimatePresence mode="wait">
      {isSubscribed ? (
        <motion.button
          className="relative flex h-[44px] w-[200px] items-center justify-center overflow-hidden rounded-md bg-accent p-[10px] transition-all"
          onClick={(e) => {
            // avoid the default behavior of the button
            e.preventDefault()
            setIsSubscribed(false)
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="action"
            className="relative block h-full w-full font-semibold"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
          >
            {changeText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className="relative flex w-[200px] items-center justify-center rounded-md bg-primary p-[10px] text-primary-foreground disabled:pointer-events-none disabled:opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: isPending ? 0.5 : 1 }}
          exit={{ opacity: 0 }}
          disabled={isPending}
          whileHover={{ opacity: 0.8 }}
        >
          <motion.span
            key="reaction"
            className="relative block font-semibold"
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}
          >
            {initialText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
