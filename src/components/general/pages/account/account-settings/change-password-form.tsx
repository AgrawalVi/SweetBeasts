'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition, useState } from 'react'
import { useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { updatePassword } from '@/actions/auth/settings'
import { ChangePasswordSchema } from '@/schemas'
import { useCurrentUser } from '@/hooks/use-current-user'
import { useToast } from '@/components/ui/use-toast'
import { FormError } from '@/components/custom/form-error'

export const ChangePasswordForm = () => {
  const { update } = useSession()
  const user = useCurrentUser()
  const { toast } = useToast()

  const [error, setError] = useState<string | undefined>(undefined)

  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof ChangePasswordSchema>>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  })

  const onSubmit = (values: z.infer<typeof ChangePasswordSchema>) => {
    startTransition(() => {
      setError(undefined)
      updatePassword(values)
        .then((data) => {
          if (data.error) {
            setError(data.error)
            form.reset()
          }
          if (data.success) {
            update()
            toast({
              title: 'Settings updated!',
              description: 'Your password has been updated',
            })
            form.reset()
          }
        })
        .catch(() => {
          toast({
            title: 'An error has occurred!',
            description: 'Something went wrong',
            variant: 'destructive',
          })
          form.reset()
        })
    })
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col space-y-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-col space-y-4">
          <div className="flex w-full flex-col space-y-2">
            <FormLabel>Email</FormLabel>
            <Input value={user?.email as string} disabled />
            <FormDescription>
              Your email address cannot be changed
            </FormDescription>
          </div>
          <FormField
            control={form.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Current Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="sweetbeasts123"
                    type="password"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="sweetbeasts123"
                    type="password"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmNewPassword"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Confirm New Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="sweetbeasts123"
                    type="password"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormError message={error} />
        <Button type="submit" className="w-full" disabled={isPending}>
          Save Changes
        </Button>
      </form>
    </Form>
  )
}
