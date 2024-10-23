import React from 'react'
import { LOGO_PNG_URL } from '@/constants'
import { OrderWithData } from '@/types'
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
  Tailwind,
  Text,
} from '@react-email/components'

import { formatPrice } from '@/lib/utils'

interface OrderConfirmedUserEmailProps {
  orderWithData: OrderWithData
}

export default function OrderConfirmedUserEmail({
  orderWithData,
}: OrderConfirmedUserEmailProps): JSX.Element {
  const lineItems = orderWithData?.lineItems || []
  const shippingAddress = orderWithData?.shippingAddress || {}
  const recipientName = shippingAddress.recipientName || 'SweetUser'

  const subtotal = lineItems.reduce(
    (prev, item) => item.pricePerUnitInCents * item.quantity + prev,
    0,
  )
  const shipping = orderWithData.shippingPaidInCents || 0
  const taxes = orderWithData.taxesPaidInCents || 0
  const total = orderWithData.totalPaidInCents || 0
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL!
  const logoURL = LOGO_PNG_URL

  return (
    <Html>
      <Head>
        <title>Order Confirmation</title>
      </Head>
      <Preview>Order Confirmed - SweetBeasts</Preview>
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
                Order Confirmed
              </Heading>
              <Text className="my-2 text-xl text-black">
                Hi {recipientName},
              </Text>
              <Text className="text-lg text-black">
                Thank you for your order! We have received your order #
                {orderWithData.orderNumber}
              </Text>
              <Text className="text-lg text-black">
                You can view your order{' '}
                <Link
                  href={`${baseURL}/order-status?orderToken=${orderWithData.viewOrderToken}`}
                  className="underline underline-offset-2"
                >
                  here
                </Link>
                .
              </Text>
            </Section>
            <Hr className="my-4 border-pink-300" />
            <Section>
              <Heading className="text-2xl font-bold text-black">
                Order Summary
              </Heading>
              {lineItems.map((item, index) => (
                <div
                  key={index}
                  className="my-2 flex justify-between text-lg text-black"
                >
                  <Text className="text-left text-lg text-black">
                    {item.productVariant.parentProduct.name}
                  </Text>
                  <Text
                    className="text-right text-lg text-black"
                    style={{ marginLeft: 'auto' }}
                  >
                    {formatPrice(item.pricePerUnitInCents)} x {item.quantity}
                  </Text>
                </div>
              ))}
              <div className="mt-4 flex justify-between">
                <Text className="text-left text-lg text-black">Subtotal:</Text>
                <Text
                  className="text-right text-lg text-black"
                  style={{ marginLeft: 'auto' }}
                >
                  {formatPrice(subtotal)}
                </Text>
              </div>
              <div className="flex justify-between">
                <Text className="text-left text-lg text-black">Shipping:</Text>
                <Text
                  className="text-right text-lg text-black"
                  style={{ marginLeft: 'auto' }}
                >
                  {shipping ? formatPrice(shipping) : 'Free :)'}
                </Text>
              </div>
              {taxes > 0 && (
                <div className="flex justify-between">
                  <Text className="text-left text-lg text-black">Taxes:</Text>
                  <Text
                    className="text-right text-lg text-black"
                    style={{ marginLeft: 'auto' }}
                  >
                    {formatPrice(taxes)}
                  </Text>
                </div>
              )}
              <Hr className="my-4 border-pink-300" />
              <div className="flex justify-between">
                <Text className="text-left text-lg font-bold text-black">
                  Total:
                </Text>
                <Text
                  className="text-right text-lg font-bold text-black"
                  style={{ marginLeft: 'auto' }}
                >
                  {formatPrice(total)}
                </Text>
              </div>
            </Section>
            <Hr className="my-4 border-pink-300" />
            
            {/* Add Shipping Address Section */}
            <Section>
              <Heading className="text-2xl font-bold text-black">
                Shipping Address
              </Heading>
              <Text className="text-lg text-black">{recipientName}</Text>
              {shippingAddress.addressLine1 && (
                <Text className="text-lg text-black">
                  {shippingAddress.addressLine1}
                </Text>
              )}
              {shippingAddress.addressLine2 && (
                <Text className="text-lg text-black">
                  {shippingAddress.addressLine2}
                </Text>
              )}
              <Text className="text-lg text-black">
                {shippingAddress.city}, {shippingAddress.state}{' '}
                {shippingAddress.zipCode}
              </Text>
            </Section>

            <Hr className="my-4 border-pink-300" />
            <Text className="text-center text-sm text-black">
              If you have any questions, feel free to contact us at
              support@example.com.
            </Text>
            <Text className="my-2 text-center text-xs text-gray-400">
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
