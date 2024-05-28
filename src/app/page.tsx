'use client';

import { createPaymentIntent } from '@/actions/stripe/payment-intent';
import React from 'react'

export default function Home() {

  async function createPayment() {
    createPaymentIntent(500, "usd").then(response => console.log(response)).catch(error => console.error(error))
  }

  return (
    <main className="flex flex-col items-start justify-start min-h-screen p-4 bg-[hsl(var(--background))] gap-4">
      <button onClick={() => {createPayment()}}>
        create payment intent
      </button>
    </main>
  );
}