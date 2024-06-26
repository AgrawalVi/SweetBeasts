import { Navbar } from '@/components/general/navbar'

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-full w-full flex-grow justify-center align-middle">
      <Navbar />
      <div className="m-10">{children}</div>
    </div>
  )
}
