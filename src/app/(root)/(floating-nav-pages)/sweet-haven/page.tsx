import TextSection from '@/components/custom/text-section'
import React from 'react'
import LoreCard from '@/components/general/sweet-haven/lore-card'

export default function PogoLorePage() {
  return (
    <main className="flex flex-col items-center pt-10">
      <div className="header-gradient text-center text-5xl sm:text-6xl md:text-7xl">
        Sweet Haven
      </div>
      <TextSection className="" text="Hello" />
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
        <LoreCard
          staticImageHref="/plushie-art/pogo/pogo-animation-static.png"
          animatedImageHref="/plushie-art/pogo/pogo-animation.GIF"
          productName="Pogo"
          productDescription="The Peachy Penguin"
        />
      </div>
    </main>
  )
}
