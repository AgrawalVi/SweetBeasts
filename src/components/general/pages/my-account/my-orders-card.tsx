import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import OrderContent from './my-orders-card-content'

export default async function MyOrdersCard() {
  return (
    <Card className="w-full sm:w-[30rem]">
      <CardHeader>
        <CardTitle>Your Orders</CardTitle>
        <CardDescription>View your latest orders here</CardDescription>
      </CardHeader>
      <CardContent>
        <OrderContent />
      </CardContent>
    </Card>
  )
}
