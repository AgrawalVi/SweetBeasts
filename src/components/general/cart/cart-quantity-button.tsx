'use client'

import { useMutation } from '@tanstack/react-query'
import { Minus, Plus } from 'lucide-react'

import { cn } from '@/lib/utils'
import { CartItem, useShoppingCart } from '@/hooks/use-shopping-cart'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

export default function CartQuantityButton({
  item,
  className,
}: {
  item: CartItem
  className?: string
}) {
  const { addToCart, decrementItemFromCart } = useShoppingCart()
  const { toast } = useToast()

  const { mutate: decrementProduct, isPending: decrementProductPending } =
    useMutation({
      mutationKey: ['decrement-product-from-cart', item.productId],
      mutationFn: async () => {
        const response = await decrementItemFromCart(item.productId)
        if (response.error) {
          toast({
            title: 'An error has occurred',
            description: response.error,
            variant: 'destructive',
          })
          throw new Error(response.error)
        } else {
          return response.success
        }
      },
    })

  const { mutate: incrementProduct, isPending: incrementProductPending } =
    useMutation({
      mutationKey: ['increment-product', item.productId],
      mutationFn: async () => {
        const response = await addToCart({
          productId: item.productId,
          quantity: 1,
        })
        if (response.error) {
          toast({
            title: 'An error has occurred',
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
    <div className={cn('flex items-center space-x-2 pt-2', className)}>
      <div className="flex h-full items-center justify-between space-x-1 rounded-md border">
        <Button
          variant="ghost"
          size="sm"
          className="hover:bg-background hover:text-foreground/40"
          disabled={decrementProductPending}
          onClick={() => decrementProduct()}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="text-sm font-semibold">{item.quantity}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => incrementProduct()}
          disabled={incrementProductPending}
          className="hover:bg-background hover:text-foreground/40"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
