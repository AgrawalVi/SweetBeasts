'use client'

import { CustomCheckoutProvider } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { stripe_pk } from '@/constants'
import CheckoutForm from '@/components/general/checkout/checkout-form'
import { useRouter, useSearchParams } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { useEffect, useState } from 'react'
import { useShoppingCart } from '@/hooks/use-shopping-cart'
import { createCheckoutSession } from '@/actions/stripe/checkout'

const stripe = loadStripe(stripe_pk, {
  betas: ['custom_checkout_beta_2'],
})

const CheckoutPage = () => {
  const { toast } = useToast()
  const router = useRouter()
  const { cart, setIsCartOpen } = useShoppingCart()
  const [clientSecret, setClientSecret] = useState<string | undefined>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsCartOpen(false)
    if (!cart || cart.length === 0) {
      toast({ description: 'No items in cart', variant: 'destructive' })
      router.push('/products/pogo')
      return
    }

    const fetchSearchParams = async () => {
      const response = await createCheckoutSession(cart)
      if (response.error) {
        console.error(response.error)
        toast({
          title: 'Error',
          description: 'Unable to create checkout session',
          variant: 'destructive',
        })
        router.push('/products/pogo')
      } else {
        setClientSecret(response.success)
      }
    }

    fetchSearchParams().then(() => setLoading(false))
  }, [])

  if (loading) {
    return <div>Loading...</div>
  } else if (!loading && clientSecret) {
    return (
      <CustomCheckoutProvider stripe={stripe} options={{ clientSecret }}>
        <CheckoutForm />
      </CustomCheckoutProvider>
    )
  } else {
    toast({
      title: 'Error',
      description: 'Unable to create checkout session',
      variant: 'destructive',
    })
    router.push('/products/pogo')
  }
}

export default CheckoutPage
