'use client'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ReturnPolicy() {
  return (
    <Card className="mx-auto mb-24 flex min-h-[70vh] max-w-4xl flex-col px-4 py-8">
      <CardHeader>
        <CardTitle className="header-gradient text-center text-6xl">
          Return Policy
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-left">
          <p className="mb-4 text-lg">
            Hello and thank you for choosing SweetBeasts. We want you to be
            delighted with your purchase, but we understand that sometimes
            things don't work out as expected. That's why we've made our return
            process as easy as possible.
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
            returning your plushie. Unfortunately, original shipping and
            handling charges are non-refundable.
          </p>

          <h2 className="p-gradient mb-4 text-2xl font-semibold">Contact Us</h2>
          <p>
            If you have any questions about our return process or need
            assistance with a return, please reach out to our customer service
            team at{' '}
            <a
              href="mailto:support@sweetbeasts.shop"
              className="text-purple-500"
            >
              support@sweetbeasts.shop
            </a>
            .
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
