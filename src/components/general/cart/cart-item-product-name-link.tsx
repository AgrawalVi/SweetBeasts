'use client'

import { useShoppingCart } from '@/hooks/use-shopping-cart'
import { Product } from '@prisma/client'
import { Link } from 'lucide-react'

export default function CartItemProductNameLink({
  product,
}: {
  product: Product
}) {
  const { setIsCartOpen } = useShoppingCart()

  return (
    <Link href={product.productHref}>
      <div>{product.name}</div>
    </Link>
  )
}
