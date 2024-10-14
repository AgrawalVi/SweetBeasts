import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'

export default function RemoveProductButtonSkeleton() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="hover:bg-accent/20 hover:text-destructive"
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  )
}
