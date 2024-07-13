import { redirect } from 'next/navigation'
import AddToCartAndBuyNowWithQuantitySection from '@/components/general/pages/product/add-to-cart-quantity/add-to-cart-and-buy-now-quantity-secton'
import { getProductByName } from '@/data/shop/product'
import ImageDialog from '@/components/custom/image-dialog'

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
        <div className="header-gradient text-center text-5xl sm:text-6xl lg:text-9xl">
          POGO
        </div>
        <div className="bg-gradient-to-b from-cyan-700 from-50% to-cyan-400 bg-clip-text text-center font-semibold text-transparent dark:from-rose-600 dark:to-rose-400 lg:text-[2.65rem]">
          The Peach Penguin
        </div>
        <ImageDialog
          src={product.primaryImagePath as string}
          alt={product.name}
          className="w-full rounded-md"
        />
        <div className="relative my-2 ml-6 flex w-fit justify-center">
          <div className="absolute -left-3 top-1/2 size-2 -translate-y-1/2 transform animate-pulse rounded-full bg-accent-foreground/70 duration-1000 dark:bg-accent" />
          <div className="absolute -left-[14px] top-1.5 size-3 transform animate-ping rounded-full bg-accent-foreground dark:bg-accent" />
          <div className="ml-2 font-bold">LIMITED SUPPLY - BUY NOW</div>
        </div>
        <AddToCartAndBuyNowWithQuantitySection
          productId={product.id}
          priceInCents={product.priceInCents}
          initialQuantity={quantity}
        />
      </div>
    </main>
  )
}
