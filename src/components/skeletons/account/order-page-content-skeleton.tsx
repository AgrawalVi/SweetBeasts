import { Card } from '@/components/ui/card'
import { OrderContentCardSkeleton } from './order-content-card-skeleton'

export default function OrderPageContentSkeleton() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:w-[30rem] md:w-[45rem] md:grid-cols-2">
      <OrderContentCardSkeleton className="md:h-[112px] md:w-[352px]" />
      <OrderContentCardSkeleton className="md:h-[112px] md:w-[352px]" />
      <OrderContentCardSkeleton className="md:h-[112px] md:w-[352px]" />
      <OrderContentCardSkeleton className="md:h-[112px] md:w-[352px]" />
    </div>
  )
}
