import { CardBody, CardContainer, CardItem } from "@/components/aceternity/3d-card";
import Image from 'next/image';
import { BackgroundBeams } from "@/components/aceternity/background-beams";
import { BackgroundGradient } from "@/components/aceternity/background-gradient";

export default function Home() {
  return (
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
    </main>
  );
}
