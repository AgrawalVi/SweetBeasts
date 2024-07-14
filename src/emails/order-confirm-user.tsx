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

interface OrderConfirmedUserEmailProps {
  userName: string
  userEmail: string
  orderNumber: string
  plushie: string
}

export default function OrderConfirmedUserEmail({
  userName = 'SweetUser',
  userEmail = 'user@example.com',
  orderNumber = '123456',
  plushie = 'Plushie Name',
}: OrderConfirmedUserEmailProps): JSX.Element {
  return (
    <Html>
      <Head>
        <title>Order Confirmation</title>
      </Head>
      <Preview>Order Confirmed - SweetBeasts</Preview>
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
                Order Confirmed
              </Heading>
              <Text className="my-2 text-xl text-black">Hi {userName},</Text>
              <Text className="text-lg text-black">
                Thank you for your order! We have received your order #
                {orderNumber} for the {plushie}.
              </Text>
              <Text className="text-lg text-black">
                We will send you another email once your order has shipped.
              </Text>
            </Section>
            <Hr className="my-4 border-pink-300" />
            <Text className="text-sm text-black">
              If you have any questions, feel free to contact us at
              support@example.com.
            </Text>
            <Text className="my-2 text-xs text-gray-400">
              © {new Date().getFullYear()} SweetBeasts. All rights reserved.
            </Text>
            <Section className="mt-6 text-center">
              <Link
                href="https://example.com/privacy-policy"
                className="mx-4 text-pink-500 underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="https://example.com/terms-of-service"
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
