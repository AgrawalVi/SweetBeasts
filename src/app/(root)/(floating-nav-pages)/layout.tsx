import FloatingNavbar from '@/components/general/navbars/floating-navbar'
import Footer from '@/components/sections/footer/footer'

import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col">
      <FloatingNavbar />
      <div className="mb-12 h-full w-full">{children}</div>
      <Footer />
    </div>
  )
}
