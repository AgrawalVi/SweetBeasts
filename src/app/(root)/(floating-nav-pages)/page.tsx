import HomeProductHero from '@/components/general/pages/home/heros/home-product-hero'
import HomeSweetbeastsMission from '@/components/general/pages/home/heros/home-sweetbeasts-mission'
import HomeWhySweetBeastsHero from '@/components/general/pages/home/heros/home-why-sweetbeasts'

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start bg-background">
      <HomeProductHero />
      <div className="relative w-full items-center bg-dot-black/20 dark:bg-dot-white/15">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <HomeSweetbeastsMission />
        <HomeWhySweetBeastsHero />
      </div>
    </main>
  )
}
