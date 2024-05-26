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
import Image  from 'next/image'

export default function Home() {
  return (
    <main className="flex items-end justify-start min-h-screen p-4 bg-gray-900">
      <Card style={{ backgroundColor: '#F08080' }} className="w-64 shadow-lg rounded-lg shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
        <CardHeader className="p-4 border-b border-gray-200">
          <CardTitle className="text-xl font-bold">Pogo</CardTitle>
          <CardDescription className="text-gray-500">The Peachy Penguin</CardDescription>
        </CardHeader>
        <CardContent className="p-4 ">
          < Image 
            src="/pogo.jpg" 
            width={100}
            height={100}
            alt="Pogo"
          />
        </CardContent>
        <CardFooter className="p-4 border-t border-gray-200">
          <p>Buy Now</p>
        </CardFooter>
      </Card>
    </main>
  );
}

