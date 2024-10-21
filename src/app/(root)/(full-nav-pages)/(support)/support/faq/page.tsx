import React from 'react'
import { Metadata } from 'next'

import FAQSection, { FAQItem } from '@/components/sections/faq/faq-section'

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Frequently Asked Questions about SweetBeasts',
}

const plushiesFAQ: FAQItem[] = [
  {
    question: 'What materials are used to make your plushies?',
    answer:
      'Our plushies are made from high-quality, hypoallergenic materials, ensuring they are safe and soft for all ages.',
  },
  {
    question: 'Are your plushies machine washable?',
    answer:
      'Our plushies are not machine washable. We recommend spot cleaning with a damp cloth and mild soap to maintain their quality and appearance.',
  },
]

const purchasingShippingFAQ: FAQItem[] = [
  {
    question: 'Where can I purchase your plushies?',
    answer:
      'Currently, our plushies are exclusively available on our website. We plan to expand to additional retailers in the future, so stay tuned for updates!',
  },
  {
    question: 'Do you offer international shipping?',
    answer:
      'Currently, we only offer shipping within the United States. We hope to expand our shipping options in the future. Thank you for your understanding!',
  },
  {
    question: 'How long will it take to receive my order?',
    answer:
      'Orders are typically processed within 1-2 business days. Shipping times vary depending on your location but generally range from 2-5 business days.',
  },
  {
    question: 'Do you offer wholesale or bulk purchasing options?',
    answer:
      'Yes, we offer wholesale pricing and bulk purchasing options for retailers and organizations interested in carrying our plushies. Please contact us for more information.',
    link: '/support/contact-us',
    linkText: 'Contact Us',
  },
]

const charityDonationsFAQ: FAQItem[] = [
  {
    question: 'Which charities do you support?',
    answer:
      'We support charities focused on fighting hunger and protecting wildlife. Your purchase helps provide essential food resources to those in need and helps protect endangered species and their habitats.',
  },
  {
    question: 'How can I learn more about the impact of my purchase?',
    answer:
      'We provide regular updates on our website and through our newsletter about the projects and initiatives we support. You can also follow us on social media for the latest news and impact stories.',
    link: '/support/contact-us',
  },
]

const returnsExchangesFAQ: FAQItem[] = [
  {
    question: 'What is your return policy?',
    answer:
      'We accept returns within 2 weeks (14 days) of delivery, provided the items are in their original condition with tags attached. Please note that original and return shipping and handling fees are non-refundable. You will be responsible for any return shipping expenses. For more information and to initiate a return, please visit our returns page.',
    link: '/return-policy',
  },
  {
    question: 'Can I cancel or modify my order after it has been placed?',
    answer:
      'Orders can typically be canceled or modified within 24 hours of placement. Please contact our customer service team immediately with your order details to request changes.',
    link: '/return-policy',
  },
  {
    question: 'What should I do if I receive a defective or damaged item?',
    answer:
      'If you receive a defective or damaged item, please contact our customer service team immediately with your order details and photos of the issue. We will resolve the matter as quickly as possible.',
    link: '/return-policy',
  },
  {
    question: 'Can I exchange my plushie for a different one?',
    answer:
      'We may offer exchanges for damaged plushies within 2 weeks (14 days) of delivery. Please contact our customer service team with your order details and photos of the damage to initiate the exchange process. We will assess the situation and work with you to find a suitable solution.',
    link: '/return-policy',
  },
  {
    question: 'How long does it take to process a refund?',
    answer:
      'Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, refunds are typically processed within 5-7 business days.',
    link: '/return-policy',
  },
]

const otherFAQ: FAQItem[] = [
  {
    question: 'How can I stay updated on new plushie releases and promotions?',
    answer:
      'To stay informed about new plushie releases, special promotions, and company updates, we encourage you to subscribe to our newsletter and follow us on social media.',
  },
  {
    question: 'Do you offer any discounts or promotions?',
    answer:
      'Yes, we periodically offer discounts and promotions. These may include seasonal sales, bundle discounts, or special offers. Check out our website, sign up for our newsletter, and follow us on social media for the latest deals.',
  },
  {
    question: 'How can I contact your customer service team?',
    answer:
      'You can reach our customer service team via Email, Instagram, Discord, or filling out the form on our contact page. We are here to assist you with any questions, concerns, or feedback you may have.',
    link: '/support/contact-us',
    linkText: 'Contact Us',
  },
]

export default function FAQ() {
  return (
    <>
      <h1 className="header-gradient mb-4 text-center text-6xl font-bold">
        Frequently Asked Questions
      </h1>
      <FAQSection content={plushiesFAQ} title="About Our Plushies" />

      <FAQSection
        content={purchasingShippingFAQ}
        title="Purchasing and Shipping"
      />

      <FAQSection content={charityDonationsFAQ} title="Charity and Donations" />

      <FAQSection content={returnsExchangesFAQ} title="Returns and Exchanges" />

      <FAQSection content={otherFAQ} title="Other" />
    </>
  )
}
