import Link from 'next/link'

import { WobbleButton } from '@/components/custom/wobble-button'

import IntroducingProduct from './introducting-product'

export default function HomeProductHero() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[url('/home-page.webp')] bg-cover bg-center lg:h-[70vh] z-20">
      <div>
        <IntroducingProduct />
        <WobbleButton className="relative">
          <Link href="/products/pogo">Shop Now</Link>
        </WobbleButton>
      </div>
    </div>
  )
}
