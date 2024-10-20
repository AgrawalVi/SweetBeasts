import Image from 'next/image'
import Link from 'next/link'

import { WobbleButton } from '@/components/custom/wobble-button'

import IntroducingProduct from './introducting-product'

export default function HomeProductHero() {
  return (
    <div className="flex h-dvh w-full relative items-center justify-center lg:h-[95vh] z-20 transition-all">
      <Image
        src="/home-page/pogo/pogo-home.png"
        alt="Background"
        fill
        className="absolute top-0 left-0 w-full h-full object-cover object-bottom z-10"
      />
      <div className="z-20">
        <div className="lg:left-1/2 lg:top-32 transform lg:-translate-x-1/2 lg:absolute -translate-y-12 lg:translate-y-0 transition-transform">
          <IntroducingProduct />
          <WobbleButton className="relative">
            <Link href="/products/pogo">Shop Now</Link>
          </WobbleButton>
        </div>
      </div>
    </div>
  )
}
