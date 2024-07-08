import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { OrderWithData } from '@/types'

import { Order, ShippingAddress } from '@prisma/client'
import Link from 'next/link'

export default function OrderDetails({ order }: { order: OrderWithData }) {
  return (
    <Card className="w-full sm:w-[30rem]">
      <CardHeader>
        <CardTitle>Order Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="pb-2 text-lg font-semibold">Contact Information</div>
        <div className="flex w-full flex-col justify-center space-y-1 text-muted-foreground">
          <div>{order.ShippingAddress.recipientName}</div>
          <div>{order.email}</div>
        </div>
        <div className="py-2 text-lg font-semibold">Shipping Address</div>
        <div className="flex w-full flex-col justify-center space-y-1 text-muted-foreground">
          <div>{order.ShippingAddress.recipientName}</div>
          <div>{order.ShippingAddress.addressLine1}</div>
          {order.ShippingAddress.addressLine2 && (
            <div>{order.ShippingAddress.addressLine2}</div>
          )}
          <div>
            {order.ShippingAddress.city}, {order.ShippingAddress.state}{' '}
            {order.ShippingAddress.zipCode}
          </div>
        </div>
        <div className="py-2 text-lg font-semibold">Shipping Method</div>
        <div className="flex w-full flex-col justify-center space-y-3 text-muted-foreground">
          {order.shippingMethod}
        </div>
      </CardContent>
    </Card>
  )
}
