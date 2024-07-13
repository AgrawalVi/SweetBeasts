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
import { getProductByName } from '@/data/shop/product'

export default async function Pogo({
  params,
  searchParams,
}: {
  params: { product: string }
  searchParams: { quantity?: string }
}) {
  const product = await getProductByName(params.product.toLowerCase()) // set to pogo product id for now, but can easily change to a slug later

  if (!product) {
    redirect('/products')
  }

  if (params.product !== product.name.toLowerCase()) {
    redirect(`/products/${product.name.toLowerCase()}`)
  }

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
        productId={product.id}
        priceInCents={product.priceInCents}
        initialQuantity={quantity}
      />
    </main>
  )
}
