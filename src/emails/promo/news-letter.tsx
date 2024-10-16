import React from 'react'
import {
  Tailwind,
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import { LOGO_PNG_URL, INSTAGRAM_URL, DISCORD_URL, SUPPORT_EMAIL_URL } from '@/constants'
import { IconBrandDiscord, IconBrandInstagram } from '@tabler/icons-react'
import { Mail } from 'lucide-react'
interface NewsletterProps {
  firstName: string
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL!
const logoURL = LOGO_PNG_URL

export default function Newsletter({
  firstName,
}: NewsletterProps): JSX.Element {
  return (
    <Html>
      <Head>
        <title>SweetBeasts NewsLetter</title>
      </Head>
      <Preview>SweetBeasts Newsletter</Preview>
      <Tailwind>
        <Body className="bg-white-100">
          <Container className="mx-auto max-w-lg rounded-lg bg-blue-100 p-6">
            <Section className="text-center">
              <Img src={logoURL} alt="SweetBeasts Logo" width="120" className="mx-auto" />
              
              {/* Mini Dashboard Section */}
              <Section className="flex justify-center bg-pink-100 p-2 rounded-lg max-w-sm mx-auto font-serif">
                <Link href={`${baseURL}/products`} className="mx-2 text-black text-sm">
                  Shop All
                </Link>
                <Link href={`${baseURL}/new-arrivals`} className="mx-2 text-black text-sm">
                  New Arrivals
                </Link>
                <Link href={`${baseURL}/`} className="mx-2 text-black text-sm">
                  Social Media
                </Link>
                <Link href={`${baseURL}/about-us`} className="mx-2 text-black text-sm">
                  About Us
                </Link>
              </Section>
          </Section>
              {/* Image Section */}
<Img src="https://www.sweetbeasts.shop/newsletter/new-signup/pogo-leaf-hole-art.png" alt="Sweet Haven Banner" className="w-full rounded-lg my-4" />

{/* Centered Text Below the Image */}
<Section className="text-center">
  <Text className="text-lg font-bold text-black">
    YOU'VE BEEN PLANTED IN SWEET HAVEN
  </Text>
  <Text className="text-sm text-black">
    LET THE MYSTICAL JOURNEY BEGIN!
  </Text>
</Section>


              {/* Centered View Collections Button */}
              <Section className="mt-4 flex justify-center">
                <Link
                  href={`${baseURL}/find_sweetbeasts`}
                  className="inline-block bg-white text-black font-semibold py-2 px-6 rounded-lg mx-auto"
                >
                  Find Your SweetBeast
                </Link>
              </Section>

              <Section className="flex justify-center items-center mt-8">
  {/* Left Side - Image */}
  <Img 
  src="https://www.sweetbeasts.shop/newsletter/new-signup/pogo-tree.png" 
  alt="Side Image" 
  style={{
    width: '90%', // ensures it takes the full width of its container
    maxWidth: '600px', // sets a max-width so it doesn't stretch too far
    height: 'auto', // allows the height to adjust based on the aspect ratio
    borderRadius: '12px', // rounded corners for the image
    objectFit: 'cover', // ensures the image scales properly
    margin: '0 auto' // centers the image horizontally
  }}
/>


  {/* Right Side - Text Box aligned to the right */}
  <Section style={{
  width: '90%',
  maxWidth: '600px', // limits the maximum width of the section
  backgroundColor: '#FEE2E2', // the pink background color
  color: 'black',
  padding: '24px', // responsive padding
  borderRadius: '12px', // rounded corners
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto', // centers the section
  height: 'auto' // allows height to adjust
}}>
  <Text style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '8px', textAlign: 'center' }}>
    Your Cuddly Escape to Comfort
  </Text>
  <Text style={{ fontSize: '0.875rem', textAlign: 'center' }}>
    Time to find your Sweet Beast... With a comforting feel, a furry companion is waiting for you. Hugs and cuddles to brighten up your day! Your beast will be loyal to you and only you as you both set off on adventure. Are you ready?
  </Text>
</Section>



</Section>

                              {/* Text Box on Left and Image on Right */}
              <Section className="flex justify-center items-center mt-2">
                  {/* Left Side - Text Box */}
                 <Section className="mt-4 mx-auto">
                    <Link
                      href={`${baseURL}/products`}
                      className="inline-block bg-white text-black font-semibold py-2 px-6 rounded-lg"
                    >
                      View Our Collections
                    </Link>
                  </Section>

                  {/* Right Side - Image */}
              </Section>


              {/* "Our Contributions" Section */}
              <Section className="bg-blue-200 text-black p-6 rounded-lg mt-8">
                <Text className="text-lg font-bold mb-2">
                  Plushies with a Purpose
                </Text>
                <Text className="text-sm">
                  By choosing SweetBeasts, you’re joining a community dedicated to making the world a better place!

                  A portion of every purchase goes to hunger relief and wildlife conservation charities.

                  Every plushie you take home helps build a more caring, connected, and compassionate world.
                </Text>
              </Section>
              <Section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center', width: '100%' }}>
  {/* Image */}
  <Img 
    src="https://www.sweetbeasts.shop/newsletter/new-signup/charity-emblem.png" 
    alt="New Collection Image" 
    style={{ width: '50%', height: 'auto', marginBottom: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
  />

  {/* Button */}
  <Link
    href={`${baseURL}/contributions`}
    style={{ display: 'inline-block', backgroundColor: 'white', color: 'black', fontWeight: '600', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none' }}
  >
    Our Contributions
  </Link>
</Section>




              {/* Text Box on the Right with Social Media and Support Links */}
              <Section style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginTop: '2rem',
}}>
  {/* Empty Spacer on the Left */}
  <Section style={{ width: '100%' }}></Section>

  {/* Right Side - Text Box */}
  <Section style={{
    width: '100%',
    maxWidth: '600px',  // Limits the box from stretching too much
    backgroundColor: '#FFFFFF',
    color: '#000000',
    padding: '16px',
    borderRadius: '8px',
    margin: '0 auto',  // Centers the text box
  }}>
    <Text style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '8px', textAlign: 'center' }}>
      Join our Community!
    </Text>
    <Text style={{ fontSize: '0.875rem', textAlign: 'center' }}>
      Join the SweetBeasts community on Instagram, TikTok, and Discord to brighten your days and connect with fellow fans! We’d love to hear your feedback and thoughts. Don’t forget to tag us and use #mysweetbeast
    </Text>
    <Text style={{ fontSize: '0.875rem', textAlign: 'center', marginTop: '16px' }}>
      We can't to see your posts!
    </Text>

    {/* Social Media Links */}
    <Section style={{ marginTop: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Link href={INSTAGRAM_URL} style={{ color: '#E1306C', textDecoration: 'underline', marginRight: '16px' }}>
        <IconBrandInstagram size={30} strokeWidth={2} color={'#E1306C'} />
      </Link>
      <Link href={DISCORD_URL} style={{ color: '#5865F2', textDecoration: 'underline', marginRight: '16px' }}>
        <IconBrandDiscord size={30} strokeWidth={2} color={'#5865F2'} />
      </Link>
      <Link href={`mailto:${SUPPORT_EMAIL_URL}`} style={{ color: '#ff0000', textDecoration: 'underline' }}>
        <Mail size={30} strokeWidth={2} color={'#ff0000'} />
      </Link>
    </Section>
  </Section>
</Section>

          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
