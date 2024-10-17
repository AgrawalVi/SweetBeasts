import Link from 'next/link'
import { DISCORD_URL, INSTAGRAM_URL, TIKTOK_URL } from '@/constants'
import {
  IconBrandDiscord,
  IconBrandInstagram,
  IconBrandTiktok,
} from '@tabler/icons-react'

import { Button } from '@/components/ui/button'

export default function SocialButton() {
  return (
    <div className="space-x-4 py-5">
      <Link href={`${DISCORD_URL}`} target="_blank" rel="noopener noreferrer">
        <Button size="icon" variant="outline">
          <IconBrandDiscord />
        </Button>
      </Link>
      <Link href={`${INSTAGRAM_URL}`} target="_blank" rel="noopener noreferrer">
        <Button size="icon" variant="outline">
          <IconBrandInstagram />
        </Button>
      </Link>
      <Link href={`${TIKTOK_URL}`} target="_blank" rel="noopener noreferrer">
        <Button size="icon" variant="outline">
          <IconBrandTiktok />
        </Button>
      </Link>
    </div>
  )
}
