import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'

export default function OrderStatusbarSkeleton() {
  return (
    <Card className="h-full w-full sm:w-[30rem]">
      <CardHeader>
        <CardTitle>Order Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-6 w-32" />
          <Progress className="h-6" value={0} />
          <Skeleton className="h-5 w-32" />
        </div>
      </CardContent>
    </Card>
  )
}
