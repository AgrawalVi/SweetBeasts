import { redirect } from 'next/navigation'
import AddToCartAndBuyNowWithQuantitySection from '@/components/general/pages/product/add-to-cart-quantity/add-to-cart-and-buy-now-quantity-secton'
import { getProductByName } from '@/data/shop/product'
import Image from 'next/image'
import ProductAccordion from '@/components/general/pages/product/product-accordion'
import LimitedSupplyBuyNow from '@/components/general/pages/product/limited-supply-buy-now'
import PriceSection from '@/components/general/pages/product/price-section'
import LoreTeaser from '@/components/general/pages/product/lore-teaser'
import ImageGrid from '@/components/custom/image-grid'
import ImageDialog from '@/components/custom/image-dialog'

export default async function Pogo({
  params,
  searchParams,
}: {
  params: { product: string }
  searchParams: { quantity?: string }
}) {
  const product = await getProductByName(params.product.toLowerCase())

  if (!product) {
    redirect('/')
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

  const images = [
    {
      src: '/test-product.jpg',
      alt: product.name,
      width: 300,
      height: 300,
    },
    {
      src: '/test-product.jpg',
      alt: product.name,
      width: 250,
      height: 250,
    },
    {
      src: '/test-product.jpg',
      alt: product.name,
      width: 275,
      height: 275,
    },
    {
      src: '/test-product.jpg',
      alt: product.name,
      width: 300,
      height: 300,
    },
  ]

  // Add SVG paths here
  const svgs = [
    'plushie artwork R-04.svg',
    '/path/to/svg2.svg',
    '/path/to/svg3.svg',
    '/path/to/svg4.svg',
    '/path/to/svg5.svg',
    '/path/to/svg6.svg',
  ]

  return (
    <main className="flex w-full flex-col items-center">
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
          <div>
            <ImageDialog
              src={product.primaryImagePath}
              alt={product.name}
              width={500}
              height={500}
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

        {/* Lore Section */}
        <LoreTeaser />

        {/* Image Grid Section */}
        <ImageGrid images={images} className="w-full rounded-md" />

        {/* Fixed Irregularly Placed SVGs */}
        <div className="relative w-full h-screen">
          {/* SVG 1 */}
          <img
            src={svgs[0]}
            alt="SVG 1"
            className="absolute top-10 left-10 w-24 h-24"
          />
          {/* SVG 2 */}
          <img
            src={svgs[1]}
            alt="SVG 2"
            className="absolute top-40 right-20 w-32 h-32"
          />
          {/* SVG 3 */}
          <img
            src={svgs[2]}
            alt="SVG 3"
            className="absolute bottom-20 left-20 w-28 h-28"
          />
          {/* SVG 4 */}
          <img
            src={svgs[3]}
            alt="SVG 4"
            className="absolute bottom-10 right-10 w-24 h-24"
          />
          {/* SVG 5 */}
          <img
            src={svgs[4]}
            alt="SVG 5"
            className="absolute top-1/2 left-1/4 w-20 h-20"
          />
          {/* SVG 6 */}
          <img
            src={svgs[5]}
            alt="SVG 6"
            className="absolute top-1/3 right-1/3 w-36 h-36"
          />
        </div>
      </div>
    </main>
  )
}
