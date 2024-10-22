import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { cn } from '@/lib/utils'

type TextSectionLink = {
  linkText: string
  linkHref: string
}
interface TextSectionProps {
  text: string
  className?: string
  textClassName?: string
  linkInfo?: TextSectionLink
}

const TextSection = ({
  text,
  className,
  textClassName,
  linkInfo,
}: TextSectionProps) => {
  return (
    <main
      className={cn(
        'm-10 max-w-[60rem] rounded-xl bg-background p-5 text-base shadow-pink-light transition-all duration-1000 hover:scale-[1.01] hover:shadow-pink-strong dark:shadow-teal-light dark:hover:shadow-teal-strong sm:p-8 md:text-lg z-5 relative',
        className,
      )}
    >
      <div className={cn('text-center', textClassName)}>{text}</div>
      <div className="flex justify-end underline underline-offset-2">
        {linkInfo && (
          <div className="pt-2">
            <Link
              href={`${linkInfo.linkHref}`}
              className="flex w-fit items-center opacity-60 transition-all duration-300 hover:opacity-80"
            >
              {linkInfo.linkText}
              <ArrowUpRight
                size="18"
                className="align-self-middle ml-1 h-full"
              />
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}

export default TextSection
