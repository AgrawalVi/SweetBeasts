import FloatingNavbar from '@/components/general/navbars/floating-navbar'
import Footer from '@/components/sections/footer/footer'

import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-dot-black/[0.2] dark:bg-dot-white/[0.2]">
      <FloatingNavbar />
      <div className="relative flex h-full w-full flex-col">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
        <div className="mb-12 h-full w-full">{children}</div>
        <Footer />
      </div>
    </main>
  )
}
