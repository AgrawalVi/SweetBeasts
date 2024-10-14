'use client'

import { useEffect, useTransition } from 'react'

import { createCheckoutSession } from '@/actions/stripe/checkout'
import { useShoppingCart } from '@/hooks/use-shopping-cart'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
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
  const [isPending, startTransition] = useTransition()
  const { guestId } = useShoppingCart()
  const { toast } = useToast()

  useEffect(() => {
    async function getLoader() {
      const { mirage } = await import('ldrs')
      mirage.register()
    }
    getLoader()
  }, [])

  const handleBuyNowClick = () => {
    startTransition(() => {
      createCheckoutSession(
        [{ productId: productId, quantity: quantity }],
        guestId,
      ).then((response) => {
        if (response?.error) {
          toast({
            title: 'Something went wrong!',
            description: response.error,
            variant: 'destructive',
          })
        }
      })
    })
  }

  return (
    <Button
      className="flex flex-col justify-center bg-accent text-accent-foreground duration-500 ease-in-out hover:scale-[1.01] hover:bg-accent hover:shadow-accent-light"
      onClick={handleBuyNowClick}
      disabled={isPending}
    >
      {isPending ? (
        <l-mirage size={50} speed={3} color="#a917ce" />
      ) : (
        <div>{`Buy Now • ${formatPrice(priceInCents * quantity)}`}</div>
      )}
    </Button>
  )
}
