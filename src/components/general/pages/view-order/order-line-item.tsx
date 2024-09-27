import { CardDescription } from '@/components/ui/card'
import { formatPrice } from '@/lib/utils'
import Image from 'next/image'
import pogo from '/public/product-images/pogo/main.jpg'
import blimpy from '/public/product-images/lemon-lion/main.jpg'
import { LineItemWithProduct } from '@/types'
import Link from 'next/link'

export default function OrderLineItem({
  lineItem,
}: {
  lineItem: LineItemWithProduct
}) {
  return (
    <div className="flex w-full space-x-6 align-middle">
      <div className="relative">
        <Image
          src={pogo}
          alt={`Pogo image`}
          width={100}
          height={100}
          className="h-14 w-14 rounded-md md:h-full md:w-full"
        />
        <div className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-neutral-300/95 text-center dark:text-black">
          {lineItem.quantity}
        </div>
      </div>
      <div className="flex grow flex-col items-start justify-center text-sm md:text-base">
        <Link href={`${lineItem.productVariant.parentProduct.productHref}`}>
          <div className="md:text-lg">{lineItem.productVariant.parentProduct.name}</div>
        </Link>
        <CardDescription>{lineItem.productVariant.parentProduct.description}</CardDescription>
      </div>
      <div className="inline-flex flex-col items-end justify-center text-sm">
        {formatPrice(lineItem.pricePerUnitInCents * lineItem.quantity)}
        {lineItem.quantity > 1 && (
          <CardDescription className="text-xs">
            {`${formatPrice(lineItem.pricePerUnitInCents)} ea`}
          </CardDescription>
        )}
      </div>
    </div>
  )
}
