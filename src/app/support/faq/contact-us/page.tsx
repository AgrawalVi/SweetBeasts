// pages/contact.tsx
import Head from 'next/head';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="flex h-screen w-screen flex-grow flex-col items-center justify-center space-y-4 bg-gray-100">
      <Head>
        <title>Contact Us - SweetBeasts</title>
        <meta name="description" content="Contact SweetBeasts through Instagram, Discord, and Gmail." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-lg p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
        <p className="text-center mb-6">Have a question or feedback for us? We'd love to hear from you!</p>

        <div className="flex justify-center space-x-4">
          <a href="https://www.instagram.com/sweetbeastsshop/?igsh=MWs4NXFrNzFrZndweA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium rounded-lg shadow-md transition duration-300 ease-in-out">
            <Image src="/instagram-icon.png" alt="Instagram" width={20} height={20} className="mr-2" />
            Instagram
          </a>
          <a href="https://discord.gg/Rf4AecyDnB" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg shadow-md transition duration-300 ease-in-out">
            <Image src="/discord-icon.png" alt="Discord" width={20} height={20} className="mr-2" />
            Discord
          </a>
          <a href="mailto:account@sweetbeasts.shop" className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg shadow-md transition duration-300 ease-in-out">
            <Image src="/gmail-icon.png" alt="Gmail" width={20} height={20} className="mr-2" />
            Gmail
          </a>
        </div>

        <p className="text-center text-gray-600 mt-4">We typically respond within 24 hours during business days.</p>
      </div>
    </div>
  );
}


