import { BackgroundGradient } from "../aceternity/background-gradient"

export default function MissionStatementSection() {
  return (
    <div className="h-[35rem] w-full flex flex-col md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <h1 className="text-5xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-br dark:from-rose-300 dark:to-rose-700 from-cyan-500 to-cyan-900 drop-shadow-md bg-opacity-50 font-coiny mb-8">
          OUR MISSION
        </h1>
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-background max-w-[60rem]" containerClassName="max-w-[60rem]">
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-800 dark:text-neutral-300 max-w-[60rem] text-center mx-auto">
            At SweetBeasts, we craft delightful plushies that blend the charm of
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
            caring, connected, and healthier world.
          </p>
        </BackgroundGradient>
    </div>
  )
}
