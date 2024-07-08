import React from 'react';
import { Tailwind, Body, Container, Head, Heading, Hr, Html, Img, Link, Preview, Section, Text } from '@react-email/components';

interface ThankYouForOrderEmailProps {
  firstName: string;
  orderNumber: string;
}

export default function ThankYouForOrderEmail({
  firstName = "SweetUser",
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
          <Container className="bg-pink-100 rounded-lg p-6 mx-auto max-w-lg">
            <Section className="text-center">
              <Img
                src="https://example.com/static/sweetbeasts-logo.png"
                alt="SweetBeasts Logo"
                width="120"
              />
              <Heading className="text-3xl font-bold my-4 text-black">Thank You for Your Order!</Heading>
              <Text className="text-black text-xl my-2">
                Hi {firstName},
              </Text>
              <Text className="text-black text-lg">
                Thank you for your purchase! Your order number is {orderNumber}. We appreciate your support and hope you enjoy our products.
              </Text>
              <Text className="text-black text-lg mt-4">
                We will send you another email once your order has been shipped.
              </Text>
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
