'use client'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
} from '@/components/ui/dialog'
import Image from 'next/image'
import { useState } from 'react'
import { BackgroundGradient } from '../aceternity/background-gradient'
import { cn } from '@/lib/utils'

interface ImageDialogProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  containerClassName?: string
}

export default function ImageDialog({
  src,
  alt,
  width,
  height,
  className,
  containerClassName,
}: ImageDialogProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <Dialog
      open={selectedImage === src}
      onOpenChange={(isOpen) => setSelectedImage(isOpen ? src : null)}
    >
      <DialogTrigger
        className="cursor-zoom-in"
        onClick={() => setSelectedImage(src)}
      >
        <BackgroundGradient
          containerClassName={cn('rounded-lg', containerClassName)}
        >
          <div
            className={cn('relative', className)}
            style={{
              overflow: 'hidden',
            }}
          >
            <Image
              src={src}
              alt={alt}
              layout="responsive"
              width={width}
              height={height}
              objectFit="cover"
              className="w-full max-w-[90vw] sm:max-w-[60vw] h-auto rounded-md mx-auto"
            />
          </div>
        </BackgroundGradient>
      </DialogTrigger>
      <DialogOverlay className="bg-black/60" />
      <DialogContent className="flex items-center justify-center p-0">
        <div className="relative w-full max-w-[90vw] sm:max-w-[60vw] h-auto">
          <Image
            src={src}
            alt={alt}
            width={1000}
            height={1000}
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg mx-auto"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
