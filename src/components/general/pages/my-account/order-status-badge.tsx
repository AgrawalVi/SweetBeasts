import { OrderWithData } from '@/types'
import { Badge } from '@/components/ui/badge'

export default function OrderStatusBadge({ order }: { order: OrderWithData }) {
  if (order.orderStatus === 'EXCEPTION') {
    return (
      <Badge variant="destructive">
        <span className="font-semibold">Exception</span>
      </Badge>
    )
  } else {
    return (
      <Badge variant="default" className="hover:bg-primary">
        <span className="font-semibold">{order.orderStatus}</span>
      </Badge>
    )
  }
}
