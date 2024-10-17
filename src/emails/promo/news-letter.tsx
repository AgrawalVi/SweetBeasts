import React from 'react'
import {
  Tailwind,
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import { IconBrandDiscord, IconBrandInstagram, IconBrandTiktok } from '@tabler/icons-react'

interface NewsletterProps {
  firstName: string
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL!
const logoURL = "https://sweetbeasts.shop/sweetbeasts-logo.png"

export default function Newsletter({
  firstName,
}: NewsletterProps): JSX.Element {
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
              <Img src={logoURL} alt="SweetBeasts Logo" width="120" className="mx-auto" />
              
              {/* Mini Dashboard Section */}
              <Section className="flex justify-center bg-pink-100 p-2 rounded-lg w-full mx-auto font-serif">
                <Link href={`${baseURL}/products`} className="mx-2 text-black text-sm text-center">
                  Shop All
                </Link>
                <Link href={`${baseURL}/new-arrivals`} className="mx-2 text-black text-sm text-center">
                  New Arrivals
                </Link>
                <Link href={`${baseURL}/`} className="mx-2 text-black text-sm text-center">
                  Social Media
                </Link>
                <Link href={`${baseURL}/about-us`} className="mx-2 text-black text-sm text-center">
                  About Us
                </Link>
              </Section>

            </Section>

            {/* Image Section */}
            <Img src="https://www.sweetbeasts.shop/newsletter/new-signup/pogo-leaf-hole-art.webp" alt="Sweet Haven Banner" className="w-full rounded-lg my-4" />

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
            <Section className="flex justify-center items-center flex-col text-center w-full mt-6">
              <Link
                href={`${baseURL}/find_sweetbeasts`}
                className="inline-block bg-white text-black font-semibold py-2 px-6 rounded-lg"
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 'fit-content' }}  // Ensures the button is only as wide as its content
              >
                Find Your SweetBeast
              </Link>
            </Section>

            <Section className="flex flex-col justify-center items-center mt-8">
              {/* Left Side - Image */}
              <Img 
                src="https://www.sweetbeasts.shop/newsletter/new-signup/pogo-tree.webp" 
                alt="Side Image" 
                className="w-full max-w-lg rounded-lg mb-4 mx-auto"  // Ensures image is centered
              />

              {/* Right Side - Text Box */}
              <Section className="w-full bg-pink-100 text-black p-4 rounded-lg text-center">
                <Text className="text-center text-lg font-semibold mb-2">
                  Your Cuddly Escape to Comfort
                </Text>
                <Text className="text-center text-sm">
                  Time to find your Sweet Beast... With a comforting feel, a furry companion is waiting for you. Hugs and cuddles to brighten up your day! Your beast will be loyal to you and only you as you both set off on adventure. Are you ready?
                </Text>
              </Section>
            </Section>

            {/* Centered View Our Collections Button */}
            <Section className="flex justify-center items-center flex-col text-center w-full mt-6">
              <Link
                href={`${baseURL}/products`}
                className="inline-block bg-white text-black font-semibold py-2 px-6 rounded-lg"
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 'fit-content' }}  // Ensures the button is only as wide as its content
              >
                View Our Collections
              </Link>
            </Section>

            {/* "Our Contributions" Section */}
            <Section className="bg-blue-200 text-black p-6 rounded-lg mt-8 flex flex-col items-center text-center">
              <Text className="text-lg font-bold mb-2">
                Plushies with a Purpose
              </Text>
              <Text className="text-sm max-w-xl">
                By choosing SweetBeasts, you’re joining a community dedicated to making the world a better place!
                A portion of every purchase goes to hunger relief and wildlife conservation charities.
                Every plushie you take home helps build a more caring, connected, and compassionate world.
              </Text>
            </Section>

            <Section className="flex justify-center items-center flex-col text-center w-full mt-6">
              <Img 
                src="https://www.sweetbeasts.shop/newsletter/new-signup/charity-emblem.png" 
                alt="New Collection Image" 
                className="w-1/2 mb-4 mx-auto"  // Ensures image is centered
              />
              <Link
                href={`${baseURL}/contributions`}
                className="inline-block bg-white text-black font-semibold py-2 px-6 rounded-lg"
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 'fit-content' }}  // Ensures the button is only as wide as its content
              >
                Our Contributions
              </Link>
            </Section>

            {/* Footer Section with Social Media and Support Links */}
            <Section className="text-center mt-8">
              <Text className="text-lg font-semibold">Join our Community!</Text>
              <Text className="text-sm my-2">
                Join the SweetBeasts community on Instagram, TikTok, and Discord to brighten your days and connect with fellow fans! We’d love to hear your feedback and thoughts. Don’t forget to tag us and use #mysweetbeast.
              </Text>
              <Section className="flex justify-center space-x-4 mt-4">
                <Link href="https://www.instagram.com/sweetbeastsusa" className="text-black">
                  <IconBrandInstagram size={30} />
                </Link>
                <Link href="https://discord.gg/sweetbeasts" className="text-black">
                  <IconBrandDiscord size={30} />
                </Link>
                <Link href="https://www.tiktok.com/@sweetbeasts" className="text-black">
                  <IconBrandTiktok size={30} />
                </Link>
              </Section>
            </Section>

            {/* Footer Section with Copyright and Unsubscribe */}
            <Section className="text-center text-xs mt-8 text-gray-500">
              <Text>© 2024 SweetBeasts, All Rights Reserved</Text>
              <Text>432 W Gorham St, Madison, WI 53703</Text>
              <Link
                href={`${baseURL}/unsubscribe?email={email}`}
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
