'use client'

import React, { useState } from 'react'
import { MultiStepLoader as Loader } from '@/components/aceternity/multi-step-loader'
import { IconSquareRoundedX } from '@tabler/icons-react'

const loadingStates = [
  {
    text: 'Buying a condo',
  },
  {
    text: 'Travelling in a flight',
  },
  {
    text: 'Meeting Tyler Durden',
  },
  {
    text: 'He makes soap',
  },
  {
    text: 'We goto a bar',
  },
  {
    text: 'Start a fight',
  },
  {
    text: 'We like it',
  },
  {
    text: 'Welcome to F**** C***',
  },
]

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(true)

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
