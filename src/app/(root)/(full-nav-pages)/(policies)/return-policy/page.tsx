"use client";
import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 min-h-screen flex flex-col items-center text-gray-900 dark:text-gray-100">
      <h1 className="text-6xl font-bold text-center mb-12 header-gradient">Return Policy</h1>
      <div className="bg-white dark:bg-black shadow-lg rounded-lg p-8 flex flex-col items-center text-center">
        <p className="mb-4 text-lg">Hello and thank you for choosing SweetBeasts. We want you to be delighted with your purchase, but we understand that sometimes things don't work out as expected. That's why we've made our return process as easy as possible.</p>
        <h2 className="text-2xl font-semibold mb-4 p-gradient">Returns</h2>
        <p className="mb-4">You can return your plushie within 2 weeks (14 days) of delivery for any reason, as long as it's in its original condition with the tags still attached.</p>
        
        <h2 className="text-2xl font-semibold mb-4 p-gradient">Refunds</h2>
        <p className="mb-4">Once we receive your returned plushie and confirm its condition, we will initiate a refund to your original method of payment. Please allow 5-7 business days for the refund to appear in your account.</p>
        
        <h2 className="text-2xl font-semibold mb-4 p-gradient">Shipping</h2>
        <p className="mb-4">You will be responsible for paying for your own shipping costs for returning your plushie. Unfortunately, original shipping and handling charges are non-refundable.</p>
        
        <h2 className="text-2xl font-semibold mb-4 p-gradient">Contact Us</h2>
        <p>If you have any questions about our return process or need assistance with a return, please reach out to our customer service team at <a href="mailto:support@sweetbeasts.shop" className="text-purple-500">support@sweetbeasts.shop</a>.</p>
      </div>
    </div>
  );
};

export default ReturnPolicy;
