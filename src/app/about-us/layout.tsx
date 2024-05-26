import { ModeToggle } from "@/components/ui/mode-toggle"
import Link from "next/link"
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Layout({   children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <header className="p-3 md:p-5 sticky top-0 z-[1000] bg-background border-b border-b-neutral-300 dark:border-b-neutral-800">
        <div className="flex justify-between">
          <ModeToggle />
          <div className="text-5xl font-coiny text-cyan-600 dark:text-rose-400">About Us</div>
          <Link href="/">
            <Button variant="outline" size="icon">
              <Home />
            </Button>
          </Link>
        </div>
      </header>
      {children}
    </div>
  )
}
