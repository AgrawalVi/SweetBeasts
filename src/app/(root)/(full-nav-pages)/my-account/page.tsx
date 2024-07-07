'use client'

import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useTransition } from 'react'

export default function MyAccount() {
  return (
    <>
      <Card className="w=[600px]">
        <CardHeader>
          <p className="text-center text-2xl font-semibold">Settings</p>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </>
  )
}
