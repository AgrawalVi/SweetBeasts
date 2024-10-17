'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { formatPrice } from '@/lib/utils'
import { useShoppingCart } from '@/hooks/use-shopping-cart'
import { Button } from '@/components/ui/button'
import GradientButton from '@/components/aceternity/gradient-button'

import AddToCartButton from './add-to-cart-button'
import BuyNowButton from './buy-now-button'
import QuantitySelector from './quantity-selector'

interface AddToCartAndBuyNowWithQuantitySectionProps {
  productId: number
  priceInCents: number
  initialQuantity: number
  className?: string
}

export default function AddToCartAndBuyNowWithQuantitySection({
  productId,
  priceInCents,
  className,
  initialQuantity = 1,
}: AddToCartAndBuyNowWithQuantitySectionProps) {
  const [quantity, setQuantity] = useState<number>(initialQuantity)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (quantity > 1) {
      router.replace(`${pathname}?quantity=${quantity}`, { scroll: false })
    } else {
      router.replace(`${pathname}`, { scroll: false })
    }
  }, [quantity])

  return (
    <main className="flex flex-col space-y-2">
      <div className="flex space-x-2">
        <AddToCartButton productId={productId} quantity={quantity} />
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </div>
      <BuyNowButton
        productId={productId}
        priceInCents={priceInCents}
        quantity={quantity}
      />
    </main>
  )
}
