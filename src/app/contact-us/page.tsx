"use client";
import React from "react";
import { WobbleCard } from "@/components/aceternity/wobble-card";
import { IconBrandDiscord, IconBrandGmail, IconBrandInstagram } from '@tabler/icons-react';
import ContactForm from "@/components/general/contact-us/form";
import { Mail } from 'lucide-react';

export default function WobbleCardDemo() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen flex flex-col">
      <h1 className="text-6xl font-bold text-center mb-12">Contact Us</h1>

      <div className="flex flex-col lg:flex-row w-full flex-grow space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-1 flex flex-col justify-start items-center">
          <h2 className="text-4xl font-bold mb-4">Fill out the form below</h2>
          <ContactForm />
        </div>

        <div className="flex flex-col items-center justify-center mx-8 lg:hidden">
          <div className="border-b-2 border-gray-300 w-full mb-4"></div>
          <div className="text-gray-700 font-semibold">OR</div>
          <div className="border-b-2 border-gray-300 w-full mt-4"></div>
        </div>

        <div className="flex flex-col items-center justify-center mx-8 hidden lg:flex">
          <div className="border-r-2 border-gray-300 h-full"></div>
          <div className="mx-4 text-gray-700 dark:text-white font-semibold">OR</div>
          <div className="border-r-2 border-gray-300 h-full"></div>
        </div>

        <div className="flex-1 flex flex-col space-y-4 lg:space-y-2">
          <WobbleCard containerClassName="flex-1 bg-red-500">
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-center text-base md:text-xl lg:text-3xl font-semibold text-white">
                <Mail size={60} strokeWidth={2} color={'#f5f5f5'} />
                
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