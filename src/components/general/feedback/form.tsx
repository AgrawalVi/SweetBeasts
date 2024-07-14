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
import { FeedbackSchema } from '@/schemas'
import { sendFeedBack } from '@/actions/customer/feedback'

interface FeedbackFormInputs {
  name: string
  email: string
  feedback: string
}

export default function FeedbackForm() {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>(undefined)
  const [success, setSuccess] = useState<string | undefined>(undefined)

  const form = useForm<FeedbackFormInputs>({
    resolver: zodResolver(FeedbackSchema),
    defaultValues: {
      name: '',
      email: '',
      feedback: '',
    },
  })

  const onSubmit = (data: z.infer<typeof FeedbackSchema>) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      sendFeedBack(data).then((response) => {
        setError(response.error)
        setSuccess(response.success)
      })
    })
  }

  return (
    <div className="bg-gray-10 flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-[30rem] flex-col justify-between space-y-2 rounded-lg border border-purple-200 bg-white p-6 shadow-lg dark:border-purple-200 dark:bg-black"
        >
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Name</FormLabel>
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
                  <FormLabel className="text-lg">Email</FormLabel>
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
              name="feedback"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Feedback</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Your feedback here..."
                      disabled={isPending}
                      className="h-40 lg:h-60"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-4 space-y-2">
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button type="submit" className="w-full" disabled={isPending}>
              Send Feedback
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
