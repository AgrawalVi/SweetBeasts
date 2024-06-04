import { useShoppingCart } from '@/hooks/use-shopping-cart'
import { Product } from '@prisma/client'
import { CartItem as CartItemType } from '@/hooks/use-shopping-cart'

import { getProductById } from '@/actions/products/products'
import { useEffect, useState, useTransition } from 'react'

import { useToast } from '@/components/ui/use-toast'
import CartItemSkeleton from '@/components/skeletons/cart-item-skeleton'
import { Button } from '@/components/ui/button'

const CartItem = ({ item }: { item: CartItemType }) => {
  const { toast } = useToast()
  const [isPending, startTransition] = useTransition()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [product, setProduct] = useState<Product | null>(null)
  const { addToCart, removeItemFromCart, decrementItemFromCart } =
    useShoppingCart()

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProductById(item.productId)
      if (product.error) {
        toast({
          description: "Couldn't receive some products from the cart",
          variant: 'destructive',
        })
        setError(product.error)
      } else if (product.success) {
        setProduct(product.success)
      }
    }
    fetchProduct().then(() => setLoading(false))
  }, [item])

  function removeProduct() {
    startTransition(() => {
      removeItemFromCart(item.productId)
    })
  }

  function decrementProduct() {
    startTransition(() => {
      decrementItemFromCart(item.productId)
    })
  }

  function incrementProduct() {
    startTransition(() => {
      addToCart({ productId: item.productId, quantity: 1 })
    })
  }

  return (
    <>
      {loading ? (
        <CartItemSkeleton />
      ) : (
        <>
          {product ? (
            <div>
              <div>{product?.name}</div>
              <div>{product?.priceInCents}</div>
              <div>{item.quantity}</div>
              <Button onClick={removeProduct} disabled={isPending}>
                Remove
              </Button>
              <Button onClick={decrementProduct} disabled={isPending}>
                Decrement
              </Button>
              <Button onClick={incrementProduct} disabled={isPending}>
                Increment
              </Button>
            </div>
          ) : null}
        </>
      )}
    </>
  )
}

export default CartItem
