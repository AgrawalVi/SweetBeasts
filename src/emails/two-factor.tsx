import React from 'react'
import {
  Tailwind,
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface TwoFactorConfirmationEmailProps {
  firstName: string
  twoFactorCode: string // Make the prop optional
}

export default function TwoFactorConfirmationEmail({
  firstName,
  twoFactorCode = '000000',
}: TwoFactorConfirmationEmailProps): JSX.Element {
  return (
    <Html>
      <Head>
        <title>Two-Factor Confirmation Required</title>
      </Head>
      <Preview>Two-Factor Confirmation - SweetBeasts Account</Preview>
      <Tailwind>
        <Body className="bg-white-100">
          <Container className="mx-auto max-w-lg rounded-lg bg-pink-100 p-6">
            <Section className="text-center">
              <Img
                src="https://example.com/static/sweetbeasts-logo.png"
                alt="SweetBeasts Logo"
                width="120"
              />
              <Heading className="my-4 text-3xl font-bold text-black">
                Two-Factor Confirmation
              </Heading>
              <Text className="my-2 text-xl text-black">Hi {firstName},</Text>
              <Text className="text-lg text-black">
                Your account is secured with two-factor authentication. Please
                confirm your identity by using the code below.
              </Text>
              <Section className="mt-4 flex justify-center">
                <div className="grid grid-cols-6 gap-2">
                  {twoFactorCode.split('').map((digit, index) => (
                    <div
                      key={index}
                      className="flex h-12 w-12 items-center justify-center rounded border border-gray-800 bg-rose-200 text-2xl"
                    >
                      {digit}
                    </div>
                  ))}
                </div>
              </Section>
            </Section>
            <Hr className="my-4 border-pink-300" />
            <Text className="text-center text-sm text-black">
              If you did not request this action, please contact support
              immediately.
            </Text>
            <Text className="my-2 text-center text-xs text-gray-400">
              © {new Date().getFullYear()} SweetBeasts. All rights reserved.
            </Text>
            <Section className="mt-6 text-center text-xs">
              <a
                href="https://sweetbeasts.shop/privacy-policy"
                className="mx-4 text-gray-400 underline underline-offset-2"
              >
                Privacy Policy
              </a>
              <a
                href="https://sweetbeasts.shop/terms-of-service"
                className="mx-4 text-gray-400 underline underline-offset-2"
              >
                Terms of Service
              </a>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
