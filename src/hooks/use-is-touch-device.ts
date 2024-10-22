import { useEffect, useState } from 'react'

export function useIsTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    const hasTouchScreen = () => {
      if (typeof window === 'undefined') return false
      if ('ontouchstart' in window) return true
      if (navigator.maxTouchPoints > 0) return true
      return false
    }

    setIsTouchDevice(hasTouchScreen())
  }, [])

  return isTouchDevice
}
