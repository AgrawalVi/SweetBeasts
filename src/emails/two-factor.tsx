import React from 'react';
import { Tailwind, Body, Button, Container, Head, Heading, Hr, Html, Img, Link, Preview, Section, Text } from '@react-email/components';

interface TwoFactorConfirmationEmailProps {
  firstName: string;
  confirmationLink: string;
}


export default function TwoFactorConfirmationEmail({ firstName, confirmationLink }: TwoFactorConfirmationEmailProps): JSX.Element {
  return (
    <Html>
      <Head>
        <title>Two-Factor Confirmation Required</title>
      </Head>
      <Preview>Two-Factor Confirmation - SweetBeasts Account</Preview>
      <Tailwind>
        <Body className="bg-pink-100">
          <Container className="border border-solid border-pink-300 rounded-lg p-6 mx-auto max-w-lg bg-white">
            <Section className="text-center">
              <Img
                src="https://example.com/static/sweetbeasts-logo.png"
                alt="SweetBeasts Logo"
                width="120"
              />
              <Heading className="text-xl font-bold my-4 text-black">Two-Factor Confirmation</Heading>
              <Text className="text-black my-2">
                Hi {firstName},
              </Text>
              <Text className="text-black">
                Your account is secured with two-factor authentication. Please confirm your identity by clicking the button below.
              </Text>
              <Button
                href={confirmationLink}
                className="bg-pink-500 rounded text-white py-2 px-4 mt-4 hover:bg-pink-700"
              >
                Confirm Identity
              </Button>
            </Section>
            <Hr className="my-4 border-pink-300" />
            <Text className="text-black text-sm">
              If you did not request this action, please contact support immediately.
            </Text>
            <Text className="text-xs text-gray-400 my-2">
              © {new Date().getFullYear()} SweetBeasts. All rights reserved.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}



