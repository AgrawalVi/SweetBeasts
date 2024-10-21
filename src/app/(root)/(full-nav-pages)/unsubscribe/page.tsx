import { UnsubscribeForm } from '@/components/general/pages/unsubscribe/unsubscribe-form'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Unsubscribe',
}

export default function UnsubscribePage() {
  return (
    <main className="flex h-full flex-grow items-center justify-center">
      <UnsubscribeForm />
    </main>
  )
}
