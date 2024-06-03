import { cn } from '@/lib/utils'

const TextSection = ({
  text,
  className = '',
}: {
  text: string
  className?: string
}) => {
  return (
    <>
      <div
        className={cn(
          'm-10 max-w-[60rem] rounded-xl bg-background p-5 text-center text-base shadow-pink-light transition-all duration-1000 hover:scale-[1.03] hover:shadow-pink-strong dark:shadow-teal-light dark:hover:shadow-teal-strong sm:p-10 md:text-lg',
          className,
        )}
      >
        {text}
      </div>
    </>
  )
}

export default TextSection
