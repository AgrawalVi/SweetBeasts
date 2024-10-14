'use client'

import React from 'react'
import Image from 'next/image'
import { BackgroundGradient } from '@/components/aceternity/background-gradient'

interface ProductCardProps {
  product: {
    id: number
    name: string
    description: string
    primaryImagePath?: string | null
  }
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
      <BackgroundGradient className="h-[500px] w-[500px] rounded-md p-6">
        <div className="relative mx-auto flex h-full w-full cursor-pointer flex-col justify-between overflow-hidden rounded-md bg-black shadow-xl">
          <Image
            src={product.primaryImagePath ?? 'https://via.placeholder.com/600'}
            alt={product.name}
            layout="fill"
            objectFit="contain"
            className="absolute left-0 top-0 z-0 transition duration-300 group-hover/card:opacity-60"
          />
          <div className="relative z-10 flex items-center justify-between p-6">
            <h1 className="header-gradient relative z-10 flex-grow text-2xl font-bold md:text-3xl">
              {product.name}
            </h1>
            <div className="ml-auto flex-shrink-0 pl-16">
              <h1 className="h2-gradient relative z-10 my-4 text-xl font-bold">
                {product.description}
              </h1>
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  )
}

export default ProductCard
