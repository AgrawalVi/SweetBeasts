"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { WobbleCard } from "@/components/aceternity/wobble-card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { IconBrandDiscord, IconBrandGmail, IconBrandInstagram } from '@tabler/icons-react';

export default function WobbleCardDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderNumber: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending the form data to a backend server
    console.log(formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen flex flex-col">
      <h1 className="text-6xl font-bold text-center mb-12">Contact Us</h1>

      <div className="flex flex-col lg:flex-row w-full h-full">
        <div className="flex-1 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold mb-4">Fill out the form below</h2>
          <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg bg-white shadow-lg rounded-lg p-8 min-h-[500px] lg:min-h-[600px]">
            <div>
              <Label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>
            <div>
              <Label htmlFor="orderNumber" className="block text-lg font-medium text-gray-700">Order Number</Label>
              <Input
                type="text"
                id="orderNumber"
                name="orderNumber"
                value={formData.orderNumber}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <Label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 h-40 lg:h-60"
                required
              />
            </div>
            <div className="mt-4">
              <Button type="submit" className="w-full bg-blue-500 text-white text-lg font-medium rounded-lg p-3 hover:bg-blue-600">
                Send Message
              </Button>
            </div>
          </form>
        </div>

        <div className="flex flex-col items-center justify-center mx-8">
          <div className="border-r-2 border-gray-300 h-full"></div>
          <div className="mx-4 text-gray-700 font-semibold">OR</div>
          <div className="border-r-2 border-gray-300 h-full"></div>
        </div>

        <div className="flex-1 flex flex-col space-y-2 overflow-hidden">
          <WobbleCard containerClassName="flex-1 bg-red-500">
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-center text-base md:text-xl lg:text-3xl font-semibold text-white">
                <IconBrandGmail size={60} strokeWidth={2} color={'#f5f5f5'} />
              </h2>
              <p className="mt-2 max-w-[20rem] text-center text-base text-gray-200">
                Contact us via email at account@sweetbeasts.shop for inquiries.
              </p>
              <a href="mailto:account@sweetbeasts.shop" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg shadow-md transition duration-300 ease-in-out">
                <IconBrandGmail size={20} strokeWidth={2} color={'#f5f5f5'} className="mr-2"/>
                Send Email
              </a>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="flex-1 bg-indigo-800">
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-center text-base md:text-xl lg:text-3xl font-semibold text-white">
                <IconBrandDiscord size={60} strokeWidth={2} color={'#f5f5f5'} />
              </h2>
              <p className="mt-2 max-w-[20rem] text-center text-base text-gray-200">
                Join our Discord community to chat with other SweetBeasts fans.
              </p>
              <a href="https://discord.gg/Rf4AecyDnB" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg shadow-md transition duration-300 ease-in-out">
                <IconBrandDiscord size={20} strokeWidth={2} color={'#f5f5f5'} className="mr-2"/>
                Join Discord
              </a>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="flex-1 bg-pink-500">
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-center text-base md:text-xl lg:text-3xl font-semibold text-white">
                <IconBrandInstagram size={60} strokeWidth={2} color={'#f5f5f5'} />
              </h2>
              <p className="mt-2 max-w-[20rem] text-center text-base text-gray-200">
                Follow us on Instagram for updates and behind-the-scenes content.
              </p>
              <a href="https://www.instagram.com/sweetbeastsshop/?igsh=MWs4NXFrNzFrZndweA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium rounded-lg shadow-md transition duration-300 ease-in-out">
                <IconBrandInstagram size={20} strokeWidth={2} color={'#f5f5f5'} className="mr-2"/>
                Follow on Instagram
              </a>
            </div>
          </WobbleCard>
        </div>
      </div>
    </div>
  );
}
