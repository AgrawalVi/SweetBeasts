'use client'

import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { FormError } from '@/components/custom/form-error'
import { FormSuccess } from '@/components/custom/form-success'
import { ContactSchema } from '@/schemas'
import { Card, CardContent } from '@/components/ui/card'
import { sendContactUs } from '@/actions/customer/contact-us'

export default function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>(undefined)
  const [success, setSuccess] = useState<string | undefined>(undefined)

  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: '',
      email: '',
      orderNumber: '',
      message: '',
    },
  })

  const onSubmit = (data: z.infer<typeof ContactSchema>) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      sendContactUs(data).then((response) => {
        setError(response.error)
        setSuccess(response.success)
      })
    })
  }

  return (
    <>
      <Card className="w-full sm:w-[30rem]">
        <CardContent className="pt-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-full max-w-lg flex-col justify-between space-y-6"
            >
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name*</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="John Doe"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email*</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="john.doe@example.com"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="orderNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Order Number</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="SB123456"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message*</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Your message here..."
                          disabled={isPending}
                          className="h-40 lg:h-60"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-4">
                <FormError message={error} />
                <FormSuccess message={success} />
                <Button
                  type="submit"
                  className="mt-4 w-full"
                  disabled={isPending}
                >
                  {isPending ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  )
}
