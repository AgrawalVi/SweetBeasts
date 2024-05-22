<<<<<<< HEAD
'use client';


import MailingComponent from "@/components/mailinglist.tsx/mailing";
import ProductCards from "@/components/products/product-cards";
import { InfiniteCards } from "@/components/reviews/scrollingreviews";
=======
"use client"

import { BackgroundBeams } from "@/components/aceternity/background-beams"
import { Input } from "@/components/aceternity/input"
import {ModeToggle} from "@/components/ui/mode-toggle"
import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"
import { addToEmailList } from "@/actions/email-list"

import { Josefin_Sans, Nunito } from "next/font/google"
import GradientButton from "@/components/aceternity/gradient-button"

const josefinSans = Josefin_Sans({ subsets: ["latin"] })
const nunito = Nunito({ subsets: ["latin"] })


export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted")
  }
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black z-50">
      <form className="my-8" onSubmit={handleSubmit}></form>
    </div>
  )
}


>>>>>>> b6784e7b68896ff353a9d00203dbdd8098a80e23

export default function Home() {
  const [email, setEmail] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addToEmailList(email)
    console.log("form contents: ", email)
  }

  return (
<<<<<<< HEAD
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
=======
    <main
      className={cn(
        "h-screen w-screen bg-neutral-950 relative flex flex-col items-center justify-center antialiased",
        josefinSans.className
      )}
    >
      <div className="absolute top-4 right-4 z-10">
        <ModeToggle className="z-20 relative" />
      </div>
      <div className="max-w-[50rem] mx-auto space-y-4">
        <h1 className="relative z-10 text-4xl md:text-9xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          SweetBeasts
>>>>>>> b6784e7b68896ff353a9d00203dbdd8098a80e23
        </h1>
        <h1 className="relative z-10 text-xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold pb-2">
          Coming Soon
        </h1>
        <p
          className={cn(
            "text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10",
            nunito.className
          )}
        >
          We've been working very hard to introduce SweetBeasts to the world.
          While we add the finishing touches to our website, we'd love to keep
          you in the loop.
        </p>
        <p
          className={cn(
            "text-neutral-500 max-w-lg mx-auto pb-2 mt-2 text-sm text-center relative z-10",
            nunito.className
          )}
        >
          Join our mailing list to be the first to know when we go live!
        </p>
        <form className="flex flex-col place-items-center justify-center w-full" onSubmit={handleSubmit}>
          <div className="w-full flex justify-center">
            <Input
              type="text"
              placeholder="welcome@sweetbeasts.shop"
              className="w-[40rem] relative z-10 bg-neutral-950 placeholder:text-neutral-400 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <GradientButton className='relative z-10 w-40 flex justify-center mt-5' type="submit">Sign Up</GradientButton>
        </form>
      </div>
      <BackgroundBeams />
>>>>>>> 7c99fdafec5a54541b178716f94ef10607e526f4
    </main>
<<<<<<< HEAD
  );
}
=======
  )
}
>>>>>>> b6784e7b68896ff353a9d00203dbdd8098a80e23
