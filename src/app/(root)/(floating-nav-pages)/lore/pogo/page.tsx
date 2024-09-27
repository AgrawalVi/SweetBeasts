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
          width={300}
          height={300}
          className="absolute top-0 left-0 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
          style={{ top: '5%', left: '-3%' }} // Moved slightly farther left
        />
        {/* SVG 3 (Center left) */}
        <Image
          src={svgs[2]}
          alt="SVG 3"
          width={300}
          height={300}
          className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
          style={{ top: '35%', left: '-3%' }} // Moved slightly farther left
        />
        {/* SVG 4 (Bottom left) */}
        <Image
          src={svgs[3]}
          alt="SVG 4"
          width={300}
          height={300}
          className="absolute bottom-0 left-0 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
          style={{ bottom: '5%', left: '-3%' }} // Moved slightly farther left
        />
        {/* SVG 5 (Center right) */}
        <Image
          src={svgs[4]}
          alt="SVG 5"
          width={300}
          height={300}
          className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
          style={{ top: '35%', right: '-3%' }} // Moved slightly farther right
        />
        {/* SVG 6 (Bottom right) */}
        <Image
          src={svgs[5]}
          alt="SVG 6"
          width={600}
          height={600}
          className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
          style={{ bottom: '5%', right: '-3%' }} // Moved slightly farther right
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
