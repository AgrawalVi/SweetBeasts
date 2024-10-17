'use client'

import Link from 'next/link'
import { Product } from '@prisma/client'

export default function CartItemProductNameLink({
  product,
  className,
}: {
  product: Product
  className?: string
}) {
  return (
    <Link href={`${product.productHref}`}>
      <div className={className}>{product.name}</div>
    </Link>
  )
}
