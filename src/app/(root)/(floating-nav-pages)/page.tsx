import HomePageProductHero from '@/components/general/pages/home/heros/home-page-product-hero'
import HomePageWhySweetBeastsHero from '@/components/general/pages/home/heros/home-page-why-sweetbeasts'

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start bg-background">
      <HomePageProductHero />
      <HomePageWhySweetBeastsHero />
    </main>
  )
}
