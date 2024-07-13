'use client'

import { Button } from '@/components/ui/button'
import { createCheckoutSession } from '@/actions/stripe/checkout'
import { useShoppingCart } from '@/hooks/use-shopping-cart'
import { formatPrice } from '@/lib/utils'

interface BuyNowButtonProps {
  productId: number
  priceInCents: number
  quantity: number
}

export default function BuyNowButton({
  productId,
  priceInCents,
  quantity,
}: BuyNowButtonProps) {
  const { guestId } = useShoppingCart()

  const handleBuyNowClick = async () => {
    await createCheckoutSession(
      [{ productId: productId, quantity: quantity }],
      guestId,
    )
  }

  return (
    <Button
      className="hover:shadow-accent-light bg-accent text-accent-foreground duration-500 ease-in-out hover:scale-[1.01] hover:bg-accent hover:text-[0.9rem]"
      onClick={handleBuyNowClick}
    >
      {`Buy Now • ${formatPrice(priceInCents * quantity)}`}
    </Button>
  )
}
