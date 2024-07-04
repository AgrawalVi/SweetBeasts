import React from 'react'
import {
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

export function TwoFactorEmail() {
  return (
    <Html>
      <Head>
        <title>Two-Factor Authentication Required</title>
      </Head>
      <Body>
        <Container>
          <Section>
            <Img
              src="https://your-company-logo-url.com/logo.png"
              alt="Company Logo"
              width="200"
            />
            <Heading>Two-Factor Authentication</Heading>
            <Text>
              Hi there,
              <br />
              For your security, we require two-factor authentication. Please
              verify your login attempt by clicking the link below.
            </Text>
            <Link
              href="https://your-authentication-link.com"
              style={{
                background: '#0056b3',
                color: '#fff',
                padding: '12px 20px',
                borderRadius: '5px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Verify
            </Link>
            <Hr />
            <Text
              style={{ color: '#777', fontSize: '14px', lineHeight: '20px' }}
            >
              If you didn't request this verification, please ignore this email
              or contact support if you have any questions.
            </Text>
            <Text style={{ fontSize: '12px', color: '#999' }}>
              © {new Date().getFullYear()} Your Company Name. All rights
              reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export function ResetPasswordEmail() {
  return (
    <Html>
      <Head>
        <title>Password Reset Request</title>
      </Head>
      <Body>
        <Container>
          <Section>
            <Img
              src="https://your-company-logo-url.com/logo.png"
              alt="Company Logo"
              width="200"
            />
            <Heading className="text-center text-3xl font-bold">
              Password Reset
            </Heading>
            <Text className="mt-4 text-base leading-normal text-gray-600">
              Hello,
              <br />
              You recently requested to reset your password for your account.
              Click the button below to reset it.
            </Text>
            <Link
              href="https://your-password-reset-link.com"
              className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Reset Your Password
            </Link>
            <Hr className="my-4" />
            <Text className="text-sm text-gray-500">
              If you did not request a password reset, please ignore this email
              or contact support if you have any concerns.
            </Text>
            <Text className="text-sm text-gray-500">
              The link is only valid for 24 hours for security reasons.
            </Text>
            <Text className="text-xs text-gray-400">
              © {new Date().getFullYear()} Your Company Name. All rights
              reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export function TwoFactorAuthenticationEmail() {
  return (
    <Html>
      <Head>
        <title>Two-Factor Authentication Verification</title>
      </Head>
      <Body>
        <Container>
          <Section>
            <Img
              src="https://your-company-logo-url.com/logo.png"
              alt="Company Logo"
              width="200"
            />
            <Heading className="text-center text-3xl font-bold">
              Verify Your Identity
            </Heading>
            <Text className="mt-4 text-base leading-normal text-gray-600">
              Hello,
              <br />
              We've received a request to access your account from a new device.
              Please verify your identity by clicking the button below.
            </Text>
            <Link
              href="https://your-two-factor-auth-link.com"
              className="mt-4 inline-block rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
            >
              Verify Identity
            </Link>
            <Hr className="my-4" />
            <Text className="text-sm text-gray-500">
              If you did not initiate this request, please secure your account
              immediately or contact our support team.
            </Text>
            <Text className="text-sm text-gray-500">
              For your security, this verification link will expire in 15
              minutes.
            </Text>
            <Text className="text-xs text-gray-400">
              © {new Date().getFullYear()} Your Company Name. All rights
              reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
