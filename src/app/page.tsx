'use client';

import { CardBody, CardContainer, CardItem } from "@/components/aceternity/3d-card";
import Image from 'next/image';
import MailingComponent from "@/components/mailinglist.tsx/mailing";
import ProductCards from "@/components/products/product-cards";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start min-h-screen p-4 bg-[hsl(var(--background))] gap-4">
      <ProductCards />

      <MailingComponent />
      
    </main>
  );
}
