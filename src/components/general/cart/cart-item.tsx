import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import { getProductById } from '@/actions/products/products'

import { CartItem as CartItemType } from '@/hooks/use-shopping-cart'

import { useToast } from '@/components/ui/use-toast'
import CartItemSkeleton from '@/components/skeletons/cart-item-skeleton'
import CartQuantityButton from './cart-quantity-button'
import RemoveProductButton from './remove-product-button'

import pogo from '/public/product-images/pogo/main.jpg'
import blimpy from '/public/product-images/lemon-lion/main.jpg'
import { formatPrice } from '@/lib/utils'

const CartItem = ({ item }: { item: CartItemType }) => {
  const { toast } = useToast()

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
  })

  if (productLoading) {
    return <CartItemSkeleton />
  }

  return (
    <>
      {product && (
        <div className="flex w-full items-center space-x-6">
          <Image
            src={product.name.includes('pogo') ? pogo : blimpy}
            alt={`${product.name} image`}
            width={100}
            height={100}
            className="h-24 w-24 rounded-md"
          />
          <div className="flex flex-col">
            <div>{product.name}</div>
            <div className="text-xs text-muted-foreground">
              {product.description}
            </div>
          </div>
          <div>{formatPrice(product.priceInCents)}</div>
          <CartQuantityButton item={item} />
          <RemoveProductButton item={item} />
        </div>
      )}
    </>
  )
}

export default CartItem
