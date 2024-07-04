import { formatPrice } from '@/lib/utils'
import { Order, Product, lineItem } from '@prisma/client'
import OrderLineItem from './order-line-item'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function OrderSummary({
  orderItems,
  order,
}: {
  orderItems: (lineItem & { product: Product })[]
  order: Order
}) {
  const subtotal = orderItems.reduce(
    (prev, item) => item.pricePerUnitInCents * item.quantity + prev,
    0,
  )
  const formattedSubtotal = formatPrice(subtotal)

  return (
    <Card className="w-full sm:w-[30rem]">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-3">
          {orderItems.map((item) => (
            <OrderLineItem key={item.id} product={item} />
          ))}
        </div>
        <div className="flex w-full flex-col space-y-2 pt-5">
          <div className="flex w-full justify-between">
            <div>Subtotal</div>
            <div>{formattedSubtotal}</div>
          </div>
          <div className="flex w-full justify-between">
            <div>Shipping</div>
            <div>
              {order.shippingPaidInCents
                ? formatPrice(order.shippingPaidInCents)
                : 'Free :)'}
            </div>
          </div>
          {order.taxesPaidInCents && (
            <div className="flex w-full justify-between">
              <div>Taxes</div>
              <div>{formatPrice(order.taxesPaidInCents)}</div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <CardTitle>Total</CardTitle>
        <CardTitle>{formatPrice(order.totalPaidInCents)}</CardTitle>
      </CardFooter>
    </Card>
  )
}
