import { getProducts } from '@/data/shop/product'
import { redirect } from 'next/navigation'
import ProductCard from '@/components/custom/product-card' // Adjust the import path as needed

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
