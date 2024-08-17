import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface TwoFactorConfirmationEmailProps {
  firstName: string
  twoFactorCode: string // Make the prop optional
}
const baseURL = process.env.NEXT_PUBLIC_BASE_URL!
const logoURL = process.env.NEXT_PUBLIC_LOGO_PNG_URL!
export default function TwoFactorConfirmationEmail({
  firstName,
  twoFactorCode = '000000',
}: TwoFactorConfirmationEmailProps): JSX.Element {
  return (
    <Html>
      <Head>
        <title>Two-Factor Confirmation Required</title>
        <style>
          {`
            .two-factor-grid {
              margin-top: 1rem;
              text-align: center;
            }
            .two-factor-grid td {
              height: 3rem;
              width: 3rem;
              display: inline-block;
              align-items: center;
              justify-content: center;
              border: 1px solid #4B5563;
              background-color: #FECACA;
              border-radius: 0.375rem;
              font-size: 2rem;
              line-height: 3rem;
              text-align: center;
            }
            @media (max-width: 640px) {
              .two-factor-grid td {
                height: 2rem;
                width: 2rem;
                font-size: 1.25rem;
                line-height: 2rem;
              }
            }
            body {
              background-color: #FFE4E4;
            }
            .container {
              background-color: #FFF5F5;
              padding: 1.5rem;
              border-radius: 0.375rem;
              max-width: 600px;
              margin: 0 auto;
            }
          `}
        </style>
      </Head>
      <Preview>Two-Factor Confirmation - SweetBeasts Account</Preview>
      <Body className="bg-rose-100">
        <Container className="container">
          <Section className="text-center">
            <Img
              src={logoURL}
              alt="SweetBeasts Logo"
              width="120"
              className="mx-auto"
            />
            <Heading className="my-4 text-3xl font-bold text-black">
              Two-Factor Confirmation
            </Heading>
            <Text className="my-2 text-xl text-black">Hi {firstName},</Text>
            <Text className="text-lg text-black">
              Your account is secured with two-factor authentication. Please
              confirm your identity by using the code below.
            </Text>
            <Section className="mt-4">
              <table className="two-factor-grid" align="center">
                <tbody>
                  <tr>
                    {twoFactorCode.split('').map((digit, index) => (
                      <td key={index}>{digit}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </Section>
          </Section>
          <Hr className="my-4 border-pink-300" />
          <Text className="text-center text-sm text-black">
            If you did not request this action, please contact support
            immediately.
          </Text>
          <Text className="my-2 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} SweetBeasts. All rights reserved.
          </Text>
          <Section className="mt-6 text-center text-xs">
            <a
              href={`${baseURL}/privacy-policy`}
              className="mx-4 text-gray-400 underline underline-offset-2"
            >
              Privacy Policy
            </a>
            <a
              href={`${baseURL}/terms-of-service`}
              className="mx-4 text-gray-400 underline underline-offset-2"
            >
              Terms of Service
            </a>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
