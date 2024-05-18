import MacbookScrollDemo from "@/components/aceternity/MacbookScrollDemo";
import { TracingBeam } from "@/components/ui/tracing-beam";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start min-h-screen p-4 bg-[hsl(var(--background))] gap-4">
      <CardContainer className="w-64 shadow-lg rounded-lg bg-[#F08080] shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
        <CardBody className="relative group/card w-full h-auto rounded-xl p-4 border border-gray-200 bg-[#F08080]">
          <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            Make things float in air
          </CardItem>
          <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Hover over this card to unleash the power of CSS perspective
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
            <Image
              src="/pogo.jpg"
              width={150}
              height={150}
              className="object-cover rounded-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-4">
            <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
              Buy Now
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </main>
  );
}
