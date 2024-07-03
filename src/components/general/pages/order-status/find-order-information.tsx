import { Button } from '@/components/ui/button'
import { getOrderByFindOrderToken } from '@/data/shop/orders'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getLineItemsByOrderId } from '@/data/shop/line-items'
import { lineItem, Product } from '@prisma/client'
import Image from 'next/image'
import OrderSummary from './order-summary'
import OrderStatusBar from './order-status-bar'

export default async function FindOrderInformation({
  token,
}: {
  token: string
}) {
  console.log('token', token)

  const order = await getOrderByFindOrderToken(token)
  if (!order) {
    redirect('/order-status?error=your%20session%20has%20expired')
  }
  const lineItems: (lineItem & { product: Product })[] | null =
    await getLineItemsByOrderId(order.id)

  return (
    <main className="flex w-full flex-col items-center justify-center">
      <div className="mx-5 flex w-full max-w-6xl flex-col items-center justify-between sm:flex-row">
        <div className="header-gradient text-5xl">Your Order</div>
        <div className="flex flex-col text-center text-sm text-neutral-600 dark:text-neutral-400 sm:text-end sm:text-base">
          <div>Order {order.orderNumber}</div>
          <div>Placed {order.createdAt.toDateString()}</div>
        </div>
      </div>
      <div className="my-5 flex w-screen justify-center bg-card p-10">
        <div className="flex w-full max-w-6xl flex-col justify-between sm:flex-row">
          <p className="pb-3 text-xl sm:text-2xl">
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
      <OrderStatusBar order={order} />
      <div>
        {lineItems && lineItems.length > 0 ? (
          <OrderSummary orderItems={lineItems} />
        ) : (
          <div>No items found in your order</div>
        )}
      </div>
    </main>
  )
}
