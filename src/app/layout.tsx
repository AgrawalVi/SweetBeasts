import type { Metadata } from 'next'
import { Coiny, Josefin_Sans, Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

import { auth } from '@/auth'
import { SessionProvider } from 'next-auth/react'

import { NewsletterPopupProvider } from '@/hooks/use-popup'
import { ShoppingCartProvider } from '@/hooks/use-shopping-cart'
import NewsletterPopup from '@/components/general/newsletter-popup/popup'
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
  description: 'Luxurious Plushies Blending Fruits & Animals',
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
          <NewsletterPopupProvider>
            <NewsletterPopup />
            <ShoppingCartProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <div className="flex min-h-dvh w-full">{children}</div>
                <Analytics />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <Toaster />
                <NavigationEvents />
              </ThemeProvider>
            </ShoppingCartProvider>
          </NewsletterPopupProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
