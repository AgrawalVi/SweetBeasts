import React from 'react'
import { WobbleCard } from '@/components/aceternity/wobble-card'
import { IconBrandDiscord, IconBrandInstagram } from '@tabler/icons-react'
import ContactForm from '@/components/general/pages/contact-us/contact-us-form'
import { Mail } from 'lucide-react'
import Link from 'next/link'

import { INSTAGRAM_URL, DISCORD_URL, SUPPORT_EMAIL_URL } from '@/constants'

export default function WobbleCardDemo() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col px-4 py-8">
      <h1 className="header-gradient mb-12 text-center text-6xl font-bold sm:text-7xl">
        Contact Us
      </h1>
      <div className="flex w-full flex-grow flex-col space-y-8 xl:flex-row xl:space-x-8 xl:space-y-0">
        <div className="flex flex-1 flex-col items-center justify-start">
          <h2 className="text-gradient mb-4 text-center text-4xl font-bold">
            Want to get in Touch?
          </h2>
          <h2 className="text-gradient mb-4 text-center text-4xl font-bold">
            Fill out the form below
          </h2>
          <ContactForm />
        </div>

        <div className="relative mx-8 flex flex-col items-center justify-center">
          <div className="absolute inset-0 hidden h-full flex-col items-center lg:flex">
            <div className="h-full border-r-2 border-muted"></div>
          </div>
          <div className="relative z-10 bg-background px-2 text-muted-foreground">
            OR
          </div>
          <div className="absolute inset-0 flex w-full items-center justify-center lg:hidden">
            <div className="w-full border-b-2 border-muted"></div>
            <div className="relative z-10 bg-background px-2 text-muted-foreground">
              OR
            </div>
            <div className="w-full border-b-2 border-muted"></div>
          </div>
        </div>

        <div className="flex flex-1 flex-col space-y-4">
          <WobbleCard containerClassName="flex-1 bg-red-500 sm:w-[30rem]">
            <div className="flex h-full flex-col items-center justify-center">
              <h2 className="text-center text-base font-semibold text-white md:text-xl lg:text-3xl">
                <Mail size={60} strokeWidth={2} color={'#f5f5f5'} />
              </h2>
              <p className="mt-2 max-w-[20rem] text-center text-base text-gray-200">
                Contact us via email at account@sweetbeasts.shop for inquiries.
              </p>
              <Link
                href={SUPPORT_EMAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-md transition duration-300 ease-in-out hover:bg-red-700"
              >
                <Mail
                  size={20}
                  strokeWidth={2}
                  color={'#f5f5f5'}
                  className="mr-2"
                />
                Send Email
              </Link>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="flex-1 bg-indigo-800 sm:w-[30rem]">
            <div className="flex h-full flex-col items-center justify-center">
              <h2 className="text-center text-base font-semibold text-white md:text-xl lg:text-3xl">
                <IconBrandDiscord size={60} strokeWidth={2} color={'#f5f5f5'} />
              </h2>
              <p className="mt-2 max-w-[20rem] text-center text-base text-gray-200">
                Open a support ticket with us on Discord.
              </p>
              <Link
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-md transition duration-300 ease-in-out hover:bg-indigo-700"
              >
                <IconBrandDiscord
                  size={20}
                  strokeWidth={2}
                  color={'#f5f5f5'}
                  className="mr-2"
                />
                Join Discord
              </Link>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="flex-1 bg-pink-500 sm:w-[30rem]">
            <div className="flex h-full flex-col items-center justify-center">
              <h2 className="text-center text-base font-semibold text-white md:text-xl lg:text-3xl">
                <IconBrandInstagram
                  size={60}
                  strokeWidth={2}
                  color={'#f5f5f5'}
                />
              </h2>
              <p className="mt-2 max-w-[20rem] text-center text-base text-gray-200">
                Send us a message on Instagram
              </p>
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center rounded-lg bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow-md transition duration-300 ease-in-out hover:bg-pink-700"
              >
                <IconBrandInstagram
                  size={20}
                  strokeWidth={2}
                  color={'#f5f5f5'}
                  className="mr-2"
                />
                Our Instagram
              </Link>
            </div>
          </WobbleCard>
        </div>
      </div>
    </div>
  )
}
