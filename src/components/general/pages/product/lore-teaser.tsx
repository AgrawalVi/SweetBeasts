import TextSection from '@/components/custom/text-section'

export default function LoreTeaser() {
  return (
    <div className="flex flex-col">
      <div className="header-gradient text-center text-4xl sm:text-5xl md:text-6xl">
        Pogo's Story
      </div>
      <div>
        <TextSection
          text="Pogo, once spoiled and carefree, is thrust into the vibrant world of Sweet Haven after eating a mysterious peach. Now transformed into a Peach Penguin, she embarks on a journey of self-discovery and growth, learning that true richness may instead lie in heartfelt connections."
          linkInfo={{
            linkText: 'Learn about Pogo',
            linkHref: '/sweet-haven/pogo',
          }}
          textClassName="text-xl"
        />
      </div>
    </div>
  )
}
