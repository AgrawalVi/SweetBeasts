import OrderDetails from '@/components/general/pages/checkout-success/order-details'
import OrderStatusBar from '@/components/general/pages/view-order/order-status-bar'
import OrderSummary from '@/components/general/pages/view-order/order-summary'
import { getOrderWithDataByStripeSessionid } from '@/data/shop/orders'
import { OrderWithData } from '@/types'
import Link from 'next/link'

export default async function CheckoutSuccess({
  searchParams,
}: {
  searchParams: { session_id?: string }
}) {
  console.log(searchParams)

  if (!searchParams.session_id) {
    return <div>Session ID not found</div>
  }

  const order: OrderWithData | null = await getOrderWithDataByStripeSessionid(
    searchParams.session_id,
  )

  if (!order) {
    return <div>Order not found</div>
  }

  // check if order is older than 30 minutes
  if (
    new Date() > new Date(new Date(order.createdAt).getTime() + 1000 * 60 * 30)
  ) {
    return (
      <div className="text-center">
        This link has expired. Navigate to{' '}
        <Link
          href="/order-status"
          className="font-semibold text-primary-foreground hover:underline dark:text-primary"
        >
          order status
        </Link>{' '}
        to view your order
      </div>
    )
  }

  const lineItems = order.lineItems

  return (
    <main className="flex w-full flex-col items-center justify-center space-y-8">
      <div className="mx-5 flex w-full max-w-6xl flex-col items-center justify-between sm:flex-row">
        <div className="header-gradient text-center text-5xl sm:text-left">
          Thank You For Your Order!
        </div>
        <div className="flex flex-col text-center text-sm text-muted-foreground sm:text-end sm:text-base">
          <div>Order {order.orderNumber}</div>
          <div>Placed {order.createdAt.toDateString()}</div>
        </div>
      </div>
      <div className="h-full max-w-6xl flex-col items-start justify-start space-y-4 xl:grid xl:grid-cols-2 xl:gap-4 xl:space-y-0">
        <div className="flex w-full">
          {lineItems && lineItems.length > 0 ? (
            <OrderSummary orderItems={lineItems} order={order} />
          ) : (
            <div>No items found in your order</div>
          )}
        </div>
        <div className="flex w-full flex-col space-y-4 xl:items-start xl:justify-center">
          <OrderStatusBar order={order} />
          <OrderDetails order={order} />
        </div>
      </div>
      <div>
        Have an issue?{' '}
        <Link href="/support/contact-us" className="underline">
          Contact us
        </Link>
      </div>
    </main>
  )
}