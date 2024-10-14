'use client'

import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { useShoppingCart } from '@/hooks/use-shopping-cart'
import { useEffect, useTransition } from 'react'

interface AddToCartButtonProps {
  productId: number
  quantity: number
}

export default function AddToCartButton({
  productId,
  quantity,
}: AddToCartButtonProps) {
  const { addToCart, setIsCartOpen } = useShoppingCart()
  const { toast } = useToast()
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    async function getLoader() {
      const { mirage } = await import('ldrs')
      mirage.register()
    }
    getLoader()
  }, [])

  const handleAddToCart = () => {
    startTransition(() => {
      addToCart({
        productId,
        quantity,
      }).then((response) => {
        if (response.error) {
          toast({
            title: 'An error has occurred',
            description: response.error,
            variant: 'destructive',
          })
        } else {
          setIsCartOpen(true)
        }
      })
    })
  }

  return (
    <Button
      className="w-full duration-500 ease-in-out hover:scale-[1.01] hover:bg-primary hover:shadow-primary-light"
      onClick={handleAddToCart}
      disabled={isPending}
    >
      {isPending ? (
        <l-mirage size={50} speed={3} color="#a917ce" />
      ) : (
        <div>Add to Cart</div>
      )}
    </Button>
  )
}
