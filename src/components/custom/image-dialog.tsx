'use client'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
} from '@/components/ui/dialog'
import Image from 'next/image'
import { BorderBeam } from '../magicui/border-beam'
import { BackgroundGradient } from '../aceternity/background-gradient'
import { cn } from '@/lib/utils'

interface ImageDialogProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
}

export default function ImageDialog({
  src,
  alt,
  className,
  containerClassName,
}: ImageDialogProps) {
  return (
    <Dialog>
      <DialogTrigger className="cursor-zoom-in">
        <div className="relative h-fit w-fit rounded-lg">
          <BackgroundGradient
            containerClassName={cn('rounded-lg', containerClassName)}
          >
            <Image
              src={src}
              alt={alt}
              width={500}
              height={500}
              className={className}
            />
          </BackgroundGradient>
        </div>
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
