export default function LimitedSupplyBuyNow() {
  return (
    <div className="relative my-2 flex w-full justify-center">
      <div className="absolute left-4 top-1/2 size-2 -translate-y-1/2 transform animate-pulse rounded-full bg-accent-foreground/70 duration-1000 dark:bg-accent" />
      <div className="absolute left-[14px] top-1.5 size-3 transform animate-ping rounded-full bg-accent-foreground dark:bg-accent" />
      <div className="font-bold">LIMITED SUPPLY - BUY NOW</div>
    </div>
  )
}
