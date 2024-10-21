import { Metadata } from 'next'

import SVGDecoration from '@/components/custom/svg-component'
import TextSection from '@/components/custom/text-section'

// SVG paths for left and right sides
const leftSvgs = ['/plushie artwork R-04.svg', '/plushie artwork R-06.svg']
const rightSvgs = ['/plushie artwork R-06.svg', '/plushie artwork R-07.svg']

export const metadata: Metadata = {
  title: "Pogo's Story",
  description: "Discover Pogo's story and journey",
}

export default function PogoLorePage() {
  return (
    <main className="relative pt-10">
      {/* <SVGDecoration leftSvgs={leftSvgs} rightSvgs={rightSvgs} /> */}
      <div className="flex flex-col items-center gap-4">
        <div className="header-gradient text-center text-5xl sm:text-6xl md:text-7xl">
          Pogo's Story
        </div>
        <div className="p-gradient text-center text-xl sm:text-3xl">
          Meet Pogo, the Peach Penguin!
        </div>
        <div>
          <TextSection text="Living a life in Africa, where everything's just a waddle away, Pogo has never had to work hard for anything. Spoiled with riches, but poor in understanding, Pogo struggles to see beyond her luxurious hot tub. Her world is simple: if you want it, you buy it." />
          <TextSection text="One seemingly ordinary day, her butler presented her with her daily bowl of fruit. Among the fruit, a peculiar peach caught Pogo’s eye—it smelled funny and looked odd, but curiosity got the better of her. Swallowing it whole, she was sent into a deep slumber, tumbling down into the colorful, vibrant world of Sweet Haven." />
          <TextSection text="Upon awakening in Sweet Haven, Pogo discovered she had transformed into a Peach Penguin on Pitfall Shores! She comes to realize slowly that no one cares to listen to her commands or tantrums. As her exploration outside her life of privilege continues, she embarks on a journey of becoming more open-minded, making heartfelt connections along the way. What lies in store?" />
        </div>
      </div>
      <div className="header-gradient text-center text-3xl sm:text-4xl md:text-5xl">
        See Pogo in Action:
      </div>
      <div className="header-gradient text-center text-3xl sm:text-4xl md:text-5xl">
        Animations from Sweet Haven
      </div>
      <div className="p-gradient text-center text-xl sm:text-3xl">
        Follow our socials to stay updated!
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-4 pt-12 md:gap-10">
        <video
          controls
          className="h-[600px] bg-cover bg-center w-auto rounded-md bg-[url('/plushie-animations/pogo/pogo-flames-thumbnail.webp')]"
        >
          <source
            src="/plushie-animations/pogo/pogo-flames.mp4"
            type="video/mp4"
          />
        </video>
        <video
          controls
          className="h-[600px] bg-center bg-cover w-auto rounded-md bg-[url('/plushie-animations/pogo/friendship-thumbnail.webp')]"
        >
          <source
            src="/plushie-animations/pogo/friendship-video.mp4"
            type="video/mp4"
          />
        </video>
        <video
          controls
          className="h-[600px] bg-center bg-cover w-auto rounded-md bg-[url('/plushie-animations/pogo/pogo-pool-thumbnail.webp')]"
        >
          <source
            src="/plushie-animations/pogo/pogo-pool.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </main>
  )
}
