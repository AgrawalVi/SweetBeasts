import React from 'react'
import {
  DISCORD_LOGO,
  DISCORD_URL,
  INSTAGRAM_LOGO,
  INSTAGRAM_URL,
  TIKTOK_LOGO,
  TIKTOK_URL,
} from '@/constants'
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL!
const logoURL = 'https://sweetbeasts.shop/sweetbeasts-logo.png'
const logoWithTextURL = 'https://sweetbeasts.shop/sweetbeasts-logo-text.png'

export default function Newsletter(): JSX.Element {
  return (
    <Html>
      <Head>
        <title>SweetBeasts Newsletter</title>
      </Head>
      <Preview>SweetBeasts Newsletter</Preview>
      <Tailwind>
        <Body className="bg-white-100">
          <Container className="mx-auto max-w-lg rounded-lg bg-blue-100 p-6">
            <Section className="px-[32px] pt-[20px]">
              <Row>
                <Column align="center">
                  <Link href={baseURL}>
                    <Img
                      alt="SweetBeasts Logo"
                      height="100"
                      src={logoWithTextURL}
                    />
                  </Link>
                </Column>
              </Row>
            </Section>

            <Row className="mt-[40px]">
              <Column
                align="center"
                className="bg-pink-100 rounded-lg border-white border-2"
              >
                <table className="table-fixed w-full">
                  <tr>
                    <td className="w-1/4 text-center align-middle">
                      <Link
                        href={`${baseURL}/products`}
                        className="text-sm text-black"
                      >
                        Shop All
                      </Link>
                    </td>
                    <td className="w-1/4 text-center align-middle">
                      <Link
                        href={`${baseURL}/new-arrivals`}
                        className="text-sm text-black"
                      >
                        New Arrivals
                      </Link>
                    </td>
                    <td className="w-1/4 text-center align-middle">
                      <Link href={INSTAGRAM_URL} className="text-sm text-black">
                        Social Media
                      </Link>
                    </td>
                    <td className="w-1/4 text-center align-middle">
                      <Link
                        href={`${baseURL}/about-us`}
                        className="text-sm text-black"
                      >
                        About Us
                      </Link>
                    </td>
                  </tr>
                </table>
              </Column>
            </Row>

            {/* Image Section */}
            <Link href={baseURL}>
              <Img
                src="https://www.sweetbeasts.shop/newsletter/new-signup/pogo-leaf-hole-art.webp"
                alt="Sweet Haven Banner"
                className="my-4 w-full rounded-lg"
              />
            </Link>

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
            <Row>
              <Column align="center">
                <Link
                  href={`${baseURL}/find-sweetbeasts`}
                  className="rounded-lg bg-white px-6 py-2 font-semibold text-black"
                >
                  Find Your SweetBeast
                </Link>
              </Column>
            </Row>

            <Section className="my-8 flex flex-col items-center justify-center">
              <Link href={baseURL}>
                <Img
                  src="https://www.sweetbeasts.shop/newsletter/new-signup/pogo-tree.webp"
                  alt="Side Image"
                  className="mx-auto mb-4 w-full max-w-lg rounded-lg" // Ensures image is centered
                />
              </Link>

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

            <Row>
              <Column align="center">
                <Link
                  href={`${baseURL}/products`}
                  className="rounded-lg bg-white px-6 py-2 my-8 font-semibold text-black"
                >
                  View Our Collections
                </Link>
              </Column>
            </Row>

            <Section className="my-8 flex flex-col items-center justify-center">
              <Link href={baseURL}>
                <Img
                  src="https://www.sweetbeasts.shop/newsletter/new-signup/charity-emblem.png"
                  alt="New Collection Image"
                  className="mx-auto w-1/2"
                />
              </Link>
              <Section className="mt-8 flex flex-col items-center rounded-lg bg-blue-200 p-6 text-center text-black">
                <Text className="mb-2 text-lg font-bold">
                  Plushies with a Purpose
                </Text>
                <Text className="max-w-xl text-sm">
                  By choosing SweetBeasts, you’re joining a community dedicated
                  to making the world a better place! A portion of every
                  purchase goes to hunger relief and wildlife conservation
                  charities. Every plushie you take home helps build a more
                  caring, connected, and compassionate world.
                </Text>
              </Section>
            </Section>

            <Row>
              <Column align="center">
                <Link
                  href={`${baseURL}/contributions`}
                  className="rounded-lg bg-white px-6 py-2 my-8 font-semibold text-black"
                >
                  Our Contributions
                </Link>
              </Column>
            </Row>

            {/* Footer Section with Social Media and Support Links */}
            <Section className="mt-8 text-center bg-purple-200 p-6 rounded-lg text-black">
              <Text className="text-lg font-semibold">Join our Community!</Text>
              <Text className="my-2 text-sm">
                Join the SweetBeasts community on Instagram, TikTok, and Discord
                to brighten your days and connect with fellow fans! We’d love to
                hear your feedback and thoughts. Don’t forget to tag us and use
                #mysweetbeast.
              </Text>
            </Section>

            <Section className="text-center mt-12">
              <table className="w-full">
                <tr className="w-full">
                  <td align="center">
                    <Img alt="SweetBeasts Logo" height="64" src={logoURL} />
                  </td>
                </tr>
                <tr className="w-full">
                  <td align="center">
                    <Text className="my-[8px] text-[16px] font-semibold leading-[24px] text-gray-900">
                      SweetBeasts
                    </Text>
                    <Text className="mb-0 mt-[4px] text-[16px] leading-[24px] text-gray-500">
                      Live Sweet
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <Row className="table-cell h-[44px] w-[56px] align-bottom">
                      <Column className="pr-[8px]">
                        <Link href={INSTAGRAM_URL}>
                          <Img
                            alt="Instagram"
                            height="36"
                            src={INSTAGRAM_LOGO}
                          />
                        </Link>
                      </Column>
                      <Column className="pr-[8px]">
                        <Link href={TIKTOK_URL}>
                          <Img alt="TikTok" height="36" src={TIKTOK_LOGO} />
                        </Link>
                      </Column>
                      <Column>
                        <Link href={DISCORD_URL}>
                          <Img alt="Discord" height="36" src={DISCORD_LOGO} />
                        </Link>
                      </Column>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <Text className="my-[8px] text-xs font-semibold leading-[24px] text-gray-500">
                      © 2024 A Wild Bonobo, Inc. All Rights Reserved.
                      <br />
                      SweetBeasts is a trademark of A Wild Bonobo, Inc.
                    </Text>
                    <Text className="my-[8px] text-xs font-semibold leading-[24px] text-gray-500">
                      432 W Gorham St, Madison, WI 53703
                    </Text>
                    <Text className="my-[8px] text-xs font-semibold leading-[24px] text-gray-500">
                      support@sweetbeasts.shop
                    </Text>
                    <Link
                      href={`${baseURL}/unsubscribe`}
                      className="text-blue-500 underline text-[10pt]"
                    >
                      Unsubscribe
                    </Link>
                  </td>
                </tr>
              </table>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
