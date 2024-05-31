'use client'

import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { settings } from "@/actions/settings"
import { useTransition } from "react"

export default function MyAccount() {

  const [isPending, startTransition] = useTransition()

  const onClick = () => {
    startTransition(() => {
      settings({name: "New Name!"})
    })
  }

  return (
    <>
      <Card className="w=[600px]">
        <CardHeader>
          <p className="text-2xl font-semibold text-center">
            Settings
          </p>
        </CardHeader>
        <CardContent>
          <Button disabled={isPending} onClick={onClick}>
            Update Button
          </Button>
        </CardContent>
      </Card>
    </>
  )
}
