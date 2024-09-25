import TextSection from '@/components/custom/text-section'
import JoinEmailListForm from '@/components/sections/footer/email-list-form'
import Image from 'next/image'

export default function HomeSweetbeastsMission() {
  const svgs = [
    '/plushie artwork R-04.svg',
    '/plushie artwork R-05.svg',
    '/plushie artwork R-06.svg',
    '/plushie artwork R-07.svg',
    '/plushie artwork R-08.svg',
    '/plushie artwork R-09.svg',
    '/plushie artwork R-10.svg',
  ]

  return (
    <div className="relative flex w-full flex-col items-center justify-center py-20">
      {/* SVGs placed throughout the page */}
      <div className="absolute inset-0 pointer-events-none">
        {/* SVG 1 (Top left) */}
        <Image
          src={svgs[0]}
          alt="SVG 1"
          width={150}
          height={150}
          className="absolute top-10 left-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
        />
        {/* SVG 2 (Top right) */}
        <Image
          src={svgs[1]}
          alt="SVG 2"
          width={150}
          height={150}
          className="absolute top-20 right-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
        />
        {/* SVG 3 (Center left) */}
        <Image
          src={svgs[2]}
          alt="SVG 3"
          width={150}
          height={150}
          className="absolute top-1/3 left-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
        />
        {/* SVG 4 (Bottom left) */}
        <Image
          src={svgs[3]}
          alt="SVG 4"
          width={150}
          height={150}
          className="absolute bottom-10 left-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
        />
        {/* SVG 5 (Center right) */}
        <Image
          src={svgs[4]}
          alt="SVG 5"
          width={150}
          height={150}
          className="absolute top-1/3 right-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
        />
        {/* SVG 6 (Bottom right) */}
        <Image
          src={svgs[5]}
          alt="SVG 6"
          width={150}
          height={150}
          className="absolute bottom-10 right-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
        />
        {/* SVG 7 (Middle top) */}
        <Image
          src={svgs[6]}
          alt="SVG 7"
          width={150}
          height={150}
          className="absolute top-1/4 left-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 transform -translate-x-1/2"
        />
      </div>

      <div className="max-w-6xl xl:grid xl:grid-cols-3">
        <div className="col-span-3">
          <div className="header-gradient md:text-upright flex w-full flex-col justify-center text-center text-4xl sm:text-5xl md:text-7xl">
            Pogo's Story
          </div>
        </div>
        <div className="col-span-3">
          <TextSection text="Living a life in Africa, where everything's just a waddle away, Pogo has never had to work hard for anything. Spoiled with riches, but poor in understanding, Pogo struggles to see beyond her luxurious hot tub. Her world is simple: if you want it, you buy it.

One seemingly ordinary day, her butler presented her with her daily bowl of fruit. Among the fruit, a peculiar peach caught Pogo’s eye—it smelled funny and looked odd, but curiosity got the better of her. Swallowing it whole, she was sent into a deep slumber, tumbling down into the colorful, vibrant world of Sweet Haven.

Upon awakening in Sweet Haven, Pogo discovered she had transformed into a Peach Penguin on Pitfall Shores! She comes to realize slowly that no one cares to listen to her commands or tantrums. As her exploration outside her life of privilege continues, she embarks on a journey of becoming more open-minded, making heartfelt connections along the way. What lies in store?

As she explores this new world, she comes to realize that  she was just like everyone else–no special treatment, no high status. For the first time in her life, Pogo was living a life not lined with privilege, setting the stage for a journey of real understanding and heartfelt connections. 

Her exploration through this new world continues, outside her life of privilege, sets the stage for a journey of learning compassion and making heartfelt connections. What lies in store?
" />
        </div>
      </div>
    </div>
  )
}
