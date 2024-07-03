import { formatPrice } from '@/lib/utils'
import { Product, lineItem } from '@prisma/client'
import Image from 'next/image'
import OrderProductCard from './order-product-card'

export default function OrderItems({
  orderItems,
}: {
  orderItems: (lineItem & { product: Product })[]
}) {
  return (
    <div className="flex flex-col space-y-4">
      {orderItems.map((item) => (
        <OrderProductCard key={item.id} product={item} />
      ))}
    </div>
  )
}
