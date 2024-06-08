'use client'

import { CustomCheckoutProvider } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { stripe_pk } from '@/constants'
import CheckoutForm from '@/components/general/checkout/checkout-form'
import { useRouter, useSearchParams } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'

const stripe = loadStripe(stripe_pk, {
  betas: ['custom_checkout_beta_2'],
})

const CheckoutPage = () => {
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const router = useRouter()

  const clientSecret = searchParams.get('client_secret')

  if (!clientSecret) {
    toast({ description: 'Unable to start checkout', variant: 'destructive' })
    router.replace('/products/pogo')
    return null
  }

  return (
    <CustomCheckoutProvider stripe={stripe} options={{ clientSecret }}>
      <CheckoutForm />
    </CustomCheckoutProvider>
  )
}

export default CheckoutPage
