import React from 'react';
import { Tailwind, Body, Container, Head, Heading, Hr, Html, Img, Link, Preview, Section, Text } from '@react-email/components';

interface ThankYouEmailProps {
  firstName: string;
}

export default function ThankYouEmail({
  firstName,
}: ThankYouEmailProps): JSX.Element {
  return (
    <Html>
      <Head>
        <title>Thank You</title>
      </Head>
      <Preview>Thank You - SweetBeasts</Preview>
      <Tailwind>
        <Body className="bg-white-100">
          <Container className="bg-pink-100 rounded-lg p-6 mx-auto max-w-lg">
            <Section className="text-center">
              <Img
                src="https://example.com/static/sweetbeasts-logo.png"
                alt="SweetBeasts Logo"
                width="120"
              />
              <Heading className="text-3xl font-bold my-4 text-black">Thank You!</Heading>
              <Text className="text-black text-xl my-2">
                Hi {firstName},
              </Text>
              <Text className="text-black text-lg">
                Thank you for being a part of SweetBeasts! We appreciate your support and hope you enjoy our products.
              </Text>
            </Section>
            <Hr className="my-4 border-pink-300" />
            <Text className="text-black text-center text-sm">
              If you have any questions or need further assistance, feel free to contact our support team.
            </Text>
            <Text className="text-xs text-center text-gray-400 my-2">
              © {new Date().getFullYear()} SweetBeasts. All rights reserved.
            </Text>
            <Section className="text-center mt-6">
              <Link href="https://example.com/privacy-policy" className="text-gray-400 text-xs underline mx-4">Privacy Policy</Link>
              <Link href="https://example.com/terms-of-service" className="text-gray-400 text-xs underline mx-4">Terms of Service</Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}