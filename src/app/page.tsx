'use client';


import ExploreSection from "@/components/explore/explore-section";


export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start min-h-screen p-4 bg-[hsl(var(--background))] gap-4">
      <ExploreSection />
    </main>
  );
}