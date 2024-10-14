import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import OrderSummary from './order-summary'
import OrderStatusBar from './censored-order-status-bar'
import CensoredOrderDetails from './censored-order-details'
import { formatDate } from '@/lib/date-functions'
import { ChevronLeft } from 'lucide-react'
import { getOrderWithDataByViewOrderToken } from '@/data/shop/orders'

export default async function FindOrderInformation({
  token,
}: {
  token: string
}) {
  const order = await getOrderWithDataByViewOrderToken(token)
  if (!order) {
    redirect('/order-status?error=your%20session%20has%20expired')
  }

  return (
    <main className="relative flex w-full flex-col items-center justify-center">
      <Link
        href="/account/orders"
        className="absolute -left-5 -top-10 md:-left-10"
      >
        <Button variant="link" className="group text-muted-foreground">
          <ChevronLeft className="h-5 w-5 transition-all group-hover:-translate-x-0.5 group-hover:scale-110" />{' '}
          Go Back
        </Button>
      </Link>
      <div className="mx-5 flex w-full max-w-5xl flex-col items-center justify-between xl:flex-row">
        <div className="header-gradient text-5xl">Your Order</div>
        <div className="flex flex-col text-center text-sm text-muted-foreground sm:text-end sm:text-base">
          <div>Order {order.orderNumber}</div>
          <div>Placed {formatDate(order.createdAt)}</div>
        </div>
      </div>
      <div className="my-5 flex w-screen justify-center border-b border-t border-border bg-card p-10 dark:border-neutral-800">
        <div className="flex w-full max-w-6xl flex-col justify-between sm:flex-row">
          <p className="pb-3 text-xl sm:pb-0 sm:text-2xl">
            View more details about your order
          </p>
          <Link
            href={`/auth/login?redirectTo=/account/orders/${order.orderNumber}`}
            className="flex justify-center"
          >
            <Button>Login or Register</Button>
          </Link>
        </div>
      </div>
      <div className="h-full max-w-5xl flex-col items-start justify-start space-y-4 xl:grid xl:grid-cols-2 xl:gap-4 xl:space-y-0">
        <div className="flex w-full">
          {order.lineItems && order.lineItems.length > 0 ? (
            <OrderSummary orderItems={order.lineItems} totalPaidInCents={order.totalPaidInCents} shippingPaidInCents={order.shippingPaidInCents} taxesPaidInCents={order.taxesPaidInCents} />
          ) : (
            <div>No items found in your order</div>
          )}
        </div>
        <div className="flex w-full flex-col space-y-4 xl:items-start xl:justify-center">
          <OrderStatusBar orderStatus={order.orderStatus} />
          <CensoredOrderDetails orderNumber={order.orderNumber} />
        </div>
      </div>
      <div className="pt-5">
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
