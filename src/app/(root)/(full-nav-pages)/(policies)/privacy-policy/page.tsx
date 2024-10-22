import { Metadata } from 'next'
import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

const PrivacyPolicy = () => {
  return (
    <Card className="mx-auto flex max-w-4xl flex-col px-4 py-8">
      <CardHeader>
        <CardTitle className="header-gradient text-center text-6xl">
          Privacy Policy
        </CardTitle>
        <CardDescription className="text-center">
          Effective Date: 20 October 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-left">
          <p className="mb-4 text-lg">
            At SweetBeasts, your privacy is very important to us. We aim to
            offer you the best experience possible, and in doing so, we need to
            collect specific categories of personal information. This Privacy
            Policy explains the types of personal data we gather, the methods we
            use to collect it, and how we utilize it.
          </p>

          <h2 className="p-gradient mb-4 text-center font-coiny text-2xl bg-[length:100%_1.3333em]">
            1.0 Information You Provide Directly
          </h2>
          <p className="mb-4">
            We collect and process personal information you voluntarily provide
            when you:
          </p>
          <ul className="mb-4 ml-6 list-inside list-disc space-y-2">
            <li>Register for an account</li>
            <li>Place an order or make a purchase</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us through email or forms</li>
            <li>Leave a rating or review</li>
          </ul>
          <p className="mb-4">
            This personal information may include, but is not limited to:
          </p>
          <ul className="mb-4 ml-6 list-inside list-disc space-y-2">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Mailing/Shipping Address</li>
            <li>
              Financial, Payment, and Transaction Data, including bank account
              and payment card
            </li>
          </ul>

          <h2 className="p-gradient mb-4 text-center font-coiny text-2xl bg-[length:100%_1.3333em]">
            2.0 Information We Collect from Third Parties
          </h2>
          <p className="mb-4">
            Our Website may contain links to third-party websites and services
            that are not operated by us. These third parties may collect, use,
            and share your information according to their own privacy policies.
            We encourage you to review the privacy policies of any third-party
            sites you visit.
          </p>
          <p className="mb-4">Third party services we utilize:</p>
          <div className="mb-4">
            <p>
              <strong>Vercel</strong>
            </p>
            <p>
              We use Vercel’s services to help collect analytics which help us
              understand how users interact with our website. We may collect
              information such as demographics, operating systems, and browsers
              used when accessing our website.
            </p>
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              className="text-purple-500"
            >
              Vercel’s Privacy Policy
            </a>
          </div>
          <div className="mb-4">
            <p>
              <strong>Stripe</strong>
            </p>
            <p>
              We use Stripe’s services to assist with payment when placing an
              order. We do not directly store payment information entered
              through Stripe. However, we may have access to related details
              associated with your payment card information such as billing
              address and the last 4 digits of your card.
            </p>
            <a
              href="https://stripe.com/privacy"
              target="_blank"
              className="text-purple-500"
            >
              Stripe’s Privacy Policy
            </a>
          </div>

          <h2 className="p-gradient mb-4 text-center font-coiny text-2xl bg-[length:100%_1.3333em]">
            3.0 How We Use Information
          </h2>
          <p className="mb-4">
            We may use information collected for a variety of purposes including
            administrative purposes, marketing decisions, and to comply with the
            laws. We may use this information in the following ways:
          </p>
          <ul className="mb-4 ml-6 list-inside list-disc space-y-2">
            <li>Managing information used to create your account</li>
            <li>
              Send you updates, marketing communications, and promotional
              materials
            </li>
            <li>Notifying you about any changes to our policies</li>
            <li>
              Processing your orders and transactions, including order
              confirmation, billing, and enrollment in loyalty or promotional
              programs
            </li>
            <li>Addressing your questions, comments, and requests</li>
            <li>Measuring interest in and enhancing our services</li>
            <li>Identifying and fixing errors within our services</li>
            <li>Developing new ideas, products, content, and processes</li>
            <li>
              Carrying out activities required to comply with legal obligations
            </li>
            <li>Enforcing our agreements and policies</li>
          </ul>

          <h2 className="p-gradient mb-4 text-center font-coiny text-2xl bg-[length:100%_1.3333em]">
            4.0 Data Retention
          </h2>
          <p className="mb-4">
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required or permitted by law.
          </p>

          <h2 className="p-gradient mb-4 text-center font-coiny text-2xl bg-[length:100%_1.3333em]">
            5.0 Disclosure of your personal data
          </h2>
          <p className="mb-4">
            We only disclose information that is necessary for the third part
            services that we utilize. We do NOT sell or share your personal
            information with other third parties.
          </p>

          <h2 className="p-gradient mb-4 text-center font-coiny text-2xl bg-[length:100%_1.3333em]">
            6.0 Your Rights and Choices
          </h2>
          <p className="mb-4">
            You have the following rights regarding your personal information:
          </p>
          <ul className="mb-4 ml-6 list-inside list-disc space-y-2">
            <li>
              Access: You can request access to the personal information we hold
              about you.
            </li>
            <li>
              Correction: You can request that we correct any inaccuracies in
              your personal information.
            </li>
            <li>
              Deletion: You can request that we delete your personal
              information, subject to certain exceptions.
            </li>
            <li>
              Opt-Out: You can opt-out of receiving marketing communications
              from us at any time by following the unsubscribe instructions in
              our emails.
            </li>
          </ul>

          <h2 className="p-gradient mb-4 text-center font-coiny text-2xl bg-[length:100%_1.3333em]">
            7.0 Data Security
          </h2>
          <p className="mb-4">
            We take your privacy and security seriously. To safeguard your
            personal information, we implement reasonable and appropriate
            administrative, technical, and physical measures designed to protect
            against unauthorized or unlawful access, use, modification,
            destruction, loss, alteration, or disclosure.
          </p>
          <p className="mb-4">
            When we share your information with third parties or they act on our
            behalf, we require them to adhere to industry-standard security
            practices. However, we cannot be held responsible for the privacy
            and security practices of these third parties beyond the information
            we share with or receive from them.
          </p>

          <h2 className="p-gradient mb-4 text-center font-coiny text-2xl bg-[length:100%_1.3333em]">
            8.0 Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            You are advised to review this Privacy Policy periodically for any
            changes. Your continued use of the Website after any changes
            signifies your acceptance of the updated policy.
          </p>

          <h2 className="p-gradient mb-4 text-center font-coiny text-2xl bg-[length:100%_1.3333em]">
            9.0 Personal Data of Minors
          </h2>
          <p className="mb-4">
            Usage of the SweetBeasts website is not designed for individuals
            under the age of 16. Users must meet the age requirement to consent
            to the processing of their data according to their local laws. We do
            not intentionally collect personal information from those under 16.
            If you are a parent or guardian and learn that your child has shared
            personal information with us, please get in touch with us
            immediately. If we find out that we have inadvertently gathered
            personal information from a minor under 16 without proper
            verification or parental consent, we will take measures to delete
            that information.
          </p>

          <h2 className="p-gradient mb-4 text-center font-coiny text-2xl bg-[length:100%_1.3333em]">
            10.0 Contact Us
          </h2>
          <p className="mb-4 text-center">
            If you have any questions or concerns about this Privacy Policy,
            please{' '}
            <Link
              href="support/contact-us"
              className="underline underline-offset-2"
            >
              contact us
            </Link>{' '}
            immediately.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex w-full justify-center">
        <address className="text-center not-italic">
          SweetBeasts
          <br />
          432 West Gorham St
          <br />
          Madison, WI 53703
          <br />
          <a href="mailto:support@sweetbeasts.shop" className="text-purple-500">
            support@sweetbeasts.shop
          </a>
        </address>
      </CardFooter>
    </Card>
  )
}

export default PrivacyPolicy
