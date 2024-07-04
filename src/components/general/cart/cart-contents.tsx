import CartItem from './cart-item'
import { useShoppingCart } from '@/hooks/use-shopping-cart'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { useCurrentUser } from '@/hooks/use-current-user'
import { useToast } from '@/components/ui/use-toast'
import { createCheckoutSession } from '@/actions/stripe/checkout'
import { Button } from '@/components/ui/button'

const CartContents = () => {
  const { cart, isCartOpen, setIsCartOpen } = useShoppingCart()
  const router = useRouter()
  const guestId = Cookies.get('guestId')
  const user = useCurrentUser()
  const { toast } = useToast()

  const handleCheckout = async () => {
    // await
    const response = await createCheckoutSession(cart, guestId, user?.id)
    if (response?.error) {
      toast({
        title: 'An error has occurred',
        description: response.error,
        variant: 'destructive',
      })
    }
  }

  return (
    <main className="flex h-full w-full flex-col items-center justify-between space-y-4 pt-4">
      {cart.length > 0 ? (
        <ul className='space-y-4'>
          {cart.map((item) => (
            <CartItem key={item.productId} item={item} />
          ))}
        </ul>
      ) : (
        <div>Your cart is empty</div>
      )}
      <div className="flex flex-col items-center justify-center">
        <Button
          className="flex w-full"
          onClick={handleCheckout}
          disabled={!cart.length}
        >
          Proceed To Checkout
        </Button>
      </div>
    </main>
  )
}

export default CartContents
