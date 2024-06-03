import { Product } from "@prisma/client"
import { CartItem as CartItemType } from "@/hooks/use-shopping-cart"

import { getProductById } from "@/actions/products/products"
import { useEffect, useState, Suspense } from "react"

import { useToast } from "@/components/ui/use-toast"
import CartItemSkeleton from "@/components/skeletons/cart-item-skeleton"

const CartItem = ({ item }: { item: CartItemType }) => {
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProductById(item.productId)
      if (product.error) {
        toast({description: "Couldn't receive some products from the cart", variant: "destructive"})
        setError(product.error)
      } else if (product.success) {
        setProduct(product.success)
      }
    }
    fetchProduct().then(() => setLoading(false))
  }, [item])

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
            </div>
          ) : null}
        </>
      )}
    </>
  )
}

export default CartItem
