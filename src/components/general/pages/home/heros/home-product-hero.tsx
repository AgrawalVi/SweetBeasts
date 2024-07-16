import { Button } from '@/components/ui/button'
import ExploreSection from './introducting-product'
import Link from 'next/link'
import { WobbleButton } from '@/components/custom/wobble-button'
import Image from 'next/image'

export default function HomeProductHero() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[url('/home-page.jpg')] bg-cover bg-center lg:h-[70vh]">
      <div>
        <ExploreSection />
        <WobbleButton className="relative z-20">
          <Link href="/products/pogo">Shop Now</Link>
        </WobbleButton>
      </div>
    </div>
  )
}
