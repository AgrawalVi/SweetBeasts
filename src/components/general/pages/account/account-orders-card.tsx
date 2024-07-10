import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import OrderContent from './my-orders-card-content'
import { Suspense } from 'react'
import OrderContentSkeleton from '@/components/skeletons/account/order-content-skeleton'

export default function MyOrdersCard() {
  return (
    <Card className="w-full sm:w-[30rem]">
      <CardHeader>
        <CardTitle>Your Orders</CardTitle>
        <CardDescription>View your latest orders here</CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<OrderContentSkeleton />}>
          <OrderContent />
        </Suspense>
      </CardContent>
    </Card>
  )
}
