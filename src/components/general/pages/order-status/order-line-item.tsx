import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { formatPrice } from '@/lib/utils'
import { Product, lineItem } from '@prisma/client'
import Image from 'next/image'

export default function OrderLineItem({
  product,
}: {
  product: lineItem & { product: Product }
}) {
  return (
    <div className="flex w-full space-x-8 align-middle">
      <div className="relative">
        <Image
          src={product.product.primaryImagePath!}
          alt={`${product.product.name} image`}
          width={150}
          height={150}
          className="rounded-md"
        />
        <div className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-neutral-300/95 text-center dark:text-black">
          {product.quantity}
        </div>
      </div>
      <div className="flex w-full flex-col items-start justify-center">
        <div>{product.product.name}</div>
        <div>{product.product.description}</div>
      </div>
      <div className="inline-flex flex-col justify-center">
        {formatPrice(product.pricePerUnitInCents * product.quantity)}
      </div>
    </div>
  )
}
