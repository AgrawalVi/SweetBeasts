'use client';
import { CardBody, CardContainer, CardItem } from "@/components/aceternity/3d-card";
import Image from 'next/image';
import { BackgroundBeams } from "@/components/aceternity/background-beams";
import { BackgroundGradient } from "@/components/aceternity/background-gradient";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start min-h-screen p-4 bg-[hsl(var(--background))] gap-4">
      
      <BackgroundGradient className="w-64 rounded-lg">

      <CardContainer className="w-64 rounded-lg bg-gradient-to-br from-bg-[#F08080] to-bg-[#ed9696] shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
        <CardBody className="relative group/card w-full h-auto rounded-xl p-4 border border-gray-200 bg-[#F08080]">
          <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white ">
            Make things float in air
          </CardItem>
          <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Hover over this card to unleash the power of CSS perspective
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
            <Image
              src="/pogo.jpg"
              width={150}
              height={150}
              className="object-cover rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-4">
            <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
              Buy Now
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      </BackgroundGradient>
      <div className="h-[40rem] w-full rounded-md bg-[hsl(var(--background))] relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl drop-shadow-md bg-clip-text text-transparent bg-gradient-to-b from-red-400 to-red-600  text-center font-sans font-bold">
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
    </div>
    </main>
  );
}
