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
  images: { src: string, alt: string, width: number, height: number }[]
  className?: string
  containerClassName?: string
}

export default function ImageDialog({
  images,
  className,
  containerClassName,
}: ImageDialogProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="relative h-fit w-fit rounded-lg">
      <div className="grid grid-cols-2 grid-rows-2 gap-1"> 
        {images.map((image, index) => (
          <Dialog
            key={index}
            open={selectedImage === image.src}
            onOpenChange={(isOpen) => setSelectedImage(isOpen ? image.src : null)}
          >
            <DialogTrigger className="cursor-zoom-in" onClick={() => setSelectedImage(image.src)}>
              <BackgroundGradient containerClassName={cn('rounded-lg', containerClassName)}>
                <div
                  className={cn('relative', className)}
                  style={{
                    width: `${image.width}px`,
                    height: `${image.height}px`,
                    overflow: 'hidden'
                  }} 
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="responsive"
                    width={image.width}
                    height={image.height}
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              </BackgroundGradient>
            </DialogTrigger>
            <DialogOverlay className="bg-black/60" />
            <DialogContent className="max-w-[70vh] justify-center p-0">
              <Image
                src={image.src}
                alt={image.alt}
                width={1000}
                height={1000}
                className="w-[70vh] rounded-lg"
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}
