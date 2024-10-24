import { Navbar } from '@/components/general/navbars/navbar'
import Footer from '@/components/sections/footer/footer'

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0 z-[40] w-full">
        <Navbar />
      </div>
      <div className="mx-5 my-6 flex-grow big-phone:my-12 md:mx-10">
        {children}
      </div>
      <Footer />
    </div>
  )
}
