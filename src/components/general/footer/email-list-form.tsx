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
import { useState } from 'react'

import { Input } from '@/components/ui/input'
import { HoverBorderGradient } from '@/components/aceternity/hover-border-gradient'
import GradientButton from '@/components/aceternity/gradient-button'
import { AnimatedSubscribeButton } from '@/components/magic/subscribe-button'
import { ChevronRightIcon } from 'lucide-react'

const JoinEmailListForm = () => {
  const { toast } = useToast()
  const [isSubscribed, setIsSubscribed] = useState(false)

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
        setIsSubscribed(true)
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
        className="relative z-10 flex w-full flex-col place-items-center space-y-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="3xl:w-[50rem] w-3/4">
              <FormLabel>
                Join our email list to be notified about new products, restocks,
                sales, and more!
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="welcome@sweetbeasts.shop"
                  className="font-josefin lg:w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <AnimatedSubscribeButton
          isSubscribed={isSubscribed}
          setIsSubscribed={setIsSubscribed}
          initialText={
            <span className="group inline-flex items-center">
              Sign Up{' '}
              <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          }
          changeText="Subscribed"
        />
      </form>
    </Form>
  )
}

export default JoinEmailListForm
