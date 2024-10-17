import { useTransition } from 'react'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'

import { formatPrice } from '@/lib/utils'
import { useShoppingCart } from '@/hooks/use-shopping-cart'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useToast } from '@/components/ui/use-toast'
import { getTotalCartPrice } from '@/actions/customer/cart'
import { createCheckoutSession } from '@/actions/stripe/checkout'

import CartItem from './cart-item'

const CartContents = () => {
  const { cart } = useShoppingCart()
  const guestId = Cookies.get('guestId')
  const { toast } = useToast()
  const [isCheckoutPending, startTransition] = useTransition()

  const {
    data: totalPrice,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['total-price', cart],
    queryFn: async () => {
      const response = await getTotalCartPrice(cart)
      if (response.error) {
        throw new Error(response.error)
      }
      return response.success
    },
  })

  const handleCheckout = () => {
    startTransition(() => {
      createCheckoutSession(cart, guestId).then((response) => {
        if (response?.error) {
          toast({
            title: 'An error has occurred',
            description: response.error,
            variant: 'destructive',
          })
        }
      })
    })
  }

  return (
    <main className="flex h-full w-full flex-col items-center justify-between space-y-4 pt-4">
      {cart.length > 0 ? (
        <ul className="space-y-4 border-b border-muted-foreground pb-5">
          {cart.map((item) => (
            <CartItem key={item.productId} item={item} />
          ))}
        </ul>
      ) : (
        <div>Your cart is empty</div>
      )}
      <div className="flex flex-col items-center justify-center">
        <div className="pb-2 text-sm">
          <div className="mb-2 flex w-full justify-between text-lg">
            <div>Subtotal</div>
            <div>
              {isPending ? (
                <Skeleton className="h-7 w-16" />
              ) : (
                totalPrice && formatPrice(totalPrice)
              )}
            </div>
          </div>
          Shipping and taxes will be estimated at checkout
        </div>
        <Button
          className="flex w-full"
          onClick={handleCheckout}
          disabled={!cart.length || isCheckoutPending}
        >
          Proceed To Checkout
        </Button>
      </div>
    </main>
  )
}

export default CartContents
