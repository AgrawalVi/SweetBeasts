import { OrderStatusForm } from '@/components/general/pages/order-status/order-status-form'
import { useSearchParams } from 'next/navigation'

export default function TrackOrder({
  searchParams,
}: {
  searchParams: { orderToken?: string }
}) {
  console.log(searchParams)

  const orderToken = searchParams.orderToken

  if (!orderToken) {
    return (
      <main className="flex w-full flex-col items-center justify-center">
        <div className="font-nunito text-3xl font-semibold sm:text-5xl">
          <h1>Track Your Order</h1>
        </div>
        <OrderStatusForm />
      </main>
    )
  } else {
    return <div>Order {orderToken}</div>
  }
}
