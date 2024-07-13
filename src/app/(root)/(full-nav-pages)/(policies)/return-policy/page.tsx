'use client'
import React from 'react'

const ReturnPolicy = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center px-4 py-8 text-gray-900 dark:text-gray-100">
      <h1 className="header-gradient mb-12 text-center text-6xl font-bold">
        Return Policy
      </h1>
      <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-lg dark:bg-black">
        <p className="mb-4 text-lg">
          Hello and thank you for choosing SweetBeasts. We want you to be
          delighted with your purchase, but we understand that sometimes things
          don't work out as expected. That's why we've made our return process
          as easy as possible.
        </p>
        <h2 className="p-gradient mb-4 text-2xl font-semibold">Returns</h2>
        <p className="mb-4">
          You can return your plushie within 2 weeks (14 days) of delivery for
          any reason, as long as it's in its original condition with the tags
          still attached.
        </p>

        <h2 className="p-gradient mb-4 text-2xl font-semibold">Refunds</h2>
        <p className="mb-4">
          Once we receive your returned plushie and confirm its condition, we
          will initiate a refund to your original method of payment. Please
          allow 5-7 business days for the refund to appear in your account.
        </p>

        <h2 className="p-gradient mb-4 text-2xl font-semibold">Shipping</h2>
        <p className="mb-4">
          You will be responsible for paying for your own shipping costs for
          returning your plushie. Unfortunately, original shipping and handling
          charges are non-refundable.
        </p>

        <h2 className="p-gradient mb-4 text-2xl font-semibold">Contact Us</h2>
        <p>
          If you have any questions about our return process or need assistance
          with a return, please reach out to our customer service team at{' '}
          <a href="mailto:support@sweetbeasts.shop" className="text-purple-500">
            support@sweetbeasts.shop
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default ReturnPolicy
