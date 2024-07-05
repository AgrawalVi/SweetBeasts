import React from 'react';
import { Tailwind, Body, Container, Head, Heading, Hr, Html, Img, Preview, Section, Text } from '@react-email/components';

interface TwoFactorConfirmationEmailProps {
  firstName: string;
  sixDigitCode?: string; // Make the prop optional
}

export default function TwoFactorConfirmationEmail({ firstName, sixDigitCode = "000000" }: TwoFactorConfirmationEmailProps): JSX.Element {
  return (
    <Html>
      <Head>
        <title>Two-Factor Confirmation Required</title>
      </Head>
      <Preview>Two-Factor Confirmation - SweetBeasts Account</Preview>
      <Tailwind>
        <Body className="bg-white-100">
          <Container className="bg-pink-100 rounded-lg p-6 mx-auto max-w-lg">
            <Section className="text-center">
              <Img
                src="https://example.com/static/sweetbeasts-logo.png"
                alt="SweetBeasts Logo"
                width="120"
              />
              <Heading className="text-3xl font-bold my-4 text-black">Two-Factor Confirmation</Heading>
              <Text className="text-black text-xl my-2">
                Hi {firstName},
              </Text>
              <Text className="text-black text-lg">
                Your account is secured with two-factor authentication. Please confirm your identity by using the code below.
              </Text>
              <Section className="flex justify-center mt-4">
                <div className="grid grid-cols-6 gap-2">
                  {sixDigitCode.split('').map((digit, index) => (
                    <div key={index} className="flex items-center justify-center w-12 h-12 border border-gray-800 bg-rose-200 rounded text-2xl">
                      {digit}
                    </div>
                  ))}
                </div>
              </Section>
            </Section>
            <Hr className="my-4 border-pink-300" />
            <Text className="text-black text-center text-sm">
              If you did not request this action, please contact support immediately.
            </Text>
            <Text className="text-xs text-center text-gray-400 my-2">
              © {new Date().getFullYear()} SweetBeasts. All rights reserved.
            </Text>
            <Section className="text-center text-xs mt-6">
              <a href="https://example.com/privacy-policy" className="text-gray-400 underline mx-4">Privacy Policy</a>
              <a href="https://example.com/terms-of-service" className="text-gray-400 underline mx-4">Terms of Service</a>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
