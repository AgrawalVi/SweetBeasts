import { Card } from '@/components/ui/card'
import { formatPrice } from '@/lib/utils'
import { OrderWithData } from '@/types'
import { formatDate } from '@/lib/date-functions'
import { ChevronRight, CircleArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'
import OrderStatusBadge from './order-status-badge'

export default function OrderCard({ order }: { order: OrderWithData }) {
  return (
    <Card className="grid w-full grid-cols-2 justify-between rounded-md border border-muted bg-muted/20 p-4 transition-all duration-300 ease-in-out hover:bg-muted/50 dark:hover:bg-muted/80">
      <div className="flex flex-col items-start justify-between space-y-4">
        <div className="flex flex-col space-y-1">
          <div className="text-sm font-semibold">Order {order.orderNumber}</div>
          <div className="text-xs text-muted-foreground">
            Placed {formatDate(order.createdAt)}
          </div>
        </div>
        <div className="flex flex-col space-y-1 text-right">
          <OrderStatusBadge status={order.orderStatus} />
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <div className="text-sm font-semibold">
          Total: {formatPrice(order.totalPaidInCents)}
        </div>
        {order.trackingUrl && (
          <Link
            href={`${order.trackingUrl}`}
            className="group flex w-fit text-xs font-semibold underline underline-offset-2"
          >
            Track Order
            <CircleArrowOutUpRight
              size={15}
              className="ml-1 transition-all group-hover:translate-x-0.5 group-hover:scale-110"
            />
          </Link>
        )}
        <Link
          href={`/account/orders/${order.orderNumber}`}
          className="group flex w-fit text-xs font-semibold underline underline-offset-2"
        >
          View Details
          <ChevronRight
            size={15}
            className="transition-all group-hover:translate-x-0.5 group-hover:scale-110"
          />
        </Link>
      </div>
    </Card>
  )
}
