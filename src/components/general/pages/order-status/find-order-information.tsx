import { Button } from '@/components/ui/button'
import { getOrderByFindOrderToken } from '@/data/shop/orders'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import ResendOrderConfirmationButton from './resend-order-confirmation-button'
import { getLineItemsByOrderId } from '@/data/shop/line-items'
import { lineItem, Product } from '@prisma/client'
import Image from 'next/image'
import OrderItems from './order-items'

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
      <div className="mx-5 flex w-full max-w-6xl items-center justify-between">
        <div className="header-gradient text-5xl">Your Order.</div>
        <div className="flex flex-col text-end text-sm text-neutral-600">
          <div>Order Number: {order.orderNumber}</div>
          <div>Order Placed: {order.createdAt.toDateString()}</div>
        </div>
      </div>
      <div className="my-5 flex w-screen justify-center bg-card p-10">
        <div className="flex w-full max-w-6xl flex-col">
          <p className="pb-3 text-2xl">View more details about your order</p>
          <div className="space-x-4">
            <Link
              href={`/auth/login?redirectTo=/account/orders/${order.orderNumber}`}
            >
              <Button>Sign In or Register</Button>
            </Link>
            <ResendOrderConfirmationButton orderNumber={order.orderNumber} />
          </div>
        </div>
      </div>
      <div>
        {lineItems && lineItems.length > 0 ? (
          <OrderItems orderItems={lineItems} />
        ) : (
          <div>No items found in your order</div>
        )}
      </div>
    </main>
  )
}
