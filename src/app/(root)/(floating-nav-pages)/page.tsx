'use client'

import ProductCards from '@/components/sections/product-sections/product-cards'
import ExploreSection from '@/components/general/pages/home/explore-section'

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start gap-4 bg-background p-4">
      <ExploreSection />
    </main>
  )
}
