'use client'

import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'

import {
  CartItem as CartItemType,
  useShoppingCart,
} from '@/hooks/use-shopping-cart'

import { useToast } from '@/components/ui/use-toast'
import CartItemSkeleton from '@/components/skeletons/cart/cart-item-skeleton'
import CartQuantityButton from './cart-quantity-button'
import RemoveProductButton from './remove-product-button'

import { formatPrice } from '@/lib/utils'
import Link from 'next/link'
import { getProductByIdApi } from '@/lib/api'

const CartItem = ({ item }: { item: CartItemType }) => {
  const { toast } = useToast()
  const { setIsCartOpen } = useShoppingCart()

  const { data: product, isPending: productLoading } = useQuery({
    queryKey: ['product', item.productId],
    queryFn: async () => {
      const response = await getProductByIdApi(item.productId)
      console.log(response)
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
  })

  if (productLoading) {
    return <CartItemSkeleton />
  }

  return (
    <>
      {product && (
        <>
          <div className="hidden sm:block">
            <div className="grid w-full grid-cols-8 items-center space-x-6">
              <Image
                src={`${product.parentProduct.primaryProductImage}`}
                alt={`${product.variantProductName} image`}
                width={100}
                height={100}
                className="col-span-2 h-24 w-24 rounded-md"
              />
              <div className="col-span-3 flex flex-col">
                <Link
                  href={`${product.parentProduct.productHref}`}
                  onClick={() => setIsCartOpen(false)}
                >
                  {product.variantProductName}
                </Link>
                <div className="text-xs text-muted-foreground">
                  {product.variantDescription}
                </div>
                <CartQuantityButton item={item} />
              </div>
              <div className="inline-flex justify-end sm:col-span-2">
                {formatPrice(product.priceInCents)}
              </div>
              <RemoveProductButton item={item} />
            </div>
          </div>
          <div className="block sm:hidden">
            <div className="grid w-full grid-cols-5 items-center">
              <Image
                src={`${product.parentProduct.primaryProductImage}`}
                alt={`${product.variantProductName} image`}
                width={100}
                height={100}
                className="col-span-2 h-24 w-24 rounded-md"
              />
              <div className="col-span-2 flex h-full flex-col justify-between">
                <Link
                  href={`${product.parentProduct.productHref}`}
                  onClick={() => setIsCartOpen(false)}
                >
                  {product.parentProduct.name}
                </Link>
                <div className="text-xs text-muted-foreground">
                  {product.parentProduct.description}
                </div>
                <div className="flex h-full items-center">
                  <CartQuantityButton item={item} className="pt-0" />
                  <RemoveProductButton item={item} />
                </div>
              </div>
              <div className="inline-flex flex-col items-end justify-end">
                {formatPrice(product.priceInCents * item.quantity)}
                {item.quantity > 1 && (
                  <div className="text-xs text-muted-foreground">
                    {formatPrice(product.priceInCents)} ea
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default CartItem
