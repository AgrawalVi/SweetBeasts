'use client'

import { Button } from '@/components/ui/button'

export default function ResendOrderConfirmationButton({
  orderNumber,
}: {
  orderNumber: string
}) {
  return (
    <Button
      onClick={() => {
        console.log('resend order confirmation')
      }}
    >
      Resend Order Confirmation
    </Button>
  )
}
