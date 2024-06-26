import { useShoppingCart } from '@/hooks/use-shopping-cart'
import { Product } from '@prisma/client'
import { CartItem as CartItemType } from '@/hooks/use-shopping-cart'

import { getProductById } from '@/actions/products/products'
import { useEffect, useState, useTransition } from 'react'

import { useToast } from '@/components/ui/use-toast'
import CartItemSkeleton from '@/components/skeletons/cart-item-skeleton'
import { Button } from '@/components/ui/button'

import { useQuery, useMutation } from '@tanstack/react-query'

const CartItem = ({ item }: { item: CartItemType }) => {
  const { toast } = useToast()

  const { addToCart, removeItemFromCart, decrementItemFromCart } =
    useShoppingCart()

  const { data: product, isPending: productLoading } = useQuery({
    queryKey: ['product', item.productId],
    queryFn: async () => {
      const response = await getProductById(item.productId)
      if (response.error) {
        toast({
          title: 'An error has occurred while fetching cart items',
          description: response.error,
          variant: 'destructive',
        })
        throw new Error(response.error)
      }
      return response.success
    },
    enabled: !!item.productId,
  })

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

  const { mutate: decrementProduct, isPending: decrementProductPending } =
    useMutation({
      mutationKey: ['decrement-product-from-cart', item.productId],
      mutationFn: async () => {
        const response = await decrementItemFromCart(item.productId)
        if (response.error) {
          toast({
            title:
              "An error has occurred while decrementing a product's quantity from the cart",
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
            title:
              "An error has occurred while incrementing a product's quantity in the cart",
            description: response.error,
            variant: 'destructive',
          })
          throw new Error(response.error)
        } else {
          return response.success
        }
      },
    })

  if (productLoading) {
    return <CartItemSkeleton />
  }

  return (
    <>
      {product ? (
        <div>
          <div>{product?.name}</div>
          <div>{product?.priceInCents}</div>
          <div>{item.quantity}</div>
          <Button
            onClick={() => removeProduct()}
            disabled={removeProductPending}
          >
            Remove
          </Button>
          <Button
            onClick={() => decrementProduct()}
            disabled={decrementProductPending}
          >
            Decrement
          </Button>
          <Button
            onClick={() => incrementProduct()}
            disabled={incrementProductPending}
          >
            Increment
          </Button>
        </div>
      ) : null}
    </>
  )
}

export default CartItem
