import * as React from 'react'

import { cn } from '@/lib/utils'

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-[2px] w-full bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-[2px] w-1/2 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  )
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const GradientButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          'group/btn relative flex h-10 items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:text-neutral-300 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
        <BottomGradient />
      </button>
    )
  },
)

GradientButton.displayName = 'GradientButton'

export default GradientButton
