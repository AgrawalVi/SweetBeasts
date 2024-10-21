import { Metadata } from 'next'
import { redirect } from 'next/navigation'

import ImageDialog from '@/components/custom/image-dialog'
import ImageGrid from '@/components/custom/image-grid'
import SVGDecoration from '@/components/custom/svg-component'
import AddToCartAndBuyNowWithQuantitySection from '@/components/general/pages/product/add-to-cart-quantity/add-to-cart-and-buy-now-quantity-secton'
import LimitedSupplyBuyNow from '@/components/general/pages/product/limited-supply-buy-now'
import LoreTeaser from '@/components/general/pages/product/lore-teaser'
import PriceSection from '@/components/general/pages/product/price-section'
import ProductAccordion from '@/components/general/pages/product/product-accordion'
import { getProductByName } from '@/data/shop/product'

type Props = {
  params: { product: string }
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const product = await getProductByName(params.product.toLowerCase())

  if (!product) {
    return { title: 'Product Not Found' }
  }

  return {
    title: product.name,
    description: product.description,
  }
}

export default async function Pogo({
  params,
  searchParams,
}: {
  params: { product: string }
  searchParams: { quantity?: string }
}) {
  const product = await getProductByName(params.product.toLowerCase())

  if (!product) {
    redirect('/products')
  }

  if (params.product !== product.name.toLowerCase()) {
    redirect(`/products/${product.name.toLowerCase()}`)
  }

  const variant = product.variants[0]

  const parsedQuantity = searchParams.quantity
    ? parseInt(searchParams.quantity)
    : 1
  const quantity = parsedQuantity > 0 ? parsedQuantity : 1

  if (quantity === 1 && searchParams.quantity) {
    redirect(`/products/pogo`)
  }

  const images = [
    {
      src: '/product-photos/pogo/pogo-angle-1.png',
      alt: product.name,
      width: 300,
      height: 300,
    },
    {
      src: '/product-photos/pogo/pogo-angle-2.png',
      alt: product.name,
      width: 250,
      height: 250,
    },
    {
      src: '/product-photos/pogo/pogo-back.png',
      alt: product.name,
      width: 275,
      height: 275,
    },
    {
      src: '/product-photos/pogo/pogo-side.png',
      alt: product.name,
      width: 300,
      height: 300,
    },
  ]

  // SVG paths for left and right sides
  const leftSvgs = [
    '/plushie artwork R-04.svg',
    '/plushie artwork R-06.svg',
    '/plushie artwork R-09.svg', // Third left SVG
  ]
  const rightSvgs = [
    '/plushie artwork R-06.svg',
    '/plushie artwork R-07.svg',
    '/plushie artwork R-08.svg',
  ]

  return (
    <main className="relative flex w-full flex-col items-center">
      {/* Main container positioned relatively */}
      <div className="relative flex w-full max-w-5xl flex-col items-center space-y-12">
        {/* Title and Header */}
        <div>
          <div className="header-gradient text-center text-7xl sm:text-6xl md:text-9xl">
            POGO
          </div>
          <div className="bg-gradient-to-b from-cyan-700 via-30% to-cyan-400 bg-clip-text py-2 text-center font-coiny text-2xl font-semibold text-transparent dark:from-rose-600 dark:to-rose-400 md:text-[2.65rem]">
            The Peach Penguin
          </div>
        </div>

        {/* Product Image and Details */}
        <div className="flex grid-cols-1 flex-col space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
          <div className="flex justify-center">
            <ImageDialog
              src={`${product.primaryProductImage}`}
              alt={product.name}
              width={400}
              height={400}
              className={'w-full rounded-md'}
            />
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="grid w-full max-w-[20rem] flex-col space-y-4">
              <div>
                <PriceSection />
                <div>
                  <LimitedSupplyBuyNow />
                  <AddToCartAndBuyNowWithQuantitySection
                    productId={variant.id}
                    priceInCents={variant.priceInCents}
                    initialQuantity={quantity}
                  />
                </div>
              </div>
              <ProductAccordion />
            </div>
          </div>
        </div>

        <LoreTeaser />

        {/* Use the SVGDecoration component */}
        {/* <SVGDecoration leftSvgs={leftSvgs} rightSvgs={rightSvgs} /> */}

        <ImageGrid images={images} className="w-full rounded-md" />
      </div>
    </main>
  )
}
