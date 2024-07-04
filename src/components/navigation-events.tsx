'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useShoppingCart } from '@/hooks/use-shopping-cart'

export default function NavigationEvents() {
  const { cart, isCartOpen, setIsCartOpen } = useShoppingCart()
  const pathName = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  // close the cart when the user navigates to a different page
  // 
  useEffect(() => {
    if (searchParams.get('cartOpen') === 'true') {
      setIsCartOpen(true)
      router.replace(pathName)
      return
    }
    setIsCartOpen(false)
  }, [pathName])

  return null
}