"use client"

import * as z from "zod"
import { JoinEmailListSchema } from "@/schemas"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { addToEmailList } from "@/actions/email-list"
import { useToast } from "@/components/ui/use-toast"

import { useState } from "react"
import { Input } from "@/components/aceternity/input"
import { HoverBorderGradient } from "@/components/aceternity/hover-border-gradient"
import ConfettiEffect from "@/components/custom/confetti-effect"

const JoinEmailListForm = () => {
  const [runConfetti, setRunConfetti] = useState(false)

  const { toast } = useToast()

  const form = useForm<z.infer<typeof JoinEmailListSchema>>({
    resolver: zodResolver(JoinEmailListSchema),
    defaultValues: {
      email: "",
    },
  })

  function onConfettiComplete() {
    setRunConfetti(false)
  }

  const onSubmit = (values: z.infer<typeof JoinEmailListSchema>) => {
    addToEmailList(values.email).then((data) => {
      if (data.error) {
        toast({ description: data.error, variant: "destructive" })
      } else {
        toast({
          description: "Welcome to the SweetBeasts family, You're all set! 🎉",
        })
        setRunConfetti(true)
      }
    })
  }

  return (
    <>
      <ConfettiEffect runConfetti={runConfetti} onConfettiComplete={onConfettiComplete} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 relative z-10 flex w-full place-items-center flex-col"
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
                    className="w-[20rem] lg:w-[40rem] font-josefin"
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
    </>
  )
}

export default JoinEmailListForm
