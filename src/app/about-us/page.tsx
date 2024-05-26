"use client"

import SweetCards from "@/components/about-us/sweet-cards"
import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect"
import MissionStatementSection from "@/components/about-us/mission-statement"
import TextSection from "@/components/custom/text-section"

export default function CanvasRevealEffectDemo() {
  return (
    <main className="relative dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="pb-20 pt-10 relative space-y-10">
        <div className="flex flex-col place-items-center">
          <h1 className="text-5xl md:text-7xl text-center bg-clip-text text-transparent header-gradient from-cyan-500 to-cyan-900 drop-shadow-md bg-opacity-50 font-coiny">
            OUR STORY
          </h1>
          <TextSection text='At SweetBeasts, we craft delightful plushies that blend the charm of
            fruits with the joy of animals, inspiring healthier lifestyles and a
            spirit of compassion. By merging fun with education, each creation
            serves as a playful advocate for a balanced diet, enhancing both
            physical and emotional well-being. Our plushies are not only
            designed to entertain but also to cultivate empathy, offering
            comfort and companionship to individuals of all ages. Committed to
            meaningful engagement, we foster a dynamic community that shapes our
            initiatives and deepens the impact of our contributions. We are
            dedicated to supporting a variety of hunger and food-related
            charities and providing our plushies as comfort items to children in
            need including those in hospitals, shelters, and other similar
            environments. Each purchase is a step towards building a more
            caring, connected, and healthier world.'/>
        </div>
        <MissionStatementSection />
        <div>
          <h1 className="text-5xl md:text-7xl text-center bg-clip-text text-transparent header-gradient from-cyan-500 to-cyan-900 drop-shadow-md bg-opacity-50 font-coiny">
            OUR VALUES
          </h1>
          <TextGenerateEffect
            words="At our core, we are SWEET"
            className="text-center pt-5"
            wordClassName="text-5xl text-pink-600 dark:text-cyan-600"
          />
          <SweetCards />
        </div>
        <div className="flex flex-col place-items-center">
          <h1 className="text-5xl md:text-7xl text-center bg-clip-text text-transparent header-gradient from-cyan-500 to-cyan-900 drop-shadow-md bg-opacity-50 font-coiny">
            WHO WE ARE
          </h1>
          <TextSection text='At SweetBeasts, we craft delightful plushies that blend the charm of
            fruits with the joy of animals, inspiring healthier lifestyles and a
            spirit of compassion. By merging fun with education, each creation
            serves as a playful advocate for a balanced diet, enhancing both
            physical and emotional well-being. Our plushies are not only
            designed to entertain but also to cultivate empathy, offering
            comfort and companionship to individuals of all ages. Committed to
            meaningful engagement, we foster a dynamic community that shapes our
            initiatives and deepens the impact of our contributions. We are
            dedicated to supporting a variety of hunger and food-related
            charities and providing our plushies as comfort items to children in
            need including those in hospitals, shelters, and other similar
            environments. Each purchase is a step towards building a more
            caring, connected, and healthier world.'/>
        </div>
      </div>
    </main>
  )
}
