import { Navbar } from "@/components/general/navbar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full h-full">
      <Navbar />
      {children}
    </div>
  );
}