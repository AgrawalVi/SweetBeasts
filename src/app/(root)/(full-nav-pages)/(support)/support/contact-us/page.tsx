'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react'
import { WobbleCard } from '@/components/aceternity/wobble-card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  IconBrandDiscord,
  IconBrandGmail,
  IconBrandInstagram,
} from '@tabler/icons-react'

export default function WobbleCardDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here, such as sending the form data to a backend server
    console.log(formData)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-8 text-center text-6xl font-bold">Contact Us</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <WobbleCard containerClassName="col-span-1 lg:col-span-1 min-h-[350px] lg:min-h-[500px] bg-red-500">
          <div className="flex h-full flex-col items-center justify-center">
            <h2 className="text-center text-base font-semibold text-white md:text-xl lg:text-3xl">
              <IconBrandGmail size={100} strokeWidth={2} color={'#f5f5f5'} />
            </h2>
            <p className="mt-4 max-w-[26rem] text-center text-base text-gray-200">
              Contact us via email at account@sweetbeasts.shop for inquiries.
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-4 w-full space-y-4 px-4"
            >
              <div>
                <Label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="message"
                  className="block text-sm font-medium text-white"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-white text-green-500">
                Send Message
              </Button>
            </form>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-1 min-h-[350px] lg:min-h-[500px] bg-indigo-800">
          <div className="flex h-full flex-col items-center justify-start pt-4">
            <h2 className="text-center text-base font-semibold text-white md:text-xl lg:text-3xl">
              <IconBrandDiscord size={100} strokeWidth={2} color={'#f5f5f5'} />
            </h2>
            <p className="mt-16 max-w-[26rem] text-center text-base text-gray-200">
              Join our Discord community to chat with other SweetBeasts fans.
            </p>
            <a
              href="https://discord.gg/Rf4AecyDnB"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-16 inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-md transition duration-300 ease-in-out hover:bg-indigo-700"
            >
              {' '}
              {/* Added mt-16 */}
              <IconBrandDiscord
                size={32}
                strokeWidth={2}
                color={'#f5f5f5'}
                className="mr-2"
              />
              Join Discord
            </a>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-1 min-h-[350px] lg:min-h-[500px] bg-pink-500">
          <div className="flex h-full flex-col items-center justify-start pt-4">
            <h2 className="text-center text-base font-semibold text-white md:text-xl lg:text-3xl">
              <IconBrandInstagram
                size={100}
                strokeWidth={2}
                color={'#f5f5f5'}
              />
            </h2>
            <p className="mt-16 max-w-[26rem] text-center text-base text-gray-200">
              Follow us on Instagram for updates and behind-the-scenes content.
            </p>
            <a
              href="https://www.instagram.com/sweetbeastsshop/?igsh=MWs4NXFrNzFrZndweA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-16 inline-flex items-center rounded-lg bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow-md transition duration-300 ease-in-out hover:bg-pink-700"
            >
              {' '}
              {/* Added mt-16 */}
              <IconBrandInstagram
                size={32}
                strokeWidth={2}
                color={'#f5f5f5'}
                className="mr-2"
              />
              Follow on Instagram
            </a>
          </div>
        </WobbleCard>
      </div>
    </div>
  )
}
