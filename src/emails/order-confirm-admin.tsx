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
import { OrderWithData } from '@/types'

interface OrderConfirmedAdminEmailProps {
  userName: string
  userEmail: string
  orderWithData: OrderWithData
}

export default function OrderConfirmedAdminEmail({
  userName = 'SweetUser',
  userEmail = 'user@example.com',
  orderWithData,
}: OrderConfirmedAdminEmailProps): JSX.Element {
  return (
    <Html>
      <Head>
        <title>New Order Confirmed</title>
      </Head>
      <Preview>New Order Confirmed - SweetBeasts</Preview>
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
                New Order Confirmed
              </Heading>
              <Text className="my-2 text-xl text-black">Hi Team,</Text>
              <Text className="text-lg text-black">
                A new order has been confirmed.
              </Text>
              <Section className="my-4 rounded bg-white p-4">
                <Heading className="text-2xl font-bold text-black">
                  Order Details
                </Heading>
                <Text className="mt-2 text-base text-black">
                  <strong>Order Info:</strong>{' '}
                  {JSON.stringify(orderWithData, null, 2)}
                </Text>
                <Text className="mt-2 text-base text-black">
                  <strong>Customer Name:</strong> {userName}
                </Text>
                <Text className="mt-2 text-base text-black">
                  <strong>Customer Email:</strong> {userEmail}
                </Text>
                <Text className="mt-2 text-base text-black">
                  <strong>Plushie Ordered:</strong> {plushie}
                </Text>
              </Section>
            </Section>
            <Hr className="my-4 border-pink-300" />
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
