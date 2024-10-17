'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

interface BackButtonProps {
  href: string
  label: string
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button
      variant="link"
      className="w-full font-normal text-foreground"
      size="sm"
      asChild
    >
      <Link href={`${href}`} passHref>
        {label}
      </Link>
    </Button>
  )
}
