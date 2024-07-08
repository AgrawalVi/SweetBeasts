'use client'

import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'

export default function CartQuantityButtonSkeleton({
  className,
}: {
  className?: string
}) {
  return (
    <div className={cn('flex items-center space-x-2 pt-2', className)}>
      <div className="flex h-full items-center justify-between space-x-1 rounded-md border">
        <Button
          variant="ghost"
          size="sm"
          className="hover:bg-background hover:text-foreground/40"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="text-sm font-semibold">
          <Skeleton className="h-5 w-5" />
        </span>
        <Button
          variant="ghost"
          size="sm"
          className="hover:bg-background hover:text-primary"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
