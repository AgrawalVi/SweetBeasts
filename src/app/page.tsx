'use client';


import MailingComponent from "@/components/mailinglist.tsx/mailing";
import ProductCards from "@/components/products/product-cards";
import { InfiniteCards } from "@/components/reviews/scrollingreviews";

export default function Home() {
  return (
<<<<<<< HEAD
    <main className="flex flex-col items-start justify-start min-h-screen p-4 bg-[hsl(var(--background))] gap-4">
      <ProductCards />
      <InfiniteCards />
      <MailingComponent />
=======
    <main className="flex h-screen place-items-center bg-gray-800">
      <div className="max-w-2xl mx-auto p-4">
      <h1 className="relative z-10 text-lg md:text-7xl drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-b from-red-400 to-red-600  text-center font-sans font-bold mb-8">
          Sweetbeasts
        </h1>
        <h1 className="relative z-10 text-lg md:text-5xl drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-b from-red-400 to-red-600  text-center font-sans font-bold mb-50">
          Join Our Mailing List
        </h1>
        <p></p>
        <p className="text-red-800 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Want to be the first to hear about new drops or what is in stock? Join our mailing list and you will know exactly when new plushies will be released!
        </p>
        <input
          type="text"
          placeholder="Email"
          className="rounded-lg border border-red-800 focus:ring-2 focus:ring-pink-500  w-full relative z-10 mt-4  bg-card placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
>>>>>>> 7c99fdafec5a54541b178716f94ef10607e526f4
    </main>
  );
}