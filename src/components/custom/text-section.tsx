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
      <div className={cn("bg-background rounded-xl max-w-[60rem] text-base md:text-lg text-center p-5 sm:p-10 m-10 shadow-pink-light dark:shadow-teal-light hover:shadow-pink-strong dark:hover:shadow-teal-strong transition-all hover:scale-[1.03] duration-1000", className)}>
        {text}
      </div>
    </>
  )
}

export default TextSection
