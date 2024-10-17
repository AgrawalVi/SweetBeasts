import React from 'react'
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'
import {
  IconBrandDiscord,
  IconBrandInstagram,
  IconBrandTiktok,
} from '@tabler/icons-react'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL!
const logoURL = 'https://sweetbeasts.shop/sweetbeasts-logo.png'

export default function Newsletter(): JSX.Element {
  return (
    <Html>
      <Head>
        <title>SweetBeasts NewsLetter</title>
      </Head>
      <Preview>SweetBeasts Newsletter</Preview>
      <Tailwind>
        <Body className="bg-white-100">
          <Container className="mx-auto max-w-lg rounded-lg bg-blue-100 p-6">
            <Section className="text-center">
              <Img
                src={logoURL}
                alt="SweetBeasts Logo"
                width="120"
                className="mx-auto"
              />

              {/* Mini Dashboard Section */}
              <Section className="mx-auto flex w-full justify-center rounded-lg bg-pink-100 p-2 font-serif">
                <Link
                  href={`${baseURL}/products`}
                  className="mx-2 text-center text-sm text-black"
                >
                  Shop All
                </Link>
                <Link
                  href={`${baseURL}/new-arrivals`}
                  className="mx-2 text-center text-sm text-black"
                >
                  New Arrivals
                </Link>
                <Link
                  href={`${baseURL}/`}
                  className="mx-2 text-center text-sm text-black"
                >
                  Social Media
                </Link>
                <Link
                  href={`${baseURL}/about-us`}
                  className="mx-2 text-center text-sm text-black"
                >
                  About Us
                </Link>
              </Section>
            </Section>

            {/* Image Section */}
            <Img
              src="https://www.sweetbeasts.shop/newsletter/new-signup/pogo-leaf-hole-art.webp"
              alt="Sweet Haven Banner"
              className="my-4 w-full rounded-lg"
            />

            {/* Centered Text Below the Image */}
            <Section className="text-center">
              <Text className="text-lg font-bold text-black">
                YOU'VE BEEN PLANTED IN SWEET HAVEN
              </Text>
              <Text className="text-sm text-black">
                LET THE MYSTICAL JOURNEY BEGIN!
              </Text>
            </Section>

            {/* Centered Find Your SweetBeast Button */}
            <Section className="mt-6 flex w-full flex-col items-center justify-center text-center">
              <Link
                href={`${baseURL}/find-sweetbeasts`}
                className="inline-block rounded-lg bg-white px-6 py-2 font-semibold text-black"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 'fit-content',
                }} // Ensures the button is only as wide as its content
              >
                Find Your SweetBeast
              </Link>
            </Section>

            <Section className="mt-8 flex flex-col items-center justify-center">
              {/* Left Side - Image */}
              <Img
                src="https://www.sweetbeasts.shop/newsletter/new-signup/pogo-tree.webp"
                alt="Side Image"
                className="mx-auto mb-4 w-full max-w-lg rounded-lg" // Ensures image is centered
              />

              {/* Right Side - Text Box */}
              <Section className="w-full rounded-lg bg-pink-100 p-4 text-center text-black">
                <Text className="mb-2 text-center text-lg font-semibold">
                  Your Cuddly Escape to Comfort
                </Text>
                <Text className="text-center text-sm">
                  Time to find your Sweet Beast... With a comforting feel, a
                  furry companion is waiting for you. Hugs and cuddles to
                  brighten up your day! Your beast will be loyal to you and only
                  you as you both set off on adventure. Are you ready?
                </Text>
              </Section>
            </Section>

            {/* Centered View Our Collections Button */}
            <Section className="mt-6 flex w-full flex-col items-center justify-center text-center">
              <Link
                href={`${baseURL}/products`}
                className="inline-block rounded-lg bg-white px-6 py-2 font-semibold text-black"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 'fit-content',
                }} // Ensures the button is only as wide as its content
              >
                View Our Collections
              </Link>
            </Section>

            {/* "Our Contributions" Section */}
            <Section className="mt-8 flex flex-col items-center rounded-lg bg-blue-200 p-6 text-center text-black">
              <Text className="mb-2 text-lg font-bold">
                Plushies with a Purpose
              </Text>
              <Text className="max-w-xl text-sm">
                By choosing SweetBeasts, you’re joining a community dedicated to
                making the world a better place! A portion of every purchase
                goes to hunger relief and wildlife conservation charities. Every
                plushie you take home helps build a more caring, connected, and
                compassionate world.
              </Text>
            </Section>

            <Section className="mt-6 flex w-full flex-col items-center justify-center text-center">
              <Img
                src="https://www.sweetbeasts.shop/newsletter/new-signup/charity-emblem.png"
                alt="New Collection Image"
                className="mx-auto mb-4 w-1/2" // Ensures image is centered
              />
              <Link
                href={`${baseURL}/contributions`}
                className="inline-block rounded-lg bg-white px-6 py-2 font-semibold text-black"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 'fit-content',
                }} // Ensures the button is only as wide as its content
              >
                Our Contributions
              </Link>
            </Section>

            {/* Footer Section with Social Media and Support Links */}
            <Section className="mt-8 text-center">
              <Text className="text-lg font-semibold">Join our Community!</Text>
              <Text className="my-2 text-sm">
                Join the SweetBeasts community on Instagram, TikTok, and Discord
                to brighten your days and connect with fellow fans! We’d love to
                hear your feedback and thoughts. Don’t forget to tag us and use
                #mysweetbeast.
              </Text>
              <Section className="mt-4 flex justify-center space-x-4">
                <Link
                  href="https://www.instagram.com/sweetbeastsusa"
                  className="text-black"
                >
                  <IconBrandInstagram size={30} />
                </Link>
                <Link
                  href="https://discord.gg/sweetbeasts"
                  className="text-black"
                >
                  <IconBrandDiscord size={30} />
                </Link>
                <Link
                  href="https://www.tiktok.com/@sweetbeasts"
                  className="text-black"
                >
                  <IconBrandTiktok size={30} />
                </Link>
              </Section>
            </Section>

            {/* Footer Section with Copyright and Unsubscribe */}
            <Section className="mt-8 text-center text-xs text-gray-500">
              <Text>© 2024 SweetBeasts, All Rights Reserved</Text>
              <Text>432 W Gorham St, Madison, WI 53703</Text>
              <Link
                href={`${baseURL}/unsubscribe`}
                className="text-blue-500 underline"
              >
                Unsubscribe
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
