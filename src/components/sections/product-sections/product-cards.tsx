'use client'

import React from 'react'
import { InfiniteMovingCards } from '@/components/aceternity/infinite-cards'

const testimonials = [
  {
    img: '/test-product.jpg',
    name: 'Pogo',
  },
  {
    img: '/product-images/pavia/main.jpg',
    name: 'Pavia',
  },
  {
    img: '/product-images/turpy/main.jpg',
    name: 'Turpy',
  },
  {
    img: '/product-images/lemon-lion/main.jpg',
    name: 'Lemon Lion',
  },
  {
    img: '/path-to-image5.jpg',
    name: 'Plushy 5',
  },
]

export default function ProductCards() {
  return (
    <div className="relative flex h-[40rem] w-[100rem] items-center justify-center overflow-hidden rounded-md bg-background antialiased dark:bg-black dark:bg-grid-white/[0.05]">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  )
}
