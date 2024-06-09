'use client'

import React from 'react'
import { InfiniteMovingCards } from '@/components/aceternity/infinite-cards'

const testimonials = [
  {
    img: '/product-images/pogo/main.jpg', 
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
    <div className="h-[40rem] w-[100rem] flex items-center justify-center rounded-md antialiased bg-background dark:bg-black dark:bg-grid-white/[0.05] relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  )
}
