import { Button } from '@/components/ui/button'
import { UserIcon } from 'lucide-react'
import Link from 'next/link'

export default function UserButton() {
  return (
    <Link href="/my-account">
      <Button size="icon" variant="outline">
        <UserIcon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </Link>
  )
}
