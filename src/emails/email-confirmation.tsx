import React from 'react';
import { Tailwind, Body, Button, Container, Head, Heading, Hr, Html, Img, Link, Preview, Section, Text } from '@react-email/components';

interface EmailConfirmationEmailProps {
  firstName: string;
  confirmationLink: string;
}

export default function EmailConfirmation({
  firstName,
  confirmationLink,
}: EmailConfirmationEmailProps): JSX.Element {
  return (
    <Html>
      <Head>
        <title>Email Confirmation Required</title>
      </Head>
      <Preview>Email Confirmation - SweetBeasts Account</Preview>
      <Tailwind>
        <Body className="bg-white-100">
          <Container className="bg-pink-100 rounded-lg p-6 mx-auto max-w-lg">
            <Section className="text-center">
              <Img
                src="https://example.com/static/sweetbeasts-logo.png"
                alt="SweetBeasts Logo"
                width="120"
              />
              <Heading className="text-3xl font-bold my-4 text-black">Email Confirmation</Heading>
              <Text className="text-black text-xl my-2">
                Hi {firstName},
              </Text>
              <Text className="text-black text-lg">
                Thanks for registering at SweetBeasts! Please confirm your email address by clicking the button below.
              </Text>
              <Button
                href={confirmationLink}
                className="bg-pink-400 rounded text-white py-2 px-4 mt-4 hover:bg-pink-700"
              >
                Confirm Email
              </Button>
            </Section>
            <Hr className="my-4 border-pink-300" />
            <Text className="text-black text-center text-sm">
              If you did not create an account, no further action is required.
            </Text>
            <Text className="text-xs text-center text-gray-400 my-2">
              © {new Date().getFullYear()} SweetBeasts. All rights reserved.
            </Text>
            <Section className="text-center text-xs mt-6">
              <Link href="https://example.com/privacy-policy" className="text-gray-400 underline mx-4">Privacy Policy</Link>
              <Link href="https://example.com/terms-of-service" className="text-gray-400 underline mx-4">Terms of Service</Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
