import React from 'react'
import { LOGO_PNG_URL } from '@/constants'
import {
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
  Tailwind,
  Text,
} from '@react-email/components'

interface EmailConfirmationEmailProps {
  confirmationLink: string
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL!
const logoURL = LOGO_PNG_URL

export default function EmailConfirmation({
  confirmationLink,
}: EmailConfirmationEmailProps): JSX.Element {
  return (
    <Html>
      <Head>
        <title>Email Confirmation Required</title>
      </Head>
      <Preview>Email Confirmation - SweetBeasts Account</Preview>
      <Tailwind>
        <Body className="bg-white-100">
          <Container className="mx-auto max-w-lg rounded-lg bg-pink-100 p-6">
            <Section className="text-center">
              <Img
                src={logoURL}
                alt="SweetBeasts Logo"
                width="120"
                className="mx-auto"
              />
              <Heading className="my-4 text-3xl font-bold text-black">
                Email Confirmation
              </Heading>
              <Text className="my-2 text-xl text-black">Hi!</Text>
              <Text className="text-lg text-black">
                Thanks for registering at SweetBeasts! Please confirm your email
                address by clicking the button below.
              </Text>
              <Button
                href={confirmationLink}
                className="mt-4 rounded bg-pink-400 px-4 py-2 text-white hover:bg-pink-700"
              >
                Confirm Email
              </Button>
            </Section>
            <Hr className="my-4 border-pink-300" />
            <Text className="text-center text-sm text-black">
              If you did not create an account, no further action is required.
            </Text>
            <Text className="my-2 text-center text-xs text-gray-400">
              © {new Date().getFullYear()} SweetBeasts. All rights reserved.
            </Text>
            <Section className="mt-6 text-center text-xs">
              <Link
                href={`${baseURL}/privacy-policy`}
                className="mx-4 text-gray-400 underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              <Link
                href={`${baseURL}/terms-of-service`}
                className="mx-4 text-gray-400 underline underline-offset-2"
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
