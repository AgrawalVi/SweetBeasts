import Link from 'next/link'
import SocialButtons from './social-buttons'
import JoinEmailListForm from './email-list-form'
import {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion'

const footerLinks = {
  shop: [
    {
      name: 'All Products',
      href: '/products',
    },
    {
      name: 'Account',
      href: '/my-account',
    },
    {
      name: 'Product Updates',
      href: '/product-updates',
    },
    {
      name: 'Track your order',
      href: '/track-order',
    },
    {
      name: 'Terms of service',
      href: '/terms-of-service',
    },
    {
      name: 'Return Policy',
      href: '/return-policy',
    },
  ],
  sweetbeasts: [
    {
      name: 'About Us',
      href: '/about',
    },
    {
      name: 'Meet The Team',
      href: '/about/team',
    },
    {
      name: 'Give Feedback',
      href: '/feedback-form',
    },
    {
      name: 'FAQ',
      href: '/support/faq',
    },
    {
      name: 'Contact Us',
      href: '/support/contact-us',
    },
  ],
}

export default function Footer() {
  return (
    <main className="font-nunito flex w-full flex-col border-t border-muted p-5 xl:py-12">
      <div className="hidden w-full justify-center md:block">
        <div className="flex w-full justify-center">
          <div className="grid w-full grid-cols-6">
            <div className="relative col-span-4 flex w-full flex-col items-center justify-center xl:col-span-3">
              <JoinEmailListForm />
            </div>
            <div className="col-span-2 flex flex-col xl:col-span-3 xl:flex-row xl:space-x-24">
              <div className="flex flex-col">
                <div className="font-nunito py-3 text-base font-bold uppercase">
                  Shop
                </div>
                <div className="flex flex-col space-y-2">
                  {footerLinks.shop.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-semibold uppercase transition-all ease-in-out hover:translate-x-1 hover:opacity-60"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-nunito py-3 text-base font-bold uppercase">
                  SweetBeasts
                </div>
                <div className="flex flex-col space-y-2">
                  {footerLinks.sweetbeasts.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-semibold uppercase transition-all ease-in-out hover:translate-x-1 hover:opacity-60"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex w-full flex-col">
          <JoinEmailListForm />
          <Accordion type="single" collapsible>
            <AccordionItem value="shop">
              <AccordionTrigger>Shop</AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-2">
                {footerLinks.shop.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-semibold uppercase transition-all ease-in-out hover:translate-x-1 hover:opacity-60"
                  >
                    {link.name}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="sweetbeasts">
              <AccordionTrigger>SweetBeasts</AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-2">
                {footerLinks.sweetbeasts.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-semibold uppercase transition-all ease-in-out hover:translate-x-1 hover:opacity-60"
                  >
                    {link.name}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center pt-10">
        <SocialButtons />
        <div>© SweetBeasts™ 2024</div>
      </div>
    </main>
  )
}
