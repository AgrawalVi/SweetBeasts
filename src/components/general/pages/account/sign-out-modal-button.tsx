'use client'

import { signOut } from 'next-auth/react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { logout } from '@/actions/auth/logout'

export default function SignOutModalButton({
  className,
}: {
  className?: string
}) {
  const handleSignOut = async () => {
    await logout()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            'absolute right-5 top-4 dark:bg-destructive/80 dark:hover:bg-destructive/60',
            className,
          )}
          variant="destructive"
        >
          Sign Out
        </Button>
      </DialogTrigger>
      <DialogOverlay className="bg-black/60" />
      <DialogContent className="flex w-fit flex-col px-10">
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <div className="flex w-full justify-between space-x-5">
          <DialogClose asChild>
            <Button
              variant="outline"
              className="border border-muted-foreground"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button variant="destructive" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
