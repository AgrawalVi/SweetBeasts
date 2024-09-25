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

  // Add SVG paths here, ensure these SVG files are in your public folder
  const svgs = [
    '/plushie artwork R-04.svg',
    '/plushie artwork R-05.svg',
    '/plushie artwork R-06.svg',
    '/plushie artwork R-07.svg',
    '/plushie artwork R-08.svg',
    '/plushie artwork R-09.svg',
    '/plushie artwork R-10.svg',
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
        <Image
          src={svgs[0]}
          alt="SVG 1"
          width={300}
          height={300}
          className="absolute top-10 left-10 w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-36 lg:h-48 xl:w-48 xl:h-48"
        />
        <LoreTeaser />

        {/* Image Grid Section */}
        <ImageGrid images={images} className="w-full rounded-md" />

        {/* Fixed Irregularly Placed SVGs */}
        <div className="relative w-full h-screen">
          {/* SVG 1 (Already done) */}
          <Image
            src={svgs[0]}
            alt="SVG 1"
            width={100}
            height={100}
            className="absolute top-10 left-10 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80"
          />

          {/* SVG 2 (Inverted on the right, placed higher) */}
          <Image
            src={svgs[1]}
            alt="SVG 2"
            width={128}
            height={128}
            className="absolute top-1/4 right-10 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80"
          />

          {/* SVG 3 (Bottom left, near middle) */}
          <Image
            src={svgs[2]}
            alt="SVG 3"
            width={112}
            height={112}
            className="absolute bottom-1/4 left-10 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80"
          />

          {/* SVG 4 (Bottom right) */}
          <Image
            src={svgs[3]}
            alt="SVG 4"
            width={96}
            height={96}
            className="absolute bottom-10 right-10 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80"
          />

          {/* SVG 5 (Centered on the left) */}
          <Image
            src={svgs[4]}
            alt="SVG 5"
            width={80}
            height={80}
            className="absolute top-1/2 left-10 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80"
          />

          {/* SVG 6 (Centered on the right) */}
          <Image
            src={svgs[5]}
            alt="SVG 6"
            width={144}
            height={144}
            className="absolute top-1/2 right-10 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80"
          />
        </div>
      </div>
    </main>
  )
}




