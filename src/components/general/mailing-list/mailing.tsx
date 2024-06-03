import { BackgroundBeams } from '@/components/aceternity/background-beams'

export default function MailingComponent() {
  return (
    <div className="relative flex h-[40rem] w-full flex-col items-center justify-center rounded-md bg-[hsl(var(--background))] antialiased">
      <div className="mx-auto max-w-2xl p-4">
        <h1 className="relative z-10 bg-gradient-to-b from-red-400 to-red-600 bg-clip-text text-center font-sans text-lg font-bold text-transparent drop-shadow-md md:text-7xl">
          Join Our Mailing List
        </h1>
        <p className="relative z-10 mx-auto my-2 max-w-lg text-center text-sm text-red-800">
          Want to be the first to hear about new drops or what is in stock? Join
          our mailing list and you will know exactly when new plushies will be
          released!
        </p>
        <input
          type="text"
          placeholder="Email"
          className="relative z-10 mt-4 w-full rounded-lg border border-red-800 bg-card placeholder:text-neutral-700 focus:ring-2 focus:ring-pink-500"
        />
      </div>
      <BackgroundBeams />
    </div>
  )
}
