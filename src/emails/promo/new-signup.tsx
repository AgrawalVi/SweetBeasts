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

interface ContactUsEmailProps {
  userName: string
  userMessage: string
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL!
const logoURL = 'https://sweetbeasts.shop/sweetbeasts-logo.png'

export default function ContactUsEmail({
  userName,
  userMessage,
}: ContactUsEmailProps): JSX.Element {
  return (
    <Html>
      <Head>
        <title>Welcome to SweetBeasts</title>
      </Head>
      <Preview>Welcome to SweetBeasts</Preview>
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
                Thank You for Contacting Us!
              </Heading>
              <Text className="my-2 text-xl text-black">Hi {userName},</Text>
              <Text className="text-lg text-black">
                Thank you for reaching out to SweetBeasts! We have received your
                message and will get back to you as soon as possible.
              </Text>
              <Section className="my-4 rounded bg-white p-4">
                <Heading className="text-2xl font-bold text-black">
                  Your Message
                </Heading>
                <Text className="mt-2 text-base text-black">{userMessage}</Text>
              </Section>
            </Section>
            <Hr className="my-4 border-pink-300" />
            <Text className="text-sm text-black">
              If you have any urgent inquiries, please contact our support team
              directly.
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
