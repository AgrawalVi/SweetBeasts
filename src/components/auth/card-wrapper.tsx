'use client'

import React from 'react'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { BackButton } from '@/components/auth/back-button'
import { Header } from '@/components/auth/header'
import { Social } from '@/components/auth/social'

interface CardWrapperProps {
  children: React.ReactNode
  headerLabel: string
  backButtonLabel: string
  backButtonHref: string
  showSocial?: boolean
  googleButtonText?: string
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  googleButtonText,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-pink-light transition-all duration-1000 hover:scale-[1.01] hover:shadow-pink-strong dark:shadow-teal-light dark:hover:shadow-teal-strong">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent className="pb-3">{children}</CardContent>
      {/* {showSocial && (
        <CardFooter className="pb-3">
          <Social googleButtonText={googleButtonText} />
        </CardFooter>
      )} */}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref}></BackButton>
      </CardFooter>
    </Card>
  )
}
