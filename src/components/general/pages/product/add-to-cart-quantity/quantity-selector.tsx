import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Minus, Plus } from 'lucide-react'

interface QuantitySelectorProps {
  quantity: number
  setQuantity: (quantity: number) => void
  className?: string
}

export default function QuantitySelector({
  quantity,
  setQuantity,
  className,
}: QuantitySelectorProps) {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <div className="flex h-full items-center justify-between space-x-1 rounded-md border">
        <Button
          variant="ghost"
          size="sm"
          className="hover:bg-background hover:text-foreground/40"
          onClick={() => setQuantity(Math.max(quantity - 1, 1))}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="text-sm font-semibold">{quantity}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setQuantity(quantity + 1)}
          className="hover:bg-background hover:text-foreground/40"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
