import React from 'react';
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
} from '@react-email/components';
import { OrderWithData } from '@/types';
import { formatPrice } from '@/lib/utils';

interface OrderConfirmedUserEmailProps {
  orderWithData: OrderWithData;
}

export default function OrderConfirmedUserEmail({
  orderWithData,
}: OrderConfirmedUserEmailProps): JSX.Element {
  const lineItems = orderWithData?.lineItems || [];
  const shippingAddress = orderWithData?.ShippingAddress || {};
  const recipientName = shippingAddress.recipientName || 'SweetUser';

  const subtotal = lineItems.reduce((prev, item) => item.pricePerUnitInCents * item.quantity + prev, 0);
  const shipping = orderWithData.shippingPaidInCents || 0;
  const taxes = orderWithData.taxesPaidInCents || 0;
  const total = orderWithData.totalPaidInCents || 0;

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
                src="https://example.com/static/sweetbeasts-logo.png"
                alt="SweetBeasts Logo"
                width="120"
              />
              <Heading className="my-4 text-3xl font-bold text-black">
                Order Confirmed
              </Heading>
              <Text className="my-2 text-xl text-black">Hi {recipientName},</Text>
              <Text className="text-lg text-black">
                Thank you for your order! We have received your order #
                {orderWithData.orderNumber}
              </Text>
              <Text className="text-lg text-black">
                We will send you another email once your order has shipped.
              </Text>
            </Section>
            <Hr className="my-4 border-pink-300" />
            <Section>
              <Heading className="text-2xl font-bold text-black">Order Summary</Heading>
              {lineItems.map((item, index) => (
                <div key={index} className="flex justify-between text-lg text-black my-2">
                  <Text>{item.Product.name}</Text>
                  <Text>{formatPrice(item.pricePerUnitInCents)} x {item.quantity}</Text>
                </div>
              ))}
              <div className="flex w-full justify-between mt-4">
                <Text className="text-lg text-black">Subtotal</Text>
                <Text className="text-lg text-black">{formatPrice(subtotal)}</Text>
              </div>
              <div className="flex w-full justify-between">
                <Text className="text-lg text-black">Shipping</Text>
                <Text className="text-lg text-black">
                  {shipping ? formatPrice(shipping) : 'Free :)'}
                </Text>
              </div>
              {taxes > 0 && (
                <div className="flex w-full justify-between">
                  <Text className="text-lg text-black">Taxes</Text>
                  <Text className="text-lg text-black">{formatPrice(taxes)}</Text>
                </div>
              )}
              <Hr className="my-4 border-pink-300" />
              <div className="flex w-full justify-between">
                <Text className="text-lg font-bold text-black">Total</Text>
                <Text className="text-lg font-bold text-black">{formatPrice(total)}</Text>
              </div>
            </Section>
            <Hr className="my-4 border-pink-300" />
            <Text className="text-sm text-black">
              If you have any questions, feel free to contact us at support@example.com.
            </Text>
            <Text className="my-2 text-xs text-gray-400">
              © {new Date().getFullYear()} SweetBeasts. All rights reserved.
            </Text>
            <Section className="mt-6 text-center">
              <Link
                href="https://example.com/privacy-policy"
                className="mx-4 text-pink-500 underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="https://example.com/terms-of-service"
                className="mx-4 text-pink-500 underline"
              >
                Terms of Service
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
