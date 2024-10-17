'use client'

import React, { createContext, useState, useContext, useEffect } from 'react'

import { useCurrentUser } from '@/hooks/use-current-user'

interface NewsletterPopupContextType {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const NewsletterPopupContext = createContext<
  NewsletterPopupContextType | undefined
>(undefined)

export const NewsletterPopupProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const user = useCurrentUser()

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!user) {
      // wait 5 seconds
      setTimeout(() => {
        // check local storage for newsletter popup state
        const newsletterPopupLastShown = localStorage.getItem(
          'newsletter_popup_last_shown',
        )
        // check if newsletter popup was last shown within a week
        if (
          !newsletterPopupLastShown ||
          new Date().getTime() - new Date(newsletterPopupLastShown).getTime() >
            1000 * 60 * 60 * 24 * 7
        ) {
          localStorage.setItem(
            'newsletter_popup_last_shown',
            new Date().toISOString(),
          )
          console.log('showing newsletter popup')
          setIsOpen(true)
        }
      }, 5000)
    }
  }, [])

  return (
    <NewsletterPopupContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </NewsletterPopupContext.Provider>
  )
}

export const usePopup = () => {
  const context = useContext(NewsletterPopupContext)
  if (context === undefined) {
    throw new Error('usePopup must be used within a NewsletterPopupProvider')
  }
  return context
}
