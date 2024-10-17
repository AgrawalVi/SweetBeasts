import Link from 'next/link'
import { redirect } from 'next/navigation'
import { OrderWithData } from '@/types'
import { ChevronLeft } from 'lucide-react'

import { currentUser } from '@/lib/auth'
import { formatDate } from '@/lib/date-functions'
import { Button } from '@/components/ui/button'
import OrderDetails from '@/components/general/pages/checkout-success/order-details'
import OrderStatusBar from '@/components/general/pages/view-order/order-status-bar'
import OrderSummary from '@/components/general/pages/view-order/order-summary'
import { getOrderWithDataByEmailAndOrderNumber } from '@/data/shop/orders'

export default async function OrderPage({
  params,
}: {
  params: { orderNumber: string }
}) {
  const user = await currentUser()
  if (!user) {
    redirect('/auth/login')
  }
  const { orderNumber } = params

  // verify order
  const order: OrderWithData | null =
    await getOrderWithDataByEmailAndOrderNumber(
      user.email as string,
      orderNumber,
    )
  if (!order) {
    redirect('/account/orders')
  }

  const lineItems = order.lineItems

  return (
    <main className="relative flex w-full flex-col items-center justify-center space-y-8">
      <div className="mx-5 flex w-full max-w-5xl flex-col items-center justify-between xl:flex-row">
        <div className="header-gradient text-center text-5xl sm:text-left">
          Your Order
        </div>
        <Link
          href="/account/orders"
          className="absolute -left-5 -top-10 md:-left-10"
        >
          <Button variant="link" className="group text-muted-foreground">
            <ChevronLeft className="h-5 w-5 transition-all group-hover:-translate-x-0.5 group-hover:scale-110" />{' '}
            View All Orders
          </Button>
        </Link>
        <div className="flex flex-col text-center text-sm text-muted-foreground sm:text-end sm:text-base">
          <div>Order {order.orderNumber}</div>
          <div>Placed {formatDate(order.createdAt)}</div>
        </div>
      </div>
      <div className="h-full max-w-5xl flex-col items-start justify-start space-y-4 xl:grid xl:grid-cols-2 xl:gap-4 xl:space-y-0">
        <div className="flex w-full">
          {lineItems && lineItems.length > 0 ? (
            <OrderSummary
              orderItems={lineItems}
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
    </main>
  )
}
