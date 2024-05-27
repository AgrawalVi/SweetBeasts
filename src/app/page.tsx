'use client';


import MailingComponent from "@/components/mailinglist.tsx/mailing";
import ProductCards from "@/components/products/product-cards";
import { InfiniteCards } from "@/components/reviews/scrollingreviews";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start min-h-screen p-4 bg-[hsl(var(--background))] gap-4">
      <ProductCards />
      <InfiniteCards />
      <MailingComponent />
    </main>
  );
}