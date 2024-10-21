import Image from 'next/image'
import Link from 'next/link'
import { CircleArrowDown } from 'lucide-react'

import { WobbleButton } from '@/components/custom/wobble-button'

import IntroducingProduct from './introducting-product'

export default function HomeProductHero() {
  return (
    <div className="flex h-dvh w-full relative items-center justify-center z-20 transition-all">
      <Image
        src="/home-page/pogo/home-page-desktop.png"
        alt="Background"
        fill
        className="absolute top-0 left-0 w-full h-full object-cover object-bottom z-10 hidden lg:block"
      />
      <Image
        src="/home-page/pogo/home-page-mobile.png"
        alt="Background"
        fill
        className="absolute top-0 left-0 w-full h-full object-cover object-bottom z-10 block lg:hidden"
      />
      <div className="z-20 lg:grid-cols-2 lg:grid w-full">
        <div></div>
        <div className="transform -translate-y-20 transition-transform md:translate-y-0 lg:justify-center lg:flex lg:flex-col lg:items-center">
          <IntroducingProduct />
          <WobbleButton>
            <Link href="/products/pogo">Shop Now</Link>
          </WobbleButton>
        </div>
      </div>
      <CircleArrowDown className="animate-bounce z-[30] absolute bottom-10 big-phone:bottom-12 text-primary-foreground h-7 w-7 big-phone:h-10 big-phone:w-10" />
    </div>
  )
}
