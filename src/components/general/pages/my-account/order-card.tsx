import { Card } from '@/components/ui/card'
import { formatPrice } from '@/lib/utils'
import { OrderWithData } from '@/types'
import { formatDate } from '@/utils/date-functions'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import OrderStatusBadge from './order-status-badge'

export default function OrderCard({ order }: { order: OrderWithData }) {
  return (
    <Card className="flex w-full flex-col justify-between space-y-4 rounded-md border border-border bg-muted/20 p-4 transition-all duration-300 ease-in-out hover:bg-muted/50 dark:hover:bg-muted/80">
      <div className="flex w-full justify-between">
        <div className="flex flex-col space-y-1">
          <div className="text-sm font-semibold">Order {order.orderNumber}</div>
          <div className="text-xs text-muted-foreground">
            Placed {formatDate(order.createdAt)}
          </div>
        </div>
        <div className="flex flex-col space-y-1 text-right">
          <OrderStatusBadge order={order} />
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="text-sm font-semibold">
          Total: {formatPrice(order.totalPaidInCents)}
        </div>
        <Link
          href={`/my-account/orders/${order.orderNumber}`}
          className="group flex w-fit text-sm font-semibold underline underline-offset-2"
        >
          View Details
          <ChevronRight
            size={20}
            className="transition-all group-hover:translate-x-0.5 group-hover:scale-110"
          />
        </Link>
      </div>
    </Card>
  )
}
