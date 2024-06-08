import React from 'react'
import { useCustomCheckout } from '@stripe/react-stripe-js'

const CheckoutForm = () => {
  const checkout = useCustomCheckout()
  console.log(checkout)

  return <pre>{JSON.stringify(checkout.lineItems, null, 2)}</pre>
}

export default CheckoutForm
