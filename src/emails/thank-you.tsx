import React from 'react'
import { LOGO_PNG_URL } from '@/constants'
import {
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
  Tailwind,
  Text,
} from '@react-email/components'

interface ThankYouEmailProps {
  firstName: string
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL!
const logoURL = LOGO_PNG_URL

export default function ThankYouEmail({
  firstName,
}: ThankYouEmailProps): JSX.Element {
  return (
    <Html>
      <Head>
        <title>Thank You</title>
      </Head>
      <Preview>Thank You - SweetBeasts</Preview>
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
                Thank You!
              </Heading>
              <Text className="my-2 text-xl text-black">Hi {firstName},</Text>
              <Text className="text-lg text-black">
                Thank you for being a part of SweetBeasts! We appreciate your
                support and hope you enjoy our products.
              </Text>
            </Section>
            <Hr className="my-4 border-pink-300" />
            <Text className="text-center text-sm text-black">
              If you have any questions or need further assistance, feel free to
              contact our support team.
            </Text>
            <Text className="my-2 text-center text-xs text-gray-400">
              © {new Date().getFullYear()} SweetBeasts. All rights reserved.
            </Text>
            <Section className="mt-6 text-center">
              <Link
                href={`${baseURL}/privacy-policy`}
                className="mx-4 text-xs text-gray-400 underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              <Link
                href={`${baseURL}/terms-of-service`}
                className="mx-4 text-xs text-gray-400 underline underline-offset-2"
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
