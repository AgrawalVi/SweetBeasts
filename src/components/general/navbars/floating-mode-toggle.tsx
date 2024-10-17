'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export function FloatingModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      <span
        className={cn(
          'cursor-pointer transition-all hover:opacity-50',
          className,
        )}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {isMounted && (
          <>
            <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
          </>
        )}
      </span>
    </>
  )
}
