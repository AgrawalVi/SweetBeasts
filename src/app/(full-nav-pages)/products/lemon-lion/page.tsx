import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Button } from "@/components/ui/button";
  import Image from "next/image";
  
  export default function Pogo() {
    return (
      <div className="container mx-auto flex justify-end space-x-4">
        <Image className="h-4/6"
          src="/lemon-lion.jpg" 
          width={500} 
          height={300}
          alt="Limmy the Lemon Lion" 
        />
        <Card className="w-full md:w-3/4 lg:w-[47%] xl:w-[32%] h-96 lg:h-[600px]">
          <CardHeader className="mb-8">
            <CardTitle className="text-center">Limmy the Lemon Lion</CardTitle>
            <CardDescription className="text-center">Lions transformed their manes by eating enchanted lemons</CardDescription>
          </CardHeader>
          <CardContent className="mb-48">
            <p className="mb-5">Meet Lemmy, the delightful Lemon Lion with a bright, lemon-colored mane that's sure to capture your heart.</p>
            <p className="mb-5">Crafted with premium materials, Lemmy the Lemon Lion is both durable and incredibly soft, making him perfect for endless hugs and comfort. His plush fur is designed to provide maximum snuggle time.</p>
            <p className="mb-5">Lemmy is the ideal gift for any occasion, be it a birthday, holiday, or just a spontaneous surprise. He is sure to bring joy and a smile to anyone who meets him!</p>
            <p>Bring a touch of citrusy charm into your life with Lemmy the Lemon Lion. He's ready to leap into your home and fill it with happiness, laughter, and a whole lot of love.</p>
          </CardContent>
        </Card>
        <Card className="w-full md:w-3/4 lg:w-[47%] xl:w-[32%] h-96 lg:h-[500px]">
          <CardHeader className="mb-8">
            <CardTitle>Buy Now</CardTitle>
            <CardDescription className="text-3xl">15.99</CardDescription>
          </CardHeader>
          <CardContent className="mb-48">
            <p>Want it Now? Order before it runs out!</p>
          </CardContent>
          <div className="mb-6 flex justify-center">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Quantity" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Quantity</SelectLabel>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <CardFooter className="flex justify-center">
            <Button>Buy Now</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
  