'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { updateName } from '@/actions/auth/settings'
import { ChangeNameSchema } from '@/schemas'
import { useCurrentUser } from '@/hooks/use-current-user'
import { useToast } from '@/components/ui/use-toast'

export const ChangeNameForm = () => {
  const { update } = useSession()
  const user = useCurrentUser()
  const { toast } = useToast()

  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof ChangeNameSchema>>({
    resolver: zodResolver(ChangeNameSchema),
    defaultValues: {
      firstName: user?.firstName || undefined,
      lastName: user?.lastName || undefined,
    },
  })

  const onSubmit = (values: z.infer<typeof ChangeNameSchema>) => {
    startTransition(() => {
      updateName(values)
        .then((data) => {
          if (data.error) {
            toast({
              title: 'An error has occurred!',
              description: data.error,
              variant: 'destructive',
            })
          }
          if (data.success) {
            update()
            toast({
              title: 'Settings updated!',
              description: 'Your settings have been updated',
            })
          }
        })
        .catch(() => {
          toast({
            title: 'An error has occurred!',
            description: 'Something went wrong',
            variant: 'destructive',
          })
        })
    })
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col space-y-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex w-full space-x-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="John" disabled={isPending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Doe" disabled={isPending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full" disabled={isPending}>
          Save Changes
        </Button>
      </form>
    </Form>
  )
}
