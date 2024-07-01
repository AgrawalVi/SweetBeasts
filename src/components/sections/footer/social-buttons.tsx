import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  IconBrandDiscord,
  IconBrandInstagram,
  IconBrandTiktok,
} from '@tabler/icons-react'

export default function SocialButton() {
  return (
    <div className="space-x-4 py-5">
      <Link
        href="https://discord.gg/fFQ9evv7aA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="icon" variant="outline">
          <IconBrandDiscord />
        </Button>
      </Link>
      <Link
        href="https://www.instagram.com/sweetbeastsshop"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="icon" variant="outline">
          <IconBrandInstagram />
        </Button>
      </Link>
      <Link
        href="https://www.tiktok.com/@sweetbeasts"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="icon" variant="outline">
          <IconBrandTiktok />
        </Button>
      </Link>
    </div>
  )
}
