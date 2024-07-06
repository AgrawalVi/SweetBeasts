import type { Metadata } from 'next'
import { Coiny, Nunito, Josefin_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

import { ShoppingCartProvider } from '@/hooks/use-shopping-cart'

import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import { Suspense } from 'react'
import NavigationEvents from '@/components/navigation-events'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
})

const coiny = Coiny({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-coiny',
})

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
})

export const metadata: Metadata = {
  title: 'SweetBeasts',
  description: 'Created by SweetBeasts, Inc',
  icons: {
    icon: '/icon.svg',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunito.variable} ${josefinSans.variable} ${coiny.variable}`}
      >
        <SessionProvider session={session}>
          <ShoppingCartProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="flex min-h-screen w-full bg-background">
                {children}
              </div>
              <link rel="icon" href="/favicon.ico" sizes="any" />
              <Toaster />
              <Suspense>
                <NavigationEvents />
              </Suspense>
            </ThemeProvider>
          </ShoppingCartProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
