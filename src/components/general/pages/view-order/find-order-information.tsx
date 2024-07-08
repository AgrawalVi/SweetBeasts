import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getLineItemsByOrderId } from '@/data/shop/line-items'
import { LineItem, Product } from '@prisma/client'
import OrderSummary from './order-summary'
import OrderStatusBar from './order-status-bar'
import CensoredOrderDetails from './censored-order-details'
import { LineItemWithProduct } from '@/types'
import { verifyViewOrderToken } from '@/actions/shop/order'

export default async function FindOrderInformation({
  token,
}: {
  token: string
}) {
  console.log('token', token)

  const response = await verifyViewOrderToken(token)
  if (response.error) {
    redirect('/order-status?error=your%20session%20has%20expired')
  }
  const order = response.success

  if (!order) {
    redirect('/order-status?error=your%20session%20has%20expired')
  }
  const lineItems: LineItemWithProduct[] | null = await getLineItemsByOrderId(
    order.id,
  )

  return (
    <main className="flex w-full flex-col items-center justify-center">
      <div className="mx-5 flex w-full max-w-6xl flex-col items-center justify-between sm:flex-row">
        <div className="header-gradient text-5xl">Your Order</div>
        <div className="flex flex-col text-center text-sm text-muted-foreground sm:text-end sm:text-base">
          <div>Order {order.orderNumber}</div>
          <div>Placed {order.createdAt.toDateString()}</div>
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
          <CensoredOrderDetails orderNumber={order.orderNumber} />
        </div>
      </div>
    </main>
  )
}
