'use client'

import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import * as z from 'zod'
import { FindOrderSchema } from '@/schemas'
import { Button } from '@/components/ui/button'
import { FormError } from '@/components/custom/form-error'

import { findOrder } from '@/actions/customer/find-order'

export const OrderStatusForm = ({ errorText }: { errorText?: string }) => {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>(errorText)

  const form = useForm<z.infer<typeof FindOrderSchema>>({
    resolver: zodResolver(FindOrderSchema),
    defaultValues: {
      email: '',
      orderNumber: '',
    },
  })

  const onSubmit = (values: z.infer<typeof FindOrderSchema>) => {
    setError('')
    startTransition(() => {
      findOrder(values)
        .then((data) => {
          if (data?.error) {
            setError(data.error)
          }
        })
        .catch(() => setError('Something went wrong'))
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mb-20 mt-24 w-[25rem] space-y-6 px-4 sm:mb-[10rem] md:w-[35rem]"
      >
        <div className="space-y-4">
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
                    disabled={isPending}
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <FormField
              control={form.control}
              name="orderNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Order Number</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="1234"
                      disabled={isPending}
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormError message={error} />
        <Button type="submit" className="w-full" disabled={isPending}>
          Find Order
        </Button>
      </form>
    </Form>
  )
}
