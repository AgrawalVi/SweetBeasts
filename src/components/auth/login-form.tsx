'use client'

import { useState, useTransition } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { LoginSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { useShoppingCart } from '@/hooks/use-shopping-cart'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { CardWrapper } from '@/components/auth/card-wrapper'
import { FormError } from '@/components/custom/form-error'
import { FormSuccess } from '@/components/custom/form-success'
import { login } from '@/actions/auth/login'

export const LoginForm = ({ redirectTo }: { redirectTo?: string }) => {
  const searchParams = useSearchParams()
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? 'An account already exists with this email'
      : ''

  const [isPending, startTransition] = useTransition()
  const [showTwoFactor, setShowTwoFactor] = useState(false)
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
      code: '',
    },
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError('')
    startTransition(() => {
      login(values, redirectTo)
        .then((data) => {
          if (data?.error) {
            console.log(data.error)
            form.reset()
            setError(data.error)
          }
          if (data?.success) {
            form.reset()
            setSuccess(data.success)
          }
          if (data?.twoFactor) {
            setShowTwoFactor(true)
          }
        })
        .catch(() => setError('Something went wrong'))
    })
  }

  return (
    <CardWrapper
      headerLabel={
        showTwoFactor ? 'Two Factor Authentication' : 'Please login below'
      }
      backButtonLabel={
        showTwoFactor ? 'Create an account' : "Don't have an account?"
      }
      backButtonHref={
        redirectTo
          ? `/auth/register?redirectTo=${redirectTo}`
          : '/auth/register'
      }
      showSocial={!showTwoFactor}
      googleButtonText="Continue with Google"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {showTwoFactor && (
              <div className="flex w-full justify-center">
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem className="my-2 flex flex-col text-center">
                      <FormLabel>Two Factor Code</FormLabel>
                      <FormControl>
                        <InputOTP
                          maxLength={6}
                          {...field}
                          pattern={REGEXP_ONLY_DIGITS}
                        >
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            {!showTwoFactor && (
              <>
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
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="sweetbeasts123"
                            type="password"
                            disabled={isPending}
                          ></Input>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    variant="link"
                    size="sm"
                    className="text-xsl px-0 font-normal"
                    asChild
                  >
                    <Link
                      href={
                        redirectTo
                          ? `/auth/reset-password?redirectTo=${redirectTo}`
                          : '/auth/reset-password'
                      }
                    >
                      Forgot your password?
                    </Link>
                  </Button>
                </div>
              </>
            )}
          </div>
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            {showTwoFactor ? 'Confirm' : 'Login'}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
