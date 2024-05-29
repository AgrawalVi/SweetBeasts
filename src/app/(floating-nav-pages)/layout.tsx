import FloatingNavbar from "@/components/general/floating-navbar"

import React from "react"

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full">
      <FloatingNavbar />
      <div className="w-full h-full mt-20">{children}</div>
    </div>
  )
}
