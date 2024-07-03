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

export default function OrderProductCard({
  product,
}: {
  product: lineItem & { product: Product }
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.product.name}</CardTitle>
        <CardDescription>{product.product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex space-x-12">
        <Image
          src={product.product.primaryImagePath!}
          alt={`${product.product.name} image`}
          width={150}
          height={150}
          className="rounded-md rounded-b-none"
        />
        <div className="flex flex-col items-end justify-between">
          <div className="flex flex-col items-end">
            <div>Quantity: {product.quantity}</div>
            <div>Product Price: {formatPrice(product.pricePerUnitInCents)}</div>
          </div>
          <div className="flex flex-col items-end">
            <div>
              <strong>Total Price:</strong>{' '}
              {formatPrice(product.pricePerUnitInCents * product.quantity)}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
