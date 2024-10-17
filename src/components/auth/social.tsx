'use client'

import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { IconBrandGoogle } from '@tabler/icons-react'
import { signIn } from 'next-auth/react'

import { Button } from '@/components/ui/button'

export const Social = ({
  googleButtonText = 'Sign in with Google',
  redirectTo,
}: {
  googleButtonText: string | undefined
  redirectTo?: string
}) => {
  const onClick = (provider: 'google') => {
    signIn(provider, { callbackUrl: redirectTo || DEFAULT_LOGIN_REDIRECT })
  }

  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size="lg"
        className="relative w-full"
        variant="outline"
        onClick={() => {
          onClick('google')
        }}
      >
        {googleButtonText}
        <IconBrandGoogle className="absolute left-5 h-5 w-5" />
      </Button>
    </div>
  )
}
