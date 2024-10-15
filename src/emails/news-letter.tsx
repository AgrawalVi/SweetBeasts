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
import { LOGO_PNG_URL, INSTAGRAM_URL, DISCORD_URL, SUPPORT_EMAIL_URL } from '@/constants'

interface NewsletterProps {
  firstName: string
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL!
const logoURL = LOGO_PNG_URL

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
              <Section className="flex justify-center bg-pink-100 p-2 rounded-lg max-w-sm mx-auto font-serif">
                <Link href={`${baseURL}/shop-all`} className="mx-2 text-black text-sm">
                  Shop All
                </Link>
                <Link href={`${baseURL}/new-arrivals`} className="mx-2 text-black text-sm">
                  New Arrivals
                </Link>
                <Link href={`${baseURL}/social-media`} className="mx-2 text-black text-sm">
                  Social Media
                </Link>
                <Link href={`${baseURL}/about-us`} className="mx-2 text-black text-sm">
                  About Us
                </Link>
              </Section>

              {/* Image Section */}
              <Img src="https://your-image-url.com/banner-image.png" alt="Sweet Haven Banner" className="w-full rounded-lg my-4" />

              {/* Text Below the Image */}
              <Text className="text-lg font-bold text-black">
                YOU'VE BEEN PLANTED IN SWEET HAVEN
              </Text>
              <Text className="text-sm text-black">
                LET THE MYSTICAL JOURNEY BEGIN!
              </Text>

              {/* Centered View Collections Button */}
              <Section className="mt-4 flex justify-center">
                <Link
                  href={`${baseURL}/collections`}
                  className="inline-block bg-white text-black font-semibold py-2 px-6 rounded-lg mx-auto"
                >
                  Find Your SweetBeast
                </Link>
              </Section>

              {/* Image and Text Box Section */}
              <Section className="flex justify-between items-start mt-8">
                {/* Left Side - Image */}
                <Img src="https://your-image-url.com/side-image.png" alt="Side Image" className="w-1/2 h-auto rounded-lg" />

                {/* Right Side - Text Box aligned to the right */}
                <Section className="w-1/2 bg-pink-100 text-black p-4 rounded-lg h-full flex items-start justify-start ml-auto">
                  <Text className="text-md font-semibold mb-2">
                    Your Cuddly Escape to Comfort
                  </Text>
                  <Text className="text-sm">
                    Time to find your Sweet Beast... With a comforting feel, a furry companion is waiting for you. Hugs and cuddles to brighten up your day! Your beast will be loyal to you and only you as you both set off on adventure. Are you ready?
                  </Text>
                </Section>
              </Section>

              {/* Text Box on Left and Image on Right */}
              <Section className="flex justify-between items-start mt-8">
                {/* Left Side - Text Box */}
                <Section className="mt-4 ml-40">
                  <Link
                    href={`${baseURL}/collections`}
                    className="inline-block bg-white text-black font-semibold py-2 px-6 rounded-lg mx-auto"
                  >
                    View Our Collections
                  </Link>
                </Section>

                {/* Right Side - Image */}
                <Img src="https://your-image-url.com/new-collection.png" alt="New Collection Image" className="w-1/2 h-auto rounded-lg" />
              </Section>

              {/* "Our Contributions" Section */}
              <Section className="bg-blue-200 text-black p-6 rounded-lg mt-8">
                <Text className="text-lg font-bold mb-2">
                  Plushies with a Purpose
                </Text>
                <Text className="text-sm">
                  By choosing SweetBeasts, you’re joining a community dedicated to making the world a better place!

                  A portion of every purchase goes to hunger relief and wildlife conservation charities.

                  Every plushie you take home helps build a more caring, connected, and compassionate world.
                </Text>
              </Section>
              <Section className="mt-4 flex justify-center">
                <Link
                  href={`${baseURL}/collections`}
                  className="inline-block bg-white text-black font-semibold py-2 px-6 rounded-lg mx-auto"
                >
                  Our Contributions
                </Link>
              </Section>

              {/* Text Box on the Right with Social Media and Support Links */}
              <Section className="flex justify-between items-start mt-8">
                {/* Left is empty, so we can use a spacer */}
                <Section className="w-1/2"></Section>

                {/* Right Side - Text Box */}
                <Section className="w-1/2 bg-white text-black p-4 rounded-lg h-full">
                  <Text className="text-md font-semibold mb-2">
                    Join our Community!
                  </Text>
                  <Text className="text-sm">
                    Join the SweetBeasts community on Instagram, TikTok, and Discord to brighten your days and connect with fellow fans! We’d love to hear your feedback and thoughts. Don’t forget to tag us and use #mysweetbeast – we can’t wait to see your posts!
                  </Text>

                  {/* Social Media Links */}
                  <Section className="mt-4">
                    <Link href={INSTAGRAM_URL} className="text-pink-600 underline mr-4">
                      Instagram
                    </Link>
                    <Link href={DISCORD_URL} className="text-blue-600 underline mr-4">
                      Discord
                    </Link>
                    <Link href={`mailto:${SUPPORT_EMAIL_URL}`} className="text-green-600 underline">
                      Support
                    </Link>
                  </Section>
                </Section>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
