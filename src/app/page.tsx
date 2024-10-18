import { BackgroundBeams } from "@/components/aceternity/background-beams"
import { cn } from "@/lib/utils"

import JoinEmailListForm from "@/components/general/email-list/join-email-list-form"
import { Button } from "@/components/ui/button"
import {
  IconBrandInstagram,
  IconBrandDiscord,
  IconBrandTiktok,
} from "@tabler/icons-react"
import Link from "next/link"
import { HoverBorderGradient } from "@/components/aceternity/hover-border-gradient"
import { ModeToggle } from "@/components/ui/mode-toggle"

const discordUrl = 'https://discord.gg/sweetbeasts'
const instagramUrl = 'https://www.instagram.com/sweetbeastsusa'
const tiktokUrl = 'https://www.tiktok.com/@sweetbeasts'

export default function Home() {
  return (
    <main
      className={cn(
        "min-h-dvh w-screen relative flex flex-col items-center justify-center antialiased"
      )}
    >
      <ModeToggle className="absolute z-10 top-5 left-5" />
      <div className="max-w-[60rem] mx-auto space-y-4">
        <h1
          className={cn(
            "relative z-10 text-4xl md:text-7xl lg:text-9xl bg-clip-text text-transparent header-gradient text-center font-coiny drop-shadow-lg"
          )}
        >
          SweetBeasts
        </h1>
        <h1
          className={cn(
            "relative z-10 text-2xl md:text-4xl lg:text-6xl bg-clip-text text-transparent header-gradient text-center font-bold pb-2 font-coiny"
          )}
        >
          Coming Soon
        </h1>
        <p
          className={cn(
            "text-neutral-500 max-w-lg mx-auto my-2 text-sm md:text-base text-center relative z-10 px-5"
          )}
        >
          We've been working very hard to introduce SweetBeasts to the world.
          While we add the finishing touches to our website, we'd love to keep
          you in the loop.
        </p>
        <p
          className={cn(
            "text-neutral-500 max-w-lg mx-auto pb-2 mt-2 text-sm md:text-base text-center relative z-10"
          )}
        >
          Join our mailing list to be the first to know when we go live!
        </p>
        <JoinEmailListForm />
        <div className="w-full flex justify-center">
          <Link href="/about-us">
            <HoverBorderGradient
              className="z-10 w-40"
              containerClassName="md:absolute md:top-5 md:right-5"
            >
              Read About us
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
      <div className="absolute z-10 bottom-3 flex flex-col items-center space-y-3">
        <div className="flex flex-row space-x-5">
          <Link href={discordUrl} target="_blank" rel="noopener noreferrer">
            <Button size="icon" variant="outline">
              <IconBrandDiscord />
            </Button>
          </Link>
          <Link href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <Button size="icon" variant="outline">
              <IconBrandInstagram />
            </Button>
          </Link>
          <Link href={tiktokUrl} target="_blank" rel="noopener noreferrer">
            <Button size="icon" variant="outline">
              <IconBrandTiktok />
            </Button>
          </Link>
        </div>
        <div className="text-sm">
          {" "}
          © 2024 SweetBeasts. All rights reserved.
        </div>
      </div>
      <BackgroundBeams />
    </main>
  )
}
