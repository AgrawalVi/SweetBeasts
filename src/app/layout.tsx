import type { Metadata } from "next"
import { Coiny, Nunito, Josefin_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
  description: "Luxurious Plushies Blending Fruits & Animals",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} ${josefinSans.variable} ${coiny.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
