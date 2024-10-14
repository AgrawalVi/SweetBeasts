import { getFourMostRecentOrdersWithDataByUserId } from '@/data/shop/orders'
import { currentUser } from '@/lib/auth'
import { OrderWithData } from '@/types'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import OrderCard from './order-card'
import { ChevronRight } from 'lucide-react'

export default async function OrderContent() {
  const user = await currentUser()
  if (!user) {
    redirect('/auth/login')
  }

  let orders: OrderWithData[] = await getFourMostRecentOrdersWithDataByUserId(
    user.id as string,
  )
  let showMore = false

  if (orders.length === 0) {
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
    orders = orders.slice(0, 3)
    showMore = true
  }

  return (
    <div className="flex flex-col space-y-4">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
      {showMore && (
        <div className="flex w-full justify-center">
          <Link
            href="/account/orders"
            className="group flex w-fit text-sm underline underline-offset-2"
          >
            View All
            <ChevronRight
              size={20}
              className="transition-all group-hover:translate-x-0.5 group-hover:scale-110"
            />
          </Link>
        </div>
      )}
    </div>
  )
}
