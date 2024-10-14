import FloatingNavbar from '@/components/general/navbars/floating-navbar'
import Footer from '@/components/sections/footer/footer'

import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FloatingNavbar />
      <div className="flex h-full w-full flex-col">
        {/*<div className="grid h-dvh w-full flex-grow grid-rows-[1fr_auto] justify-center align-middle">*/}
        <div className="mb-12 h-full w-full">{children}</div>
        <Footer />
        {/*</div>*/}
      </div>
    </>
  )
}
