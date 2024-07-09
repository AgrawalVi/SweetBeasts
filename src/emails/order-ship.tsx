import React from 'react';
import { Tailwind, Body, Container, Head, Heading, Hr, Html, Img, Link, Preview, Section, Text } from '@react-email/components';

interface OrderShippedEmailProps {
  firstName: string;
  orderNumber: string;
  trackingLink: string;
}

export default function OrderShippedEmail({
  firstName = "SweetUser",
  orderNumber,
  trackingLink,
}: OrderShippedEmailProps): JSX.Element {
  return (
    <Html>
      <Head>
        <title>Your Order Has Shipped</title>
      </Head>
      <Preview>Your Order Has Shipped - SweetBeasts</Preview>
      <Tailwind>
        <Body className="bg-white-100">
          <Container className="bg-pink-100 rounded-lg p-6 mx-auto max-w-lg">
            <Section className="text-center">
              <Img
                src="https://example.com/static/sweetbeasts-logo.png"
                alt="SweetBeasts Logo"
                width="120"
              />
              <Heading className="text-3xl font-bold my-4 text-black">Your Order Has Shipped!</Heading>
              <Text className="text-black text-xl my-2">
                Hi {firstName},
              </Text>
              <Text className="text-black text-lg">
                Great news! Your order number {orderNumber} has shipped. You can track your package using the link below:
              </Text>
              <Link
                href={trackingLink}
                className="bg-pink-500 rounded text-white py-2 px-4 mt-4 hover:bg-pink-700 inline-block"
              >
                Track Your Order
              </Link>
            </Section>
            <Hr className="my-4 border-pink-300" />
            <Text className="text-black text-sm">
              If you have any questions about your order, please contact our support team.
            </Text>
            <Text className="text-xs text-gray-400 my-2">
              © {new Date().getFullYear()} SweetBeasts. All rights reserved.
            </Text>
            <Section className="text-center mt-6">
              <Link href="https://example.com/privacy-policy" className="text-pink-500 underline mx-4">Privacy Policy</Link>
              <Link href="https://example.com/terms-of-service" className="text-pink-500 underline mx-4">Terms of Service</Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
