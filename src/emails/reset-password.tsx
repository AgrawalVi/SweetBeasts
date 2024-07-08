import React from 'react'
import {
  Tailwind,
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface ResetPasswordEmailProps {
  firstName: string
  resetLink: string
}

export function ResetPasswordEmail({
  firstName,
  resetLink,
}: ResetPasswordEmailProps): JSX.Element {
  return (
    <Html>
      <Head>
        <title>Password Reset Request</title>
      </Head>
      <Preview>Password Reset - SweetBeasts Account</Preview>
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
                Password Reset
              </Heading>
              <Text className="my-2 text-xl text-black">Hi {firstName},</Text>
              <Text className="text-lg text-black">
                You requested a password reset for your SweetBeasts account.
                Please click the button below to set a new password.
              </Text>
              <Button
                href={resetLink}
                className="mt-4 rounded bg-pink-500 px-4 py-2 text-white hover:bg-pink-700"
              >
                Reset Password
              </Button>
            </Section>
            <Hr className="my-4 border-pink-300" />
            <Text className="text-center text-sm text-black">
              If you did not request a password reset, please ignore this email
              or contact support.
            </Text>
            <Text className="my-2 text-center text-xs text-gray-400">
              © {new Date().getFullYear()} SweetBeasts. All rights reserved.
            </Text>
            <Section className="mt-6 text-center text-xs">
              <Link
                href="https://example.com/privacy-policy"
                className="mx-4 text-gray-400 underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="https://example.com/terms-of-service"
                className="mx-4 text-gray-400 underline"
              >
                Terms of Service
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
