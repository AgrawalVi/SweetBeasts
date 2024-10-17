import Link from 'next/link'

import { Skeleton } from '@/components/ui/skeleton'

import { Button } from '../../ui/button'
import OrderDetailsSkeleton from './order-details-skeleton'
import OrderStatusbarSkeleton from './order-statusbar-skeleton'
import OrderSummarySkeleton from './order-summary-skeleton'

export default function OrderStatusSkeleton() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <div className="mx-5 flex w-full max-w-6xl flex-col items-center justify-between sm:flex-row">
        <div className="header-gradient text-5xl">Your Order</div>
        <div className="flex flex-col text-center text-sm text-muted-foreground sm:text-end sm:text-base">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-5 w-24" />
        </div>
      </div>
      <div className="my-5 flex w-screen justify-center border-b border-t border-border bg-card p-10">
        <div className="flex w-full max-w-6xl flex-col justify-between sm:flex-row">
          <p className="pb-3 text-xl sm:pb-0 sm:text-2xl">
            View more details about your order
          </p>
          <Link href={`/auth/login`} className="flex justify-center">
            <Button>Login or Register</Button>
          </Link>
        </div>
      </div>
      <div className="h-full max-w-6xl flex-col items-start justify-start space-y-4 xl:grid xl:grid-cols-2 xl:gap-4 xl:space-y-0">
        <div className="flex w-full">
          <OrderSummarySkeleton />
        </div>
        <div className="flex w-full flex-col space-y-4 xl:items-start xl:justify-center">
          <OrderStatusbarSkeleton />
          <OrderDetailsSkeleton />
        </div>
      </div>
    </main>
  )
}
