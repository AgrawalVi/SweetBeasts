import OrderDetails from '@/components/general/pages/checkout-success/order-details'
import OrderStatusBar from '@/components/general/pages/view-order/order-status-bar'
import OrderSummary from '@/components/general/pages/view-order/order-summary'
import { getOrderWithDataByStripeSessionId } from '@/data/shop/orders'
import { OrderWithData } from '@/types'
import { formatDate } from '@/lib/date-functions'
import Link from 'next/link'
import { CheckoutSuccessLoader } from '@/components/general/pages/checkout-success/multi-step-loader'

export default async function CheckoutSuccess({
  searchParams,
}: {
  searchParams: { session_id?: string }
}) {
  let order: OrderWithData | null = null
  let orderNotFound = false

  if (searchParams.session_id) {
    // Wait for 2 seconds before fetching the order
    await new Promise((resolve) => setTimeout(resolve, 2000))
    order = await getOrderWithDataByStripeSessionId(searchParams.session_id)

    if (!order) {
      orderNotFound = true
    }
  }

  return (
    <>
      <CheckoutSuccessLoader />
      <main className="flex w-full flex-col items-center justify-center space-y-8">
        {!searchParams.session_id ? (
          <div className="text-center">Session ID not found.</div>
        ) : orderNotFound ? (
          <div className="text-center">Order not found</div>
        ) : order ? (
          // Check if order is older than 30 minutes
          new Date() >
          new Date(new Date(order.createdAt).getTime() + 1000 * 60 * 30) ? (
            <div className="text-center">
              This link has expired. Navigate to{' '}
              <Link
                href="/order-status"
                className="font-semibold text-primary-foreground hover:underline hover:underline-offset-2 dark:text-primary"
              >
                order status
              </Link>{' '}
              to view your order
            </div>
          ) : (
            <>
              <div className="mx-5 flex w-full max-w-6xl flex-col items-center justify-between lg:flex-row">
                <div className="header-gradient text-center text-5xl lg:text-left">
                  Thank You For Your Order!
                </div>
                <div className="flex flex-col text-center text-sm text-muted-foreground sm:text-base lg:text-end">
                  <div>Order {order.orderNumber}</div>
                  <div>Placed {formatDate(order.createdAt)}</div>
                </div>
              </div>
              <div className="h-full max-w-6xl flex-col items-start justify-start space-y-4 xl:grid xl:grid-cols-2 xl:gap-4 xl:space-y-0">
                <div className="flex w-full">
                  {order.lineItems && order.lineItems.length > 0 ? (
                    <OrderSummary
                      orderItems={order.lineItems}
                      totalPaidInCents={order.totalPaidInCents}
                      shippingPaidInCents={order.shippingPaidInCents}
                      taxesPaidInCents={order.taxesPaidInCents}
                    />
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
                <Link
                  href="/support/contact-us"
                  className="underline underline-offset-2"
                >
                  Contact us
                </Link>
              </div>
            </>
          )
        ) : null}
      </main>
    </>
  )
}
