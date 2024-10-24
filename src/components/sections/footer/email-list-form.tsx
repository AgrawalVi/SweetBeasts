'use client'

import { useState, useTransition } from 'react'
import { JoinEmailListSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckIcon, ChevronRightIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { cn } from '@/lib/utils'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import GradientButton from '@/components/aceternity/gradient-button'
import { HoverBorderGradient } from '@/components/aceternity/hover-border-gradient'
import { AnimatedSubscribeButton } from '@/components/magic-ui/subscribe-button'
import { addToEmailList } from '@/actions/customer/email-list'

const JoinEmailListForm = ({
  showText = true,
  className,
  inputClassName,
}: {
  showText?: boolean
  className?: string
  inputClassName?: string
}) => {
  const { toast } = useToast()
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof JoinEmailListSchema>>({
    resolver: zodResolver(JoinEmailListSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = (values: z.infer<typeof JoinEmailListSchema>) => {
    startTransition(() => {
      addToEmailList(values.email).then((response) => {
        if (response.error) {
          toast({ description: response.error, variant: 'destructive' })
        } else {
          form.reset()
          setIsSubscribed(true)
        }
      })
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("relative z-10 flex w-full flex-col items-center space-y-4", className)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              {showText && (
                <FormLabel>
                  Join our email list to stay updated on new products,
                  charitable initiatives, Sweet Haven news, and more exciting
                  updates!
                </FormLabel>
              )}
              <FormControl>
                <Input
                  {...field}
                  placeholder="welcome@sweetbeasts.shop"
                  className={cn(
                    'border-muted bg-muted font-josefin lg:w-full',
                    inputClassName,
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <AnimatedSubscribeButton
          isSubscribed={isSubscribed}
          setIsSubscribed={setIsSubscribed}
          isPending={isPending}
          initialText={
            <span className="group inline-flex items-center">
              Sign Up{' '}
              <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          }
          changeText={
            <span className="group inline-flex items-center">
              <CheckIcon className="mr-2 h-4 w-4" />
              Subscribed{' '}
            </span>
          }
        />
      </form>
    </Form>
  )
}

export default JoinEmailListForm
