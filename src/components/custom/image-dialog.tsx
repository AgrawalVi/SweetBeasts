'use client'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'
import { BorderBeam } from '../magicui/border-beam'
import { BackgroundGradient } from '../aceternity/background-gradient'

interface ImageDialogProps {
  src: string
  alt: string
  className?: string
}

export default function ImageDialog({ src, alt, className }: ImageDialogProps) {
  return (
    <Dialog>
      <DialogTrigger className="my-10 cursor-zoom-in">
        <div className="relative h-fit w-fit rounded-lg">
          <BackgroundGradient containerClassName="rounded-lg">
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
