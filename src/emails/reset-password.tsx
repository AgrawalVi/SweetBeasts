import React from 'react';
import { Tailwind, Body, Button, Container, Head, Heading, Hr, Html, Img, Link, Preview, Section, Text } from '@react-email/components';

interface ResetPasswordEmailProps {
  firstName: string;
  resetLink: string;
}

export function ResetPasswordEmail({ firstName, resetLink }: ResetPasswordEmailProps): JSX.Element {
  return (
    <Html>
      <Head>
        <title>Password Reset Request</title>
      </Head>
      <Preview>Password Reset - SweetBeasts Account</Preview>
      <Tailwind>
        <Body className="bg-white-100">
          <Container className="bg-pink-100 rounded-lg p-6 mx-auto max-w-lg">
            <Section className="text-center">
              <Img
                src="https://example.com/static/sweetbeasts-logo.png"
                alt="SweetBeasts Logo"
                width="120"
              />
              <Heading className="text-3xl font-bold my-4 text-black">Password Reset</Heading>
              <Text className="text-black text-xl my-2">
                Hi {firstName},
              </Text>
              <Text className="text-black text-lg">
                You requested a password reset for your SweetBeasts account. Please click the button below to set a new password.
              </Text>
              <Button
                href={resetLink}
                className="bg-pink-500 rounded text-white py-2 px-4 mt-4 hover:bg-pink-700"
              >
                Reset Password
              </Button>
            </Section>
            <Hr className="my-4 border-pink-300" />
            <Text className="text-black text-center text-sm">
              If you did not request a password reset, please ignore this email or contact support.
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
