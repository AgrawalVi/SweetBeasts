import { ReasonsForSweetBeastsGrid } from '../reasons-for-sweetbeasts-grid'

export default function HomePageWhySweetBeastsHero() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center py-20 bg-dot-black/20 dark:bg-dot-white/15">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>

      <div className="header-gradient text-4xl sm:text-5xl md:text-7xl">
        Why SweetBeasts
      </div>
      {/* Add a divider line here */}
      <div className="mx-auto mt-2 h-1 w-20 rounded-3xl bg-muted-foreground"></div>
      <ReasonsForSweetBeastsGrid />
    </div>
  )
}
