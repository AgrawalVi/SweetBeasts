'use client'

import { useState } from 'react'
import AddToCartButton from './add-to-cart-button'
import QuantitySelector from './quantity-selector'

interface AddToCartWithQuantitySectionProps {
  productId: number
  priceInCents: number
}

export default function AddToCartWithQuantitySection({
  productId,
  priceInCents,
}: AddToCartWithQuantitySectionProps) {
  const [quantity, setQuantity] = useState<number>(1)

  return (
    <main>
      <AddToCartButton
        productId={productId}
        priceInCents={priceInCents}
        quantity={quantity}
      />
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
    </main>
  )
}
