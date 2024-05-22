import { BackgroundBeams } from "@/components/aceternity/background-beams";

export default function MailingComponent() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-[hsl(var(--background))] relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl drop-shadow-md bg-clip-text text-transparent bg-gradient-to-b from-red-400 to-red-600 text-center font-sans font-bold">
            Join Our Mailing List
          </h1>
          <p className="text-red-800 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Want to be the first to hear about new drops or what is in stock? Join our mailing list and you will know exactly when new plushies will be released!
          </p>
          <input
            type="text"
            placeholder="Email"
            className="rounded-lg border border-red-800 focus:ring-2 focus:ring-pink-500 w-full relative z-10 mt-4 bg-card placeholder:text-neutral-700"
          /> 
        </div>
        <BackgroundBeams />
      </div>
  );
}