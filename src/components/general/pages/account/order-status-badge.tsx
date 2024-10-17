import { OrderWithData } from '@/types'
import { OrderStatus } from '@prisma/client'

import { Badge } from '@/components/ui/badge'

export default function OrderStatusBadge({ status }: { status: OrderStatus }) {
  if (status === 'EXCEPTION') {
    return (
      <Badge variant="destructive" className="hover:bg-destructive">
        <span className="font-semibold">{status}</span>
      </Badge>
    )
  } else if (status === 'RETURNED' || status === 'CANCELLED') {
    return (
      <Badge variant="secondary" className="hover:bg-secondary">
        <span className="font-semibold">{status}</span>
      </Badge>
    )
  } else if (status === 'DELIVERED') {
    return (
      <Badge
        variant="default"
        className="bg-accent text-accent-foreground hover:bg-accent"
      >
        <span className="font-semibold">{status}</span>
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
