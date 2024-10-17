'use client'

import { useState, useTransition } from 'react'
import { CardWrapper } from '@/components/auth/card-wrapper'
import { UnsubscribeSchema } from '@/schemas'
import * as z from 'zod'
import { PuffLoader } from 'react-spinners'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { FormSuccess } from '@/components/custom/form-success'
import { Button } from '@/components/ui/button'
import { FormError } from '@/components/custom/form-error'

export const UnsubscribeForm = () => {
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()
  const [isPending, startTransition] = useTransition()
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof UnsubscribeSchema>>({
    resolver: zodResolver(UnsubscribeSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof UnsubscribeSchema>) => {
    setError('')
    setLoading(true)
    const response = await fetch(`/api/unsubscribe?email=${values.email}`, {
      method: 'POST',
    })
    if (response.ok) {
      setSuccess('Successfully unsubscribed from email list')
      form.reset()
    } else {
      setError('Error unsubscribing from email list')
    }
    setLoading(false)
  }

  return (
    <CardWrapper
      headerLabel={'Unsubscribe'}
      backButtonHref="/"
      backButtonLabel="Go Home"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="john.doe@example.com"
                    disabled={loading}
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={loading}>
            Unsubscribe
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
