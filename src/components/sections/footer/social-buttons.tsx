import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  IconBrandDiscord,
  IconBrandInstagram,
  IconBrandTiktok,
} from '@tabler/icons-react'

const discordUrl = process.env.NEXT_PUBLIC_DISCORD_URL!
const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL!
const tiktokUrl = process.env.NEXT_PUBLIC_TIKTOK_URL!

export default function SocialButton() {
  return (
    <div className="space-x-4 py-5">
      <Link href={discordUrl} target="_blank" rel="noopener noreferrer">
        <Button size="icon" variant="outline">
          <IconBrandDiscord />
        </Button>
      </Link>
      <Link href={instagramUrl} target="_blank" rel="noopener noreferrer">
        <Button size="icon" variant="outline">
          <IconBrandInstagram />
        </Button>
      </Link>
      <Link href={tiktokUrl} target="_blank" rel="noopener noreferrer">
        <Button size="icon" variant="outline">
          <IconBrandTiktok />
        </Button>
      </Link>
    </div>
  )
}
