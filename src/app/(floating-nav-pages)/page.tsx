'use client';

import ProductCards from "@/components/products/product-cards";
import { useCurrentUser } from "@/hooks/use-current-user";

export default function Home() {
  const user = useCurrentUser()

  return (
    <main className="flex flex-col items-start justify-start min-h-screen p-10 bg-background gap-4">
      <ProductCards />
      {/* <MailingComponent /> */}
    </main>
  );
}