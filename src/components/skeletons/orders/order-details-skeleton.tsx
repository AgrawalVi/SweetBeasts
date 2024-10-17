import Link from 'next/link'
import { Order, ShippingAddress } from '@prisma/client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function OrderDetailsSkeleton() {
  return (
    <Card className="w-full sm:w-[30rem]">
      <CardHeader>
        <CardTitle>Order Details</CardTitle>
        <CardDescription>
          <Link
            href={`/auth/login`}
            className="font-bold underline underline-offset-2"
          >
            Login or Register
          </Link>{' '}
          to view all your order details
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="pb-2 text-lg font-semibold">Contact Information</div>
        <div className="flex w-full flex-col justify-center space-y-3">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-1/3" />
        </div>
        <div className="py-2 text-lg font-semibold">Shipping Address</div>
        <div className="flex w-full flex-col justify-center space-y-3">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/3" />
        </div>
        <div className="py-2 text-lg font-semibold">Shipping Method</div>
        <div className="flex w-full flex-col justify-center space-y-3">
          <Skeleton className="h-4 w-1/2" />
        </div>
      </CardContent>
    </Card>
  )
}
