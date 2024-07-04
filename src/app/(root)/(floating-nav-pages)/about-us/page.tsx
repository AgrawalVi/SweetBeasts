'use client'

import SweetCards from '@/components/general/pages/about-us/sweet-cards'
import { TextGenerateEffect } from '@/components/aceternity/text-generate-effect'
import TextSection from '@/components/custom/text-section'

export default function CanvasRevealEffectDemo() {
  return (
    <main className="relative bg-dot-black/[0.2] dark:bg-dot-white/[0.2]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="relative space-y-10 pb-20 pt-10">
        <div className="flex flex-col place-items-center">
          <h1 className="header-gradient bg-opacity-50 from-cyan-500 to-cyan-900 bg-clip-text text-center font-coiny text-5xl text-transparent drop-shadow-md md:text-7xl">
            OUR STORY
          </h1>
          <TextSection
            text="At SweetBeasts, we craft delightful plushies that blend the charm of
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
            caring, connected, and healthier world."
          />
        </div>
        <div className="flex flex-col place-items-center">
          <h1 className="header-gradient bg-opacity-50 from-cyan-500 to-cyan-900 bg-clip-text text-center font-coiny text-5xl text-transparent drop-shadow-md md:text-7xl">
            OUR MISSION
          </h1>
          <TextSection
            text="At SweetBeasts, we craft delightful plushies that blend the charm of
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
            caring, connected, and healthier world."
          />
        </div>
        <div>
          <h1 className="header-gradient bg-opacity-50 from-cyan-500 to-cyan-900 bg-clip-text text-center font-coiny text-5xl text-transparent drop-shadow-md md:text-7xl">
            OUR VALUES
          </h1>
          <TextGenerateEffect
            words="At our core, we are SWEET"
            className="pt-5 text-center"
            wordClassName="text-5xl text-pink-600 dark:text-cyan-600"
          />
          <SweetCards />
        </div>
        <div className="flex flex-col place-items-center">
          <h1 className="header-gradient bg-opacity-50 from-cyan-500 to-cyan-900 bg-clip-text text-center font-coiny text-5xl text-transparent drop-shadow-md md:text-7xl">
            WHO WE ARE
          </h1>
          <TextSection
            text="At SweetBeasts, we craft delightful plushies that blend the charm of
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
            caring, connected, and healthier world."
          />
        </div>
      </div>
    </main>
  )
}
