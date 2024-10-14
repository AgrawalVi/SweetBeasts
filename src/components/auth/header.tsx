import { cn } from '@/lib/utils'

interface HeaderProps {
  label: string
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4">
      <h1 className="header-gradient text-4xl">SweetBeasts</h1>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  )
}
