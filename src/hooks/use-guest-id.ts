'use client'

import { useEffect, useState } from "react"
import { useCurrentUser } from "@/hooks/use-current-user"
import { v4 as uuidv4 } from "uuid"

const generateGuestID = () => {
  return `guest_${uuidv4()}`
}

const useGuestId = () => {
  const user = useCurrentUser()
  const [guestId, setGuestId] = useState<string | null>(null)

  useEffect(() => {
    if (!user) {
      // Retrieve guestId from local storage if there's no user
      const storedGuestId = localStorage.getItem("guestId")
      if (storedGuestId) {
        setGuestId(storedGuestId)
      } else {
        // Generate a new guestId if one doesn't exist
        const newGuestId = generateGuestID()
        localStorage.setItem("guestId", newGuestId)
        setGuestId(newGuestId)
      }
    }
    setGuestId(null) // no guestId if there's a user
  }, [])

  const createNewGuestId = () => {
    const newGuestId = generateGuestID()
    localStorage.setItem("guestId", newGuestId)
    setGuestId(newGuestId)
    return newGuestId
  }

  const clearGuestId = () => {
    localStorage.removeItem("guestId")
    setGuestId(null)
  }

  return { guestId, clearGuestId, createNewGuestId }
}

export default useGuestId
