import { ReasonsForSweetBeastsGrid } from '../reasons-for-sweetbeasts-grid'

export default function HomeWhySweetBeastsHero() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center py-20">
      <div className="header-gradient text-4xl sm:text-5xl md:text-7xl">
        Why SweetBeasts
      </div>
      <div className="mx-auto mt-2 h-1 w-20 rounded-3xl bg-muted-foreground"></div>
      <ReasonsForSweetBeastsGrid />
    </div>
  )
}
