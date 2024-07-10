import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

export const OrderContentCardSkeleton = ({
  className,
}: {
  className?: string
}) => {
  return (
    <Card
      className={cn(
        'grid w-full grid-cols-2 justify-between rounded-md border border-muted bg-muted/20 p-4 transition-all duration-300 ease-in-out hover:bg-muted/50 dark:hover:bg-muted/80',
        className,
      )}
    >
      <div className="flex flex-col items-start justify-between space-y-4">
        <div className="flex flex-col space-y-1">
          <div className="text-sm font-semibold">
            <Skeleton className="h-5 w-24" />
          </div>
          <div className="text-xs text-muted-foreground">
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
        <div className="flex flex-col space-y-1 text-right">
          <Skeleton className="h-[22px] w-24" />
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <div className="text-sm font-semibold">
          <Skeleton className="h-5 w-24" />
        </div>
      </div>
    </Card>
  )
}
