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
              className="max-w-[90vw] rounded-md"
            />
          </div>
        </BackgroundGradient>
      </DialogTrigger>
      <DialogOverlay className="bg-black/60" />
      <DialogContent className="max-w-[70vh] justify-center p-0">
        <Image
          src={src}
          alt={alt}
          width={1000}
          height={1000}
          className="w-[70vh] rounded-lg"
        />
      </DialogContent>
    </Dialog>
  )
}
