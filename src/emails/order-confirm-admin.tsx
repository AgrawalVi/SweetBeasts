import React from 'react';
import { Tailwind, Body, Container, Head, Heading, Hr, Html, Img, Link, Preview, Section, Text } from '@react-email/components';
import { OrderWithData } from '@/types';

interface OrderConfirmedAdminEmailProps {
  userName: string;
  userEmail: string;
  plushie: string;
  orderWithData: OrderWithData; 
}

export default function OrderConfirmedAdminEmail({
  userName = "SweetUser",
  userEmail = "user@example.com",
  orderWithData, 
  plushie = "Plushie Name",
}: OrderConfirmedAdminEmailProps): JSX.Element {
  return (
    <Html>
      <Head>
        <title>New Order Confirmed</title>
      </Head>
      <Preview>New Order Confirmed - SweetBeasts</Preview>
      <Tailwind>
        <Body className="bg-white-100">
          <Container className="bg-pink-100 rounded-lg p-6 mx-auto max-w-lg">
            <Section className="text-center">
              <Img
                src="https://example.com/static/sweetbeasts-logo.png"
                alt="SweetBeasts Logo"
                width="120"
              />
              <Heading className="text-3xl font-bold my-4 text-black">New Order Confirmed</Heading>
              <Text className="text-black text-xl my-2">
                Hi Team,
              </Text>
              <Text className="text-black text-lg">
                A new order has been confirmed.
              </Text>
              <Section className="bg-white p-4 rounded my-4">
                <Heading className="text-2xl font-bold text-black">Order Details</Heading>
                <Text className="text-black text-base mt-2">
                  <strong>Order Info:</strong> {JSON.stringify(orderWithData, null, 2)}
                </Text>
                <Text className="text-black text-base mt-2">
                  <strong>Customer Name:</strong> {userName}
                </Text>
                <Text className="text-black text-base mt-2">
                  <strong>Customer Email:</strong> {userEmail}
                </Text>
                <Text className="text-black text-base mt-2">
                  <strong>Plushie Ordered:</strong> {plushie}
                </Text>
              </Section>
            </Section>
            <Hr className="my-4 border-pink-300" />
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
