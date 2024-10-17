'use client'

import React, { useEffect, useState } from 'react'

import { InfiniteMovingCards } from '@/components/aceternity/infinite-cards'

export function InfiniteCards() {
  return (
    <div className="relative flex h-[40rem] flex-col items-center justify-center overflow-hidden rounded-md bg-background antialiased dark:bg-red-400">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  )
}

const testimonials = [
  {
    img: 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
    name: 'Charles Dickens',
  },
  {
    img: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'William Shakespeare',
  },
  {
    img: 'All that we see or seem is but a dream within a dream.',
    name: 'Edgar Allan Poe',
  },
  {
    img: 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
    name: 'Jane Austen',
  },
  {
    img: 'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
    name: 'Herman Melville',
  },
]
