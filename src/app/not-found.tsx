import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-grow flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl">404 - PAGE NOT FOUND</h2>
      <p>This page does not exist</p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  )
}
