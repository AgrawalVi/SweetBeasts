import { cn } from "@/lib/utils"
import * as React from "react"

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-rose-500 to-transparent" />
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
          "relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black dark:text-neutral-300 rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        <BottomGradient />
      </button>
    )
  }
)

GradientButton.displayName = "GradientButton"

export default GradientButton
