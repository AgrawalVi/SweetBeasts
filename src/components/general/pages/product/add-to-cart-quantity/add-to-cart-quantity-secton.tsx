'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

import AddToCartButton from './add-to-cart-button'
import QuantitySelector from './quantity-selector'

interface AddToCartWithQuantitySectionProps {
  productId: number
  priceInCents: number
  initialQuantity: number
  className?: string
}

export default function AddToCartWithQuantitySection({
  productId,
  priceInCents,
  className,
  initialQuantity = 1,
}: AddToCartWithQuantitySectionProps) {
  const [quantity, setQuantity] = useState<number>(initialQuantity)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (quantity > 1) {
      router.replace(`${pathname}?quantity=${quantity}`)
    } else {
      router.replace(`${pathname}`)
    }
  }, [quantity])

  return (
    <main className="flex space-x-4">
      <AddToCartButton
        productId={productId}
        priceInCents={priceInCents}
        quantity={quantity}
      />
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
    </main>
  )
}
