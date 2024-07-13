import TextSection from '@/components/custom/text-section'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function LoreTeaser() {
  return (
    <div className="flex flex-col">
      <div className="header-gradient text-center text-5xl sm:text-6xl md:text-7xl">
        Pogo's Story
      </div>
      <div>
        <TextSection
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          linkInfo={{
            linkText: 'Read more here',
            linkHref: '/lore/pogo',
          }}
        />
      </div>
    </div>
  )
}
