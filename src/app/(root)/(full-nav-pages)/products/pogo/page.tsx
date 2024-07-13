import { redirect } from 'next/navigation'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

import AddToCartWithQuantitySection from '@/components/general/pages/product/add-to-cart-quantity/add-to-cart-quantity-secton'

export default function Pogo({
  searchParams,
}: {
  searchParams: { quantity?: string }
}) {
  const parsedQuantity = searchParams.quantity
    ? parseInt(searchParams.quantity)
    : 1
  const quantity = parsedQuantity > 0 ? parsedQuantity : 1

  if (quantity === 1 && searchParams.quantity) {
    redirect(`/products/pogo`)
  }

  return (
    <main>
      <AddToCartWithQuantitySection
        productId={1}
        priceInCents={1500}
        initialQuantity={quantity}
      />
    </main>
  )
}
