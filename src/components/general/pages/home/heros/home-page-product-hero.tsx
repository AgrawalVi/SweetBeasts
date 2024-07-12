import { Button } from '@/components/ui/button'
import ExploreSection from './introducting-product'
import Link from 'next/link'
import { WobbleButton } from '@/components/custom/wobble-button'
import Image from 'next/image'

import image from '@/assets/sample-image.png'

export default function HomePageProductHero() {
  // return (
  //   <div className="flex w-full flex-col justify-center pt-16 lg:grid lg:grid-cols-7">
  //     <div></div>
  //     <div></div>

  //     <Image
  //       src={image}
  //       alt="image placeholder"
  //       priority={true}
  //       className="absolute top-0 z-10 max-h-screen w-screen object-cover lg:max-h-[70vh]"
  //     />
  //   </div>
  // )
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
