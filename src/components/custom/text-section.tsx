import { cn } from "@/lib/utils"

const TextSection = ({
  text,
  className = "",
}: {
  text: string
  className?: string
}) => {
  return (
    <>
      <div className={cn("bg-background rounded-xl max-w-[60rem] text-base md:text-lg text-center p-5 sm:p-10 m-10 shadow-teal-light dark:shadow-pink-light hover:shadow-teal-strong dark:hover:shadow-pink-strong transition-all hover:scale-[1.01] duration-1000", className)}>
        {text}
      </div>
    </>
  )
}

export default TextSection
