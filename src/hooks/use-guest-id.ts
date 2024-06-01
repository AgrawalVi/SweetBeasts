import { generateGuestID } from "@/lib/tokens"
import { useState } from "react"
import { useCurrentUser } from "@/hooks/use-current-user"

const useGuestId = () => {
  const user = useCurrentUser()
  const [guestId, setGuestId] = useState<string | null>(() => {
    if (!user) {
      // Retrieve guestId from local storage if there's no user
      const storedGuestId = localStorage.getItem("guestId")
      if (storedGuestId) {
        return storedGuestId
      } else {
        // Generate a new guestId if one doesn't exist
        const newGuestId = generateGuestID()
        localStorage.setItem("guestId", newGuestId)
        return newGuestId
      }
    }
    return null // no guestId if there's a user
  })

  const createNewGuestId = () => {
    if (!user) {
      const newGuestId = generateGuestID()
      localStorage.setItem("guestId", newGuestId)
      setGuestId(newGuestId)
    }
  }

  const clearGuestId = () => {
    localStorage.removeItem("guestId")
    setGuestId(null)
  }

  return { guestId, clearGuestId, createNewGuestId }
}

export default useGuestId