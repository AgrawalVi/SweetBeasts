import { useMutation } from '@tanstack/react-query'
import { Trash2 } from 'lucide-react'

import { CartItem, useShoppingCart } from '@/hooks/use-shopping-cart'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

export default function RemoveProductButton({ item }: { item: CartItem }) {
  const { removeItemFromCart } = useShoppingCart()
  const { toast } = useToast()

  const { mutate: removeProduct, isPending: removeProductPending } =
    useMutation({
      mutationKey: ['remove-product-from-cart', item.productId],
      mutationFn: async () => {
        const response = await removeItemFromCart(item.productId)
        if (response.error) {
          toast({
            title:
              'An error has occurred while removing a product from the cart',
            description: response.error,
            variant: 'destructive',
          })
          throw new Error(response.error)
        } else {
          return response.success
        }
      },
    })

  return (
    <Button
      variant="ghost"
      size="icon"
      className="hover:bg-accent/20 hover:text-destructive"
      onClick={() => removeProduct()}
      disabled={removeProductPending}
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  )
}
