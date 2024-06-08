'use client'

import { Suspense } from 'react'
import Checkout from '@/components/general/checkout/checkout'

const CheckoutPage = () => {
  // get client secret from search params, if no search params, then return error!

  return (
    <Suspense fallback="loading">
      <Checkout />
    </Suspense>
  )
}

export default CheckoutPage
