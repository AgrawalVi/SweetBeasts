import { formatPrice } from '@/lib/utils'
import { Order } from '@prisma/client'
import OrderLineItem from './order-line-item'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { LineItemWithProduct } from '@/types'

export default function OrderSummary({
  orderItems,
  shippingPaidInCents,
  taxesPaidInCents,
  totalPaidInCents,
}: {
  orderItems: LineItemWithProduct[]
  shippingPaidInCents: number | null
  taxesPaidInCents: number | null
  totalPaidInCents: number
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
            <OrderLineItem key={item.id} lineItem={item} />
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
              {shippingPaidInCents
                ? formatPrice(shippingPaidInCents)
                : 'Free :)'}
            </div>
          </div>
          {taxesPaidInCents && (
            <div className="flex w-full justify-between">
              <div>Taxes</div>
              <div>{formatPrice(taxesPaidInCents)}</div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <CardTitle>Total</CardTitle>
        <CardTitle>{formatPrice(totalPaidInCents)}</CardTitle>
      </CardFooter>
    </Card>
  )
}
