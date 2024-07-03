import FindOrderInformation from '@/components/general/pages/order-status/find-order-information'
import { OrderStatusForm } from '@/components/general/pages/order-status/order-status-form'
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
        <div className="font-nunito text-3xl font-semibold sm:text-5xl">
          <h1>Track Your Order</h1>
        </div>
        <OrderStatusForm errorText={error} />
      </main>
    )
  } else {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <FindOrderInformation token={orderToken} />
      </Suspense>
    )
  }
}
