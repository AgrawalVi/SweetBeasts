'use client'

import { useState, useEffect } from 'react'
import AddToCartButton from './add-to-cart-button'
import QuantitySelector from './quantity-selector'
import { useRouter } from 'next/navigation'

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

  useEffect(() => {
    if (quantity > 1) {
      router.replace(`/products/pogo?quantity=${quantity}`)
    } else {
      router.replace(`/products/pogo`)
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
