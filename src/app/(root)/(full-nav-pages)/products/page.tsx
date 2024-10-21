import { redirect } from 'next/navigation'

import ProductCard from '@/components/custom/product-card'
import { getProducts } from '@/data/shop/product'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Products',
  description: "All the products from SweetBeasts"
}
export default async function ProductsPage() {
  const products = await getProducts()

  if (!products) {
    redirect('/product-updates')
  }

  return (
    <div className="relative h-screen w-full">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
