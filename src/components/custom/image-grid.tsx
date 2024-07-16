// components/ImageGrid.tsx
'use client'
import ImageDialog from '@/components/custom/image-dialog'
import { cn } from '@/lib/utils'

interface ImageGridProps {
  images: { src: string; alt: string; width: number; height: number }[]
  className?: string
  containerClassName?: string
}

export default function ImageGrid({
  images,
  className,
  containerClassName,
}: ImageGridProps) {
  return (
    <div className="relative h-fit w-fit rounded-lg">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
          <ImageDialog
            key={index}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={className}
            containerClassName={containerClassName}
          />
        ))}
      </div>
    </div>
  )
}
