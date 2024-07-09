import { Order } from '@prisma/client'
import { Progress } from '@/components/ui/progress'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

export default function OrderStatusBar({ order }: { order: Order }) {
  return (
    <Card className="h-full w-full sm:w-[30rem]">
      <CardHeader>
        <CardTitle>Order Progress</CardTitle>
      </CardHeader>
      <CardContent>
        {order.orderStatus === 'PROCESSING' && (
          <div className="flex flex-col space-y-2">
            <div>Your order has been confirmed!</div>
            <Progress className="h-6" value={33} />
            <CardDescription>Your order will be shipped soon</CardDescription>
          </div>
        )}
        {order.orderStatus === 'SHIPPED' && (
          <div className="flex flex-col space-y-2">
            <div>Your order is on the way!</div>
            <Progress className="h-6" value={66} />
            <CardDescription>
              <Link href="/auth/login" className="underline underline-offset-2">
                Login or Register
              </Link>{' '}
              to view tracking details
            </CardDescription>
          </div>
        )}
        {order.orderStatus === 'DELIVERED' && (
          <div className="flex flex-col space-y-2">
            <div>Your order has been delivered!</div>
            <Progress className="h-6" value={100} />
            <CardDescription>
              Having an issue with your order?{' '}
              <Link
                href="/support/contact-us"
                className="underline underline-offset-2"
              >
                Get in touch
              </Link>
            </CardDescription>
          </div>
        )}
        {order.orderStatus === 'CANCELLED' && (
          <div className="flex flex-col space-y-2">
            <div>Your order has been cancelled</div>
            <Progress className="h-6" value={0} />
          </div>
        )}
        {order.orderStatus === 'RETURNED' && (
          <div className="flex flex-col space-y-2">
            <div>Your return has been processed</div>
            <Progress className="h-6" value={100} color="bg-secondary" />
            <CardDescription>
              I know you regret it.{' '}
              <Link
                href="/products"
                className="font-bold underline underline-offset-2"
              >
                Buy something else
              </Link>
            </CardDescription>
          </div>
        )}
        {order.orderStatus === 'EXCEPTION' && (
          <div className="flex flex-col space-y-2">
            <div>An Exception has occurred!</div>
            <Progress className="h-6" color="bg-destructive" value={100} />
            <CardDescription>
              Someone will be in touch soon. Sorry about the trouble! Still have
              a question?{' '}
              <Link
                href="/support/contact-us"
                className="underline underline-offset-2"
              >
                Get in touch
              </Link>
            </CardDescription>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
