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

import AddToCartAndBuyNowWithQuantitySection from '@/components/general/pages/product/add-to-cart-quantity/add-to-cart-and-buy-now-quantity-secton'
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
    <main className="flex w-full flex-col items-center">
      <div className="relative flex w-full max-w-5xl flex-col items-center">
        <div>
          <div className="header-gradient text-center text-5xl sm:text-6xl lg:text-9xl">
            POGO
          </div>
          <div className="bg-gradient-to-b from-cyan-700 from-50% to-cyan-400 bg-clip-text text-center font-semibold text-transparent dark:from-rose-600 dark:to-rose-400 lg:text-[2.65rem]">
            The Peachy Penguin
          </div>
        </div>
        <Image
          src={product.primaryImagePath as string}
          alt={product.name}
          height={100}
          width={100}
        />
        <AddToCartAndBuyNowWithQuantitySection
          productId={product.id}
          priceInCents={product.priceInCents}
          initialQuantity={quantity}
        />
      </div>
    </main>
  )
}
