import { CardDescription } from '@/components/ui/card'
import { formatPrice } from '@/lib/utils'
import { OrderWithData } from '@/types'
import { formatDate } from '@/utils/date-functions'

export default function OrdersPageOrderItem({
  order,
}: {
  order: OrderWithData
}) {
  if (!order.lineItems) {
    return
  }

  const numItems = order.lineItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="flex h-full w-full items-center space-x-4 py-2">
      <div className="flex flex-col items-start space-y-0.5">
        <div>Order {order.orderNumber}</div>
        <CardDescription>{formatDate(order.createdAt)}</CardDescription>
      </div>
      <div className="flex flex-col items-end space-y-0.5">
        <div>{formatPrice(order.totalPaidInCents)}</div>
        <CardDescription>
          {numItems} {numItems > 1 ? 'items' : 'item'}
        </CardDescription>
      </div>
    </div>
  )
}
