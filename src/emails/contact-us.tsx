import React from 'react';
import { Tailwind, Body, Container, Head, Heading, Hr, Html, Img, Link, Preview, Section, Text } from '@react-email/components';

interface ContactUsEmailProps {
  userName: string;
  userMessage: string;
}

export default function ContactUsEmail({
  userName = "SweetUser",
  userMessage ="Message from SweetUser",
}: ContactUsEmailProps): JSX.Element {
  return (
    <Html>
      <Head>
        <title>Contact Us Acknowledgment</title>
      </Head>
      <Preview>Contact Us - SweetBeasts</Preview>
      <Tailwind>
        <Body className="bg-white-100">
          <Container className="bg-pink-100 rounded-lg p-6 mx-auto max-w-lg">
            <Section className="text-center">
              <Img
                src="https://example.com/static/sweetbeasts-logo.png"
                alt="SweetBeasts Logo"
                width="120"
              />
              <Heading className="text-3xl font-bold my-4 text-black">Thank You for Contacting Us!</Heading>
              <Text className="text-black text-xl my-2">
                Hi {userName},
              </Text>
              <Text className="text-black text-lg">
                Thank you for reaching out to SweetBeasts! We have received your message and will get back to you as soon as possible.
              </Text>
              <Section className="bg-white p-4 rounded my-4">
                <Heading className="text-2xl font-bold text-black">Your Message</Heading>
                <Text className="text-black text-base mt-2">
                  {userMessage}
                </Text>
              </Section>
            </Section>
            <Hr className="my-4 border-pink-300" />
            <Text className="text-black text-sm">
              If you have any urgent inquiries, please contact our support team directly.
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
