import FindOrderInformation from '@/components/general/pages/order-status/find-order-information'
import { OrderStatusForm } from '@/components/general/pages/order-status/order-status-form'
import OrderStatusSkeleton from '@/components/skeletons/view-order/order-status-skeleton'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

export default function TrackOrder({
  searchParams,
}: {
  searchParams: { orderToken?: string; error?: string }
}) {
  console.log(searchParams)

  const orderToken = searchParams.orderToken
  const error = searchParams.error

  if (!orderToken) {
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