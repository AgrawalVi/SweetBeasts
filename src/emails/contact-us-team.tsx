import React from 'react';
import { Tailwind, Body, Container, Head, Heading, Hr, Html, Img, Link, Preview, Section, Text } from '@react-email/components';

interface TeamNotificationEmailProps {
  userName: string;
  userMessage: string;
  messageDate: string;
  orderNumber?: string; 
}

export default function TeamNotificationEmail({
  userName = "SweetUser",
  userMessage = "This is a default message.",
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
          <Container className="bg-pink-100 rounded-lg p-6 mx-auto max-w-lg">
            <Section className="text-center">
              <Img
                src="https://example.com/static/sweetbeasts-logo.png"
                alt="SweetBeasts Logo"
                width="120"
              />
              <Heading className="text-3xl font-bold my-4 text-black">New Message for Admin</Heading>
              <Text className="text-black text-xl my-2">
                Hi Team,
              </Text>
              <Text className="text-black text-lg">
                You have received a new message from {userName} on {messageDate}.
              </Text>
              <Section className="bg-white p-4 rounded my-4">
                <Heading className="text-2xl font-bold text-black">Message</Heading>
                <Text className="text-black text-base mt-2">
                  {userMessage}
                </Text>
              </Section>
              {orderNumber && (
                <Section className="bg-white p-4 rounded my-4">
                  <Heading className="text-2xl font-bold text-black">Order Number</Heading>
                  <Text className="text-black text-base mt-2">
                    {orderNumber}
                  </Text>
                </Section>
              )}
            </Section>
            <Hr className="my-4 border-pink-300" />
            <Text className="text-black text-sm">
              Please follow up with {userName} as soon as possible.
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
