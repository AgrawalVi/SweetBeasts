import React from 'react'
import {
  Tailwind,
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import { LOGO_PNG_URL } from '@/constants'

interface TeamNotificationEmailProps {
  teamName: string
  userName: string
  userEmail: string
  userFeedback: string
  feedbackDate: string
}
const baseURL = process.env.NEXT_PUBLIC_BASE_URL!
const logoURL = LOGO_PNG_URL

export default function TeamNotificationEmail({
  teamName = 'SweetBeasts Team',
  userName = 'SweetUser',
  userEmail = 'user@example.com',
  userFeedback = 'This is a default feedback message.',
  feedbackDate = new Date().toLocaleDateString(),
}: TeamNotificationEmailProps): JSX.Element {
  return (
    <Html>
      <Head>
        <title>Team Notification</title>
      </Head>
      <Preview>New Feedback from {userName}</Preview>
      <Tailwind>
        <Body className="bg-white-100">
          <Container className="mx-auto max-w-lg rounded-lg bg-pink-100 p-6">
            <Section className="text-center">
              <Img
                src={logoURL}
                alt="SweetBeasts Logo"
                width="120"
                className="mx-auto"
              />
              <Heading className="my-4 text-3xl font-bold text-black">
                New Feedback for {teamName}
              </Heading>
              <Text className="my-2 text-xl text-black">Hi Team,</Text>
              <Text className="text-lg text-black">
                You have received new feedback from {userName} ({userEmail}) on{' '}
                {feedbackDate}.
              </Text>
              <Section className="my-4 rounded bg-white p-4">
                <Heading className="text-2xl font-bold text-black">
                  Feedback
                </Heading>
                <Text className="mt-2 text-base text-black">
                  {userFeedback}
                </Text>
              </Section>
            </Section>
            <Hr className="my-4 border-pink-300" />
            <Text className="text-sm text-black">
              Please review the feedback and take necessary actions.
            </Text>
            <Text className="my-2 text-xs text-gray-400">
              © {new Date().getFullYear()} SweetBeasts. All rights reserved.
            </Text>
            <Section className="mt-6 text-center">
              <Link
                href={`${baseURL}/privacy-policy`}
                className="mx-4 text-pink-500 underline"
              >
                Privacy Policy
              </Link>
              <Link
                href={`${baseURL}/terms-of-service`}
                className="mx-4 text-pink-500 underline"
              >
                Terms of Service
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
