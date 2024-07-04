'use client'

import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Footer from '@/components/sections/footer/footer'

const queryClient = new QueryClient()

export default function RootClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-full w-full">{children}</div>
    </QueryClientProvider>
  )
}
