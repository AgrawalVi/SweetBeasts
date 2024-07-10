import { getFourMostRecentOrdersWithDataByUserId } from '@/data/shop/orders'
import { currentUser } from '@/lib/auth'
import { OrderWithData } from '@/types'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import OrderCard from './order-card'

export default async function OrderContent() {
  const user = await currentUser()
  if (!user) {
    redirect('/auth/login')
  }

  let orders: OrderWithData[] | null =
    await getFourMostRecentOrdersWithDataByUserId(user.id as string)
  let showMore = false

  if (!orders || orders.length === 0) {
    return (
      <div className="text-muted-foreground">
        You haven't placed any orders yet. Time to{' '}
        <Link href="/products" className="underline underline-offset-2">
          buy something
        </Link>
        !
      </div>
    )
  }

  if (orders.length === 4) {
    orders = orders.slice(0, 4)
    showMore = true
  }

  return (
    <div>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
      {showMore && (
        <div className="flex w-full justify-center">
          <Link href="/account/orders" className="underline underline-offset-2">
            View More
          </Link>
        </div>
      )}
    </div>
  )
}
