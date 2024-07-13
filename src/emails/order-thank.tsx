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

interface ThankYouForOrderEmailProps {
  firstName: string
  orderNumber: string
}

export default function ThankYouForOrderEmail({
  firstName = 'SweetUser',
  orderNumber,
}: ThankYouForOrderEmailProps): JSX.Element {
  return (
    <Html>
      <Head>
        <title>Thank You for Your Order</title>
      </Head>
      <Preview>Thank You for Your Order - SweetBeasts</Preview>
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
                Thank You for Your Order!
              </Heading>
              <Text className="my-2 text-xl text-black">Hi {firstName},</Text>
              <Text className="text-lg text-black">
                Thank you for your purchase! Your order number is {orderNumber}.
                We appreciate your support and hope you enjoy our products.
              </Text>
              <Text className="mt-4 text-lg text-black">
                We will send you another email once your order has been shipped.
              </Text>
            </Section>
            <Hr className="my-4 border-pink-300" />
            <Text className="text-sm text-black">
              If you have any questions about your order, please contact our
              support team.
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
