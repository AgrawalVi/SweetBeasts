'use client';


import ExploreSection from "@/components/general/explore/explore-section";


export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start min-h-screen p-4 bg-background gap-4">
      <ExploreSection />
    </main>
  );
}