import { formatPrice } from '@/lib/utils'
import { Product, lineItem } from '@prisma/client'
import Image from 'next/image'
import OrderProductCard from './order-line-item'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function OrderSummary({
  orderItems,
}: {
  orderItems: (lineItem & { product: Product })[]
}) {
  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-3">
          {orderItems.map((item) => (
            <OrderProductCard key={item.id} product={item} />
          ))}
        </div>
        <div className="flex w-full flex-col pt-5">
          <div className="flex w-full justify-between">
            <div>Subtotal</div>
            <div>$12.00</div>
          </div>
          <div className="flex w-full justify-between">
            <div>Shipping</div>
            <div>$12.00</div>
          </div>
          <div className="flex w-full justify-between">
            <div>Taxes</div>
            <div>$12.00</div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <CardTitle>Total</CardTitle>
      </CardFooter>
    </Card>
  )
}
