'use client'

import { useState } from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

interface ZoomableImageProps {
  src: string
  alt: string
  className?: string
}

export default function ZoomableImage({
  src,
  alt,
  className,
}: ZoomableImageProps) {
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({
    transform: 'scale(1)',
    transformOrigin: 'center center',
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()

    const x = Math.min(Math.max((e.clientX - left) / width, 0), 1) * 100
    const y = Math.min(Math.max((e.clientY - top) / height, 0), 1) * 100

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(2)', // Zoom level
    })
  }

  const handleMouseLeave = () => {
    setZoomStyle({
      transform: 'scale(1)', // Reset zoom
      transformOrigin: 'center center',
    })
  }

  return (
    <div
      className="relative h-auto w-full max-w-[85vw] sm:max-w-[70vw] rounded-lg md:max-w-[60vw] lg:max-w-[50vw] xl:max-w-[40vw] overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        overflow: 'hidden', // Ensure no overflow from zoom
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={800}
        height={800}
        className={cn(
          'mx-auto h-auto max-h-[80vh] w-full rounded-lg object-cover transition-transform duration-300 ease-in-out',
          className,
        )}
        style={zoomStyle} // Apply zoom effect dynamically
      />
    </div>
  )
}
