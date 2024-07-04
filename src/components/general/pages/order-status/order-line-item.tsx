import { CardDescription } from '@/components/ui/card'
import { formatPrice } from '@/lib/utils'
import { Product, lineItem } from '@prisma/client'
import Image from 'next/image'
import pogo from '/public/product-images/pogo/main.jpg'
import blimpy from '/public/product-images/lemon-lion/main.jpg'

export default function OrderLineItem({
  product,
}: {
  product: lineItem & { product: Product }
}) {
  return (
    <div className="flex w-full space-x-6 align-middle">
      <div className="relative">
        <Image
          src={product.product.name.includes('pogo') ? pogo : blimpy}
          alt={`${product.product.name} image`}
          width={100}
          height={100}
          className="h-14 w-14 rounded-md md:h-full md:w-full"
        />
        <div className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-neutral-300/95 text-center dark:text-black">
          {product.quantity}
        </div>
      </div>
      <div className="flex grow flex-col items-start justify-center text-sm md:text-base">
        <div className="md:text-lg">{product.product.name}</div>

        <CardDescription>{product.product.description}</CardDescription>
      </div>
      <div className="inline-flex flex-col items-end justify-center text-sm">
        {formatPrice(product.pricePerUnitInCents * product.quantity)}
        {product.quantity > 1 && (
          <CardDescription className="text-xs">
            {`${formatPrice(product.pricePerUnitInCents)} ea`}
          </CardDescription>
        )}
      </div>
    </div>
  )
}
