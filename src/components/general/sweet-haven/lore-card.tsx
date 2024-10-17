import Image from 'next/image'
import Link from 'next/link'

import { BackgroundGradient } from '@/components/aceternity/background-gradient'

interface LoreCardProps {
  staticImageHref: string
  animatedImageHref: string
  productName: string
  productDescription: string
}

export default function LoreCard({
  staticImageHref,
  animatedImageHref,
  productName,
  productDescription,
}: LoreCardProps) {
  return (
    <Link href={`/sweet-haven/${productName.toLowerCase()}`}>
      <BackgroundGradient className="rounded-lg bg-white p-4 dark:bg-zinc-900 sm:p-10">
        <h1 className="header-gradient text-center font-coiny text-4xl">
          {productName}
        </h1>
        <p className="p-gradient text-center text-xl">
          Read about {productDescription}
        </p>
        <div className="group relative h-[300px] w-[300px]">
          <Image
            src={staticImageHref}
            alt={`${productName} Animation Static`}
            height="300"
            width="300"
            className="absolute left-0 top-0 object-contain transition-opacity duration-200 group-hover:opacity-0"
          />
          <Image
            src={animatedImageHref}
            alt={`${productName} Animation`}
            height="300"
            width="300"
            className="absolute left-0 top-0 object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
        </div>
      </BackgroundGradient>
    </Link>
  )
}
