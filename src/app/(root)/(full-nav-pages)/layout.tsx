import Footer from '@/components/sections/footer/footer'
import { Navbar } from '@/components/general/navbars/navbar'

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-full w-full flex-grow justify-center align-middle">
      <Navbar />
      <div className="mx-5 my-12 md:mx-10 md:my-12">{children}</div>
      <Footer />
    </div>
  )
}
