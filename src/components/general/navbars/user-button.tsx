import Link from 'next/link'
import { UserIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function UserButton() {
  return (
    <Link href="/account">
      <Button size="icon" variant="outline">
        <UserIcon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </Link>
  )
}
