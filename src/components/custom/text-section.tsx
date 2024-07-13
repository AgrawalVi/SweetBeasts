import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

type TextSectionLink = {
  linkText: string
  linkHref: string
}
interface TextSectionProps {
  text: string
  className?: string
  linkInfo?: TextSectionLink
}

const TextSection = ({ text, className, linkInfo }: TextSectionProps) => {
  return (
    <main
      className={cn(
        'm-10 max-w-[60rem] rounded-xl bg-background p-5 text-base shadow-pink-light transition-all duration-1000 hover:scale-[1.01] hover:shadow-pink-strong dark:shadow-teal-light dark:hover:shadow-teal-strong sm:p-10 md:text-lg',
        className,
      )}
    >
      <div className="text-center">{text}</div>
      <div className="text-start underline underline-offset-2 opacity-60 transition-all duration-300 hover:opacity-80">
        {linkInfo && (
          <>
            <Link href={linkInfo.linkHref} className="w-fit">
              <div className="flex items-center">
                {linkInfo.linkText}
                <ArrowUpRight
                  size="18"
                  className="align-self-middle ml-1 h-full"
                />
              </div>
            </Link>
          </>
        )}
      </div>
    </main>
  )
}

export default TextSection
