import HomeProductHero from '@/components/general/pages/home/heros/home-product-hero'
import HomeSweetbeastsMission from '@/components/general/pages/home/heros/home-sweetbeasts-mission'
import HomeWhySweetBeastsHero from '@/components/general/pages/home/heros/home-why-sweetbeasts'

export default function Home() {
   
  return (
    <main className="flex flex-col items-start justify-start bg-background">
      <HomeProductHero />
      <HomeSweetbeastsMission />
      <HomeWhySweetBeastsHero />
    </main>
  )
}
