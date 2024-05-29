import { Navbar } from "@/components/general/navbar"

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full h-full flex-grow align-middle justify-center">
      <Navbar />
      <div className="m-10">{children}</div>
    </div>
  )
}
