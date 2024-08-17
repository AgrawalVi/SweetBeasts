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
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL!
const logoURL = process.env.NEXT_PUBLIC_LOGO_PNG_URL!

interface TeamNotificationEmailProps {
  userName: string
  userEmail: string
  userMessage: string
  messageDate: string
  orderNumber?: string
}

export default function TeamNotificationEmail({
  userName = 'SweetUser',
  userEmail = 'user@example.com',
  userMessage = 'This is a default message.',
  messageDate = new Date().toLocaleDateString(),
  orderNumber,
}: TeamNotificationEmailProps): JSX.Element {
  return (
    <Html>
      <Head>
        <title>Team Notification</title>
      </Head>
      <Preview>New Message from {userName}</Preview>
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
                New Message for Admin
              </Heading>
              <Text className="my-2 text-xl text-black">Hi Team,</Text>
              <Text className="text-lg text-black">
                You have received a new message from {userName} on {messageDate}
                .
              </Text>
              <Text className="text-lg text-black">Email: {userEmail}</Text>
              <Section className="my-4 rounded bg-white p-4">
                <Heading className="text-2xl font-bold text-black">
                  Message
                </Heading>
                <Text className="mt-2 text-base text-black">{userMessage}</Text>
              </Section>
              {orderNumber && (
                <Section className="my-4 rounded bg-white p-4">
                  <Heading className="text-2xl font-bold text-black">
                    Order Number
                  </Heading>
                  <Text className="mt-2 text-base text-black">
                    {orderNumber}
                  </Text>
                </Section>
              )}
            </Section>
            <Hr className="my-4 border-pink-300" />
            <Text className="text-sm text-black">
              Please follow up with {userName} as soon as possible.
            </Text>
            <Text className="my-2 text-xs text-gray-400">
              © {new Date().getFullYear()} SweetBeasts. All rights reserved.
            </Text>
            <Section className="mt-6 text-center">
              <Link
                href={`${baseURL}/privacy-policy`}
                className="mx-4 text-pink-500 underline"
              >
                Privacy Policy
              </Link>
              <Link
                href={`${baseURL}/terms-of-service`}
                className="mx-4 text-pink-500 underline"
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
