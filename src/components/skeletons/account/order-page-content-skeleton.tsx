import { Card } from '@/components/ui/card'
import { OrderCardSkeleton } from './order-card-skeleton'

export default function OrderPageContentSkeleton() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:w-[30rem] md:w-[45rem] md:grid-cols-2">
      <OrderCardSkeleton className="md:h-[112px] md:w-[352px]" />
      <OrderCardSkeleton className="md:h-[112px] md:w-[352px]" />
      <OrderCardSkeleton className="md:h-[112px] md:w-[352px]" />
      <OrderCardSkeleton className="md:h-[112px] md:w-[352px]" />
    </div>
  )
}
