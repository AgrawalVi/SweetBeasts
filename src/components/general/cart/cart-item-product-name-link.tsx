'use client'

import { Product } from '@prisma/client'
import Link from 'next/link'

export default function CartItemProductNameLink({
  product,
  className,
}: {
  product: Product
  className?: string
}) {
  return (
    <Link href={product.productHref}>
      <div className={className}>{product.name}</div>
    </Link>
  )
}
