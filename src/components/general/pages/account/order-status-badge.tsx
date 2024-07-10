import { OrderWithData } from '@/types'
import { Badge } from '@/components/ui/badge'
import { OrderStatus } from '@prisma/client'

export default function OrderStatusBadge({ status }: { status: OrderStatus }) {
  if (status === 'EXCEPTION') {
    return (
      <Badge variant="destructive">
        <span className="font-semibold">Exception</span>
      </Badge>
    )
  } else {
    return (
      <Badge variant="default" className="hover:bg-primary">
        <span className="font-semibold">{status}</span>
      </Badge>
    )
  }
}
