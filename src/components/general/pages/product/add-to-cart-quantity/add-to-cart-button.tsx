'use client'

import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { useShoppingCart } from '@/hooks/use-shopping-cart'
import { formatPrice } from '@/lib/utils'

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

  const handleAddToCart = async () => {
    const response = await addToCart({
      productId,
      quantity,
    })
    if (response.error) {
      toast({
        title: 'An error has occurred',
        description: response.error,
        variant: 'destructive',
      })
    } else {
      setIsCartOpen(true)
    }
  }

  return (
    <Button
      className="w-full duration-500 ease-in-out hover:scale-[1.01] hover:bg-primary hover:text-[0.9rem] hover:shadow-primary-light"
      onClick={handleAddToCart}
    >
      Add to Cart
    </Button>
  )
}
