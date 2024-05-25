"use client"

import { BackgroundBeams } from "@/components/aceternity/background-beams"
import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"
import { addToEmailList } from "@/actions/email-list"

import { Josefin_Sans, Nunito, Coiny } from "next/font/google"
import JoinEmailListForm from "@/components/general/email-list/join-email-list-form"
import localFont from 'next/font/local'

const josefinSans = Josefin_Sans({ subsets: ["latin"] })
const nunito = Nunito({ subsets: ["latin"] })
const coiny = Coiny({ subsets: ["latin"], weight: '400' })


export default function Home() {
  const [email, setEmail] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {}, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addToEmailList(email)
    console.log("form contents: ", email)
  }

  return (
    <main
      className={cn(
        "h-screen w-screen bg-neutral-950 relative flex flex-col items-center justify-center antialiased",
        josefinSans.className
      )}
    >
      <div className="max-w-[60rem] mx-auto space-y-4">
        <h1 className={cn("relative z-10 text-4xl md:text-9xl bg-clip-text text-transparent bg-gradient-to-br from-rose-300 to-rose-700 text-center font-sans", coiny.className)}>
          SweetBeasts
        </h1>
        <h1 className={cn("relative z-10 text-2xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-rose-200 to-rose-600 text-center font-sans font-bold pb-2", coiny.className)}>
          Coming Soon
        </h1>
        <p
          className={cn(
            "text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10 px-5",
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
        <JoinEmailListForm />
      </div>
      <BackgroundBeams />
    </main>
  )
}
