import TextSection from '@/components/custom/text-section'

export default function LoreTeaser() {
  return (
    <div className="flex flex-col">
      <div className="header-gradient text-center text-5xl sm:text-6xl md:text-7xl">
        Pogo's Story
      </div>
      <div>
        <TextSection
          text="Living a life in Africa, where everything's just a waddle away, Pogo has never had to work hard for anything. Spoiled with riches, but poor in understanding, Pogo struggles to see beyond her luxurious hot tub. Her world is simple: if you want it, you buy it.

One seemingly ordinary day, her butler presented her with her daily bowl of fruit. Among the fruit, a peculiar peach caught Pogo’s eye—it smelled funny and looked odd, but curiosity got the better of her. Swallowing it whole, she was sent into a deep slumber, tumbling down into the colorful, vibrant world of Sweet Haven.

Upon awakening in Sweet Haven, Pogo discovered she had transformed into a Peach Penguin on Pitfall Shores! She comes to realize slowly that no one cares to listen to her commands or tantrums. As her exploration outside her life of privilege continues, she embarks on a journey of becoming more open-minded, making heartfelt connections along the way. What lies in store?
"
          linkInfo={{
            linkText: 'Learn about Pogo',
            linkHref: '/lore/pogo',
          }}
        />
      </div>
    </div>
  )
}
