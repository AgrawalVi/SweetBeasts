'use client'

import desktopImage from '@/assets/newsletter/popup/desktop-popup-image.png'
import mobileImage from '@/assets/newsletter/popup/mobile-popup-image.png'
import JoinEmailListForm from '@/components/sections/footer/email-list-form'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog'
import { usePopup } from '@/hooks/use-popup'
import Image from 'next/image'
import Link from 'next/link'

export default function NewsletterPopup() {
  const { isOpen, setIsOpen } = usePopup()

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-screen max-h-screen p-0 sm:h-auto sm:w-auto">
        <div className="flex flex-col xl:grid xl:grid-cols-2">
          <Image
            src={desktopImage}
            alt="newsletter popup"
            className="hidden h-full w-full rounded-l-lg object-cover object-left xl:block"
          />
          <Image
            src={mobileImage}
            alt="newsletter popup"
            className="block h-full w-full rounded-t-lg object-cover object-bottom xl:hidden"
          />
          <div className="flex flex-col items-center justify-between gap-12 p-4 pt-8">
            <div className="flex h-full flex-col items-center justify-center gap-4">
              <DialogHeader className="header-gradient text-center text-xl md:text-3xl">
                <h1 className="text-center">Join the Sweet Haven Adventure!</h1>
              </DialogHeader>
              <DialogDescription className="text-center text-muted-foreground">
                Sign up for our newsletter to receive updates about product
                launches, charitable initiatives, and more!
              </DialogDescription>
              <JoinEmailListForm showText={false} inputClassName="lg:w-full" />
            </div>
            <DialogDescription className="text-center text-[6pt] xl:text-[8pt]">
              By signing up, you agree to receive updates and promotional emails
              from SweetBeasts and acknowledge that you've reviewed our{' '}
              <Link
                href="/privacy-policy"
                className="underline underline-offset-2"
              >
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link
                href="/terms-of-service"
                className="underline underline-offset-2"
              >
                Terms of Service
              </Link>
              . You can unsubscribe anytime through the link in our emails or
              emailing{' '}
              <Link
                href="mailto:support@sweetbeasts.shop"
                className="underline underline-offset-2"
              >
                support@sweetsbeasts.shop
              </Link>
            </DialogDescription>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
