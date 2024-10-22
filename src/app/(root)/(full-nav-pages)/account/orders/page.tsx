import { Suspense } from 'react'

import { Card } from '@/components/ui/card'
import { OrdersPageContent } from '@/components/general/pages/account/orders/orders-page-content'
import OrderPageContentSkeleton from '@/components/skeletons/account/order-page-content-skeleton'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Orders',
  description: "All your orders from SweetBeasts",
}

export default function OrdersPage() {
  return (
    <main className="relative flex w-full flex-col items-center justify-center space-y-8">
      <div className="mx-5 flex w-full max-w-6xl flex-col items-center">
        <div className="header-gradient text-center text-5xl sm:text-6xl">
          Your Orders
        </div>
        <div className="my-10 flex w-full flex-col items-center space-y-4 sm:w-fit">
          <Card className="w-full max-w-5xl p-5">
            <Suspense fallback={<OrderPageContentSkeleton />}>
              <OrdersPageContent />
            </Suspense>
          </Card>
        </div>
      </div>
    </main>
  )
}
