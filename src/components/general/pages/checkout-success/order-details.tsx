import { OrderWithData } from '@/types'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function OrderDetails({ order }: { order: OrderWithData }) {
  return (
    <>
      <Card className="w-full sm:w-[30rem]">
        <CardHeader>
          <CardTitle>Order Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="pb-2 text-lg font-semibold">Contact Information</div>
          <div className="flex w-full flex-col justify-center space-y-1 text-muted-foreground">
            <div>{order.shippingAddress.recipientName}</div>
            <div>{order.email}</div>
          </div>
          <div className="py-2 text-lg font-semibold">Shipping Address</div>
          <div className="flex w-full flex-col justify-center space-y-1 text-muted-foreground">
            <div>{order.shippingAddress.recipientName}</div>
            <div>{order.shippingAddress.addressLine1}</div>
            {order.shippingAddress.addressLine2 && (
              <div>{order.shippingAddress.addressLine2}</div>
            )}
            <div>
              {order.shippingAddress.city}, {order.shippingAddress.state}{' '}
              {order.shippingAddress.zipCode}
            </div>
          </div>
          <div className="py-2 text-lg font-semibold">Shipping Method</div>
          <div className="flex w-full flex-col justify-center space-y-3 text-muted-foreground">
            {order.shippingMethod}
          </div>
        </CardContent>
      </Card>
    </>
  )
}
