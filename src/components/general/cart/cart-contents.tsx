import CartItem from "./cart-item"
import { useShoppingCart } from "@/hooks/use-shopping-cart"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

const CartContents = () => {
  const { cart } = useShoppingCart()

  return (
    <>
      <div>Shopping Cart</div>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <Suspense key={item.productId} fallback={<div>Loading...</div>}>
              <CartItem item={item} />
            </Suspense>
          ))}
        </ul>
      ) : (
        <div>Your cart is empty</div>
      )}
    </>
  )
}

export default CartContents
