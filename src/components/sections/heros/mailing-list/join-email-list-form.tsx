'use client'

import * as z from 'zod'
import { JoinEmailListSchema } from '@/schemas'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { addToEmailList } from '@/actions/customer/email-list'
import { useToast } from '@/components/ui/use-toast'

import { Input } from '@/components/aceternity/input'
import { HoverBorderGradient } from '@/components/aceternity/hover-border-gradient'

const JoinEmailListForm = () => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof JoinEmailListSchema>>({
    resolver: zodResolver(JoinEmailListSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = (values: z.infer<typeof JoinEmailListSchema>) => {
    addToEmailList(values.email).then((data) => {
      if (data.error) {
        toast({ description: data.error, variant: 'destructive' })
      } else {
        form.reset()
        toast({
          description: "Welcome to the SweetBeasts family, You're all set! 🎉",
        })
      }
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative z-10 flex w-full flex-col place-items-center space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder="welcome@sweetbeasts.shop"
                  className="w-[20rem] font-josefin lg:w-[40rem]"
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
              <FormControl>
                <Input
                  {...field}
                  placeholder="welcome@sweetbeasts.shop"
                  className="w-[20rem] font-josefin lg:w-[40rem]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <HoverBorderGradient
          className="z-10 w-40"
          containerClassName="mt-5"
          type="submit"
        >
          Sign Up
        </HoverBorderGradient>
      </form>
    </Form>
  )
}

export default JoinEmailListForm
