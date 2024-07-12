import React from 'react';
import { Tailwind, Body, Container, Head, Heading, Hr, Html, Img, Link, Preview, Section, Text } from '@react-email/components';

interface OrderConfirmedUserEmailProps {
  userName: string;
  userEmail: string;
  orderNumber: string;
  plushie: string;
}

export default function OrderConfirmedUserEmail({
  userName = "SweetUser",
  userEmail = "user@example.com",
  orderNumber = "123456",
  plushie = "Plushie Name",
}: OrderConfirmedUserEmailProps): JSX.Element {
  return (
    <Html>
      <Head>
        <title>Order Confirmation</title>
      </Head>
      <Preview>Order Confirmed - SweetBeasts</Preview>
      <Tailwind>
        <Body className="bg-white-100">
          <Container className="bg-pink-100 rounded-lg p-6 mx-auto max-w-lg">
            <Section className="text-center">
              <Img
                src="https://example.com/static/sweetbeasts-logo.png"
                alt="SweetBeasts Logo"
                width="120"
              />
              <Heading className="text-3xl font-bold my-4 text-black">Order Confirmed</Heading>
              <Text className="text-black text-xl my-2">
                Hi {userName},
              </Text>
              <Text className="text-black text-lg">
                Thank you for your order! We have received your order #{orderNumber} for the {plushie}.
              </Text>
              <Text className="text-black text-lg">
                We will send you another email once your order has shipped.
              </Text>
            </Section>
            <Hr className="my-4 border-pink-300" />
            <Text className="text-black text-sm">
              If you have any questions, feel free to contact us at support@example.com.
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
