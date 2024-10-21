import { Suspense } from 'react'

import FindOrderInformation from '@/components/general/pages/view-order/find-order-information'
import { OrderStatusForm } from '@/components/general/pages/view-order/order-status-form'
import OrderStatusSkeleton from '@/components/skeletons/orders/order-status-skeleton'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Order Status',
  description: "Track your order's status"
}

export default function TrackOrder({
  searchParams,
}: {
  searchParams: { orderToken?: string; error?: string }
}) {
  const orderToken = searchParams.orderToken
  const error = searchParams.error

  if (!orderToken || error) {
    return (
      <main className="flex w-full flex-col items-center justify-center">
        <div className="header-gradient text-4xl font-semibold sm:text-6xl">
          <h1>Track Your Order</h1>
        </div>
        <OrderStatusForm errorText={error} />
      </main>
    )
  } else {
    return (
      <Suspense fallback={<OrderStatusSkeleton />}>
        <FindOrderInformation token={orderToken} />
      </Suspense>
    )
  }
}
