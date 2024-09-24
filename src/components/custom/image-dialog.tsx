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
              className="w-full max-w-[85vw] sm:max-w-[70vw] md:max-w-[50vw] lg:max-w-[40vw] xl:max-w-[30vw] h-auto rounded-md mx-auto"
            />
          </div>
        </BackgroundGradient>
      </DialogTrigger>
      <DialogOverlay className="bg-black/60" />
      <DialogContent className="flex items-center justify-center p-0">
        <div className="relative w-full h-auto max-w-[85vw] sm:max-w-[70vw] md:max-w-[60vw] lg:max-w-[50vw] xl:max-w-[40vw]">
          <Image
            src={src}
            alt={alt}
            width={800}
            height={800}
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg mx-auto"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
