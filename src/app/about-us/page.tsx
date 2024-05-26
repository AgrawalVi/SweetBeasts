"use client"

import SweetCards from "@/components/about-us/sweet-cards"
import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect"
import MissionStatementSection from "@/components/about-us/mission-statement"
import { ModeToggle } from "@/components/ui/mode-toggle"

export default function CanvasRevealEffectDemo() {
  return (
    <main className="relative dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="px-5 pb-20 pt-10 relative space-y-10">
        <div>
          <h1 className="text-5xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-br dark:from-rose-300 dark:to-rose-700 from-cyan-500 to-cyan-900 drop-shadow-md bg-opacity-50 font-coiny">
            OUR STORY
          </h1>
        </div>
        <MissionStatementSection />
        <div>
          <h1 className="text-5xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-br dark:from-rose-300 dark:to-rose-700 from-cyan-500 to-cyan-900 drop-shadow-md bg-opacity-50 font-coiny">
            OUR VALUES
          </h1>
          <TextGenerateEffect
            words="At our core, we are SWEET"
            className="text-center pt-5"
            wordClassName="text-5xl text-pink-600 dark:text-cyan-600"
          />
          <SweetCards />
        </div>
        <div>
          <h1 className="text-5xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-br dark:from-rose-300 dark:to-rose-700 from-cyan-500 to-cyan-900 drop-shadow-md bg-opacity-50 font-coiny">
            WHO WE ARE
          </h1>
        </div>
      </div>
    </main>
  )
}
