import SweetCards from '@/components/general/pages/about-us/sweet-cards'
import { TextGenerateEffect } from '@/components/aceternity/text-generate-effect'
import TextSection from '@/components/custom/text-section'

export default function AboutUsPage() {
  return (
    <main className="relative pt-20 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="relative space-y-10 pb-20 pt-10">
        <div className="flex flex-col place-items-center">
          <h1 className="header-gradient bg-opacity-50 from-cyan-500 to-cyan-900 bg-clip-text text-center font-coiny text-5xl text-transparent drop-shadow-md md:text-7xl">
            OUR STORY
          </h1>
          <TextSection
            text="At the heart of SweetBeasts are passionate college students dedicated to making a positive difference in the world. Our 
          journey began with the simple desire to promote healthier lifestyles. As students ourselves, we understand the importance of maintaining physical and mental 
          wellness while also balancing the challenges of academic life. That's why we've infused our plushies with a touch of magic— creating not just toys, but companions 
          that create moments of comfort and connection. Whether you’ve had a rough day or simply need a hug, our plushies are here to provide that sense of warmth and support. "
          />
        </div>
        <div className="flex flex-col place-items-center">
          <h1 className="header-gradient bg-opacity-50 from-cyan-500 to-cyan-900 bg-clip-text text-center font-coiny text-5xl text-transparent drop-shadow-md md:text-7xl">
            OUR MISSION
          </h1>
          <TextSection
            text="At SweetBeasts, our plushies are created by combining the sweetness of fruits with the playfulness of animals. Each one of our creations encourages a balanced 
            diet and a healthier lifestyle. We foster a community that strives to make the world a better place. A portion of all our sales are donated to a variety of hunger and 
            wild-life charities of your choice. We also team up with local children’s nonprofits to donate our plushies to bring comfort and joy to children who need it most. Each 
            purchase is a step towards building a more caring, connected, and healthier world."
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
      </div>
    </main>
  )
}
