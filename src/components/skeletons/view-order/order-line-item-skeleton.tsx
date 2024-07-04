import { CardDescription } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function OrderLineItemSkeleton() {
  return (
    <div className="flex w-full space-x-6 align-middle">
      <div className="relative">
        <Skeleton className="h-[56px] w-[56px] rounded-md md:h-[128px] md:w-[128px]" />
      </div>
      <div className="flex grow flex-col items-start justify-center space-y-1 text-sm md:text-base">
        <Skeleton className="h-6 w-16 md:h-7" />
        <Skeleton className="h-5 w-12" />
      </div>
      <div className="inline-flex flex-col items-end justify-center text-sm">
        <Skeleton className="h-5 w-12" />
      </div>
    </div>
  )
}
