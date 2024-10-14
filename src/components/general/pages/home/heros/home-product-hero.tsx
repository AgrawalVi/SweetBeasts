import IntroducingProduct from './introducting-product'
import Link from 'next/link'
import { WobbleButton } from '@/components/custom/wobble-button'

export default function HomeProductHero() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[url('/home-page.webp')] bg-cover bg-center lg:h-[70vh]">
      <div>
        <IntroducingProduct />
        <WobbleButton className="relative z-20">
          <Link href="/products/pogo">Shop Now</Link>
        </WobbleButton>
      </div>
    </div>
  )
}
