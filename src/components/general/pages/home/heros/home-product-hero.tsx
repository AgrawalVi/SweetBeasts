import { Button } from '@/components/ui/button'
import ExploreSection from './introducting-product'
import Link from 'next/link'
import { WobbleButton } from '@/components/custom/wobble-button'
import Image from 'next/image'

import image from '@/assets/sample-image.png'

export default function HomeProductHero() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[url('/sample-image.png')] bg-cover bg-center lg:h-[70vh]">
      <div>
        <ExploreSection className="relative z-20" />
        <WobbleButton className="relative z-20">
          <Link href="/products/pogo">Shop Now</Link>
        </WobbleButton>
      </div>
    </div>
  )
}
