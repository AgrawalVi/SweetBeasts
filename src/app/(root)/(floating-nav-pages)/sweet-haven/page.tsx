import React from 'react'

import TextSection from '@/components/custom/text-section'
import LoreCard from '@/components/general/sweet-haven/lore-card'

export default function PogoLorePage() {
  return (
    <main className="flex flex-col items-center pt-10">
      <div className="header-gradient text-center text-5xl sm:text-6xl md:text-7xl">
        Sweet Haven
      </div>
      <div className="flex flex-col items-center gap-5">
        <TextSection
          textClassName="text-xl"
          text="Sweet Haven is a vibrant world made up of fruit-themed islands, each representing different personal challenges. Beneath its lively surface lies a darker truth, as Pogo and her newfound friends uncover the sinister experiments that brought them there."
        />
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <LoreCard
            staticImageHref="/plushie-art/pogo/pogo-animation-static.png"
            animatedImageHref="/plushie-art/pogo/pogo-animation.GIF"
            productName="Pogo"
            productDescription="The Peachy Penguin"
          />
        </div>
      </div>
    </main>
  )
}
