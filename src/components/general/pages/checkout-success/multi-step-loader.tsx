'use client'

import React, { useEffect, useState } from 'react'
import { IconSquareRoundedX } from '@tabler/icons-react'

import { MultiStepLoader as Loader } from '@/components/aceternity/multi-step-loader'

const loadingStates = [
  {
    text: 'Order Received',
  },
  {
    text: 'Charitable Contribution Initiated',
  },
  {
    text: 'Finding Your Plushie',
  },
  {
    text: 'Sweet Haven Rescue Initiated',
  },
  {
    text: 'Preparing for Dispatch',
  },
  {
    text: 'Keep Posted',
  },
  {
    text: 'PS: Follow us on Instagram',
  },
]

export function CheckoutSuccessLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLoading(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    // Clean up the event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  return (
    <>
      {/* Core Loader Modal */}
      <Loader
        loadingStates={loadingStates}
        loading={loading}
        setLoading={setLoading}
        duration={1000}
      />

      {loading && (
        <button
          className="fixed right-4 top-4 z-[120] text-black transition-all hover:opacity-50 dark:text-white"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </>
  )
}
