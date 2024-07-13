import { redirect } from 'next/navigation'
import AddToCartAndBuyNowWithQuantitySection from '@/components/general/pages/product/add-to-cart-quantity/add-to-cart-and-buy-now-quantity-secton'
import { getProductByName } from '@/data/shop/product'
import ImageDialog from '@/components/custom/image-dialog'
import ProductAccordion from '@/components/general/pages/product/product-accordion'
import LimitedSupplyBuyNow from '@/components/general/pages/product/limited-supply-buy-now'
import PriceSection from '@/components/general/pages/product/price-section'

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
        <div className="mb-5 md:mb-10">
          <div className="header-gradient text-center text-7xl sm:text-6xl md:text-9xl">
            POGO
          </div>
          <div className="bg-gradient-to-b from-cyan-700 via-30% to-cyan-400 bg-clip-text py-2 text-center font-coiny text-2xl font-semibold text-transparent dark:from-rose-600 dark:to-rose-400 md:text-[2.65rem]">
            The Peach Penguin
          </div>
        </div>
        <div className="flex grid-cols-2 flex-col space-y-4 md:grid md:gap-4 md:space-y-0">
          <div>
            <ImageDialog
              src={product.primaryImagePath as string}
              alt={product.name}
              className="w-full rounded-md"
            />
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="grid w-full max-w-[20rem] flex-col space-y-4">
              <div>
                <PriceSection />
                <div>
                  <LimitedSupplyBuyNow />
                  <AddToCartAndBuyNowWithQuantitySection
                    productId={product.id}
                    priceInCents={product.priceInCents}
                    initialQuantity={quantity}
                  />
                </div>
              </div>
              <ProductAccordion />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
