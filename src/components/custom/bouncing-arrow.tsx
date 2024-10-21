"use client"

import { CircleArrowDown } from 'lucide-react'

export default function BouncingArrowDown({
  className,
}: {
  className?: string
}) {
  return (
    <CircleArrowDown
      className={className}
      onClick={() =>
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
      }
    />
  )
}
