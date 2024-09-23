import TextSection from '@/components/custom/text-section'
import { BackgroundGradient } from '@/components/aceternity/background-gradient'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function PogoLorePage() {
  return (
    <main className="pt-10">
      <div className="header-gradient text-center text-5xl sm:text-6xl md:text-7xl">
        Sweet Haven
      </div>
      <TextSection text="Hello" />
      <Link href={'/sweet-haven/pogo'}>
        <BackgroundGradient className="rounded-lg bg-white p-4 dark:bg-zinc-900 sm:p-10">
          <div className="group relative h-[300px] w-[300px]">
            <Image
              src={`/plushie-art/pogo/pogo-animation-static.png`}
              alt="Pogo Animation Static"
              height="300"
              width="300"
              className="absolute left-0 top-0 object-contain transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src={`/plushie-art/pogo/pogo-animation.GIF`}
              alt="Pogo Animation GIF"
              height="300"
              width="300"
              className="absolute left-0 top-0 object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        </BackgroundGradient>
      </Link>
    </main>
  )
}
