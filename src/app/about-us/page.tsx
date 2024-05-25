"use client"

import SweetCards from "@/components/about-us/sweet-cards"
import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect"
import MissionStatementSection from "@/components/about-us/mission-statement"

export default function CanvasRevealEffectDemo() {
  return (
    <main className="mx-5 my-20">
      <div>
        <h1 className="text-5xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-br from-rose-300 to-rose-700 bg-opacity-50 font-coiny">
          OUR STORY
        </h1>
      </div>
      <MissionStatementSection />
      <div>
        <h1 className="text-5xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-br from-rose-300 to-rose-700 bg-opacity-50 font-coiny">
          OUR VALUES
        </h1>
        <TextGenerateEffect
          words="At our core, we are SWEET"
          className="text-center"
          wordClassName="text-5xl"
        />
        <SweetCards />
      </div>
      <div>
        <h1 className="text-5xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-br from-rose-300 to-rose-700 bg-opacity-50 font-coiny">
          WHO WE ARE
        </h1>
      </div>
    </main>
  )
}
