import FloatingNavbar from '@/components/general/floating-navbar'

import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full">
      <FloatingNavbar />
      <div className="mt-20 h-full w-full">{children}</div>
    </div>
  )
}
