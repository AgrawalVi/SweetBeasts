import Footer from '@/components/sections/footer/footer'
import { Navbar } from '@/components/general/navbars/navbar'

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid h-dvh w-full flex-grow grid-rows-[auto_1fr_auto] justify-center align-middle">
      <Navbar />
      <div className="mx-5 my-6 big-phone:my-12 md:mx-10">{children}</div>
      <Footer />
    </div>
  )
}