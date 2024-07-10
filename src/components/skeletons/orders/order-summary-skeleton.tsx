import OrderLineItemSkeleton from './order-line-item-skeleton'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function OrderSummary() {
  return (
    <Card className="w-full sm:w-[30rem]">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-3">
          <OrderLineItemSkeleton />
          <OrderLineItemSkeleton />
        </div>
        <div className="flex w-full flex-col space-y-2 pt-5">
          <div className="flex w-full justify-between">
            <div>Subtotal</div>
            <Skeleton className="h-6 w-16" />
          </div>
          <div className="flex w-full justify-between">
            <div>Shipping</div>
            <Skeleton className="h-6 w-16" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <CardTitle>Total</CardTitle>
        <Skeleton className="h-6 w-20" />
      </CardFooter>
    </Card>
  )
}
