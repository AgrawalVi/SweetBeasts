import type { Metadata } from "next"
import { Coiny, Nunito, Josefin_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const nunito = Nunito({ subsets: ["latin"] })

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
