import type { Metadata } from "next"
import { Coiny, Nunito, Josefin_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Navbar } from "@/components/general/navbar"
import { ShoppingCartProvider } from "@/context/shopping-cart-context"
import { SessionProvider } from "next-auth/react"
import { auth } from "@/auth"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
})

const coiny = Coiny({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-coiny",
})

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
})

export const metadata: Metadata = {
  title: "SweetBeasts",
  description: "Created by SweetBeasts, Inc",
  icons: {
    icon: "/favicon.ico",
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${nunito.variable} ${josefinSans.variable} ${coiny.variable}`}
        >
          <ShoppingCartProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="flex w-full h-full bg-background">{children}</div>
              <link rel="icon" href="/favicon.ico" sizes="any" />
              <Toaster />
            </ThemeProvider>
          </ShoppingCartProvider>
        </body>
      </html>
    </SessionProvider>
  )
}
