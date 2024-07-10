'use server'

import { Card } from '@/components/ui/card'
import { getAllOrdersWithDataByUserId } from '@/data/shop/orders'
import { currentUser } from '@/lib/auth'
import { OrderWithData } from '@/types'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import OrdersPageOrderItem from './orders-page-order-item'
import OrderCard from '../order-card'
import { cn } from '@/lib/utils'

export async function OrdersPageContent() {
  const user = await currentUser()

  if (!user) {
    redirect('/auth/login')
  }

  const orders: OrderWithData[] = await getAllOrdersWithDataByUserId(
    user.id as string,
  )

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

  return (
    <div
      className={cn(
        'grid w-full grid-cols-1 justify-center gap-4 sm:w-[30rem] md:w-[45rem]',
        orders.length > 1 && 'md:grid-cols-2',
      )}
    >
      {orders.map((order) => {
        return <OrderCard key={order.id} order={order} />
      })}
    </div>
  )
}
