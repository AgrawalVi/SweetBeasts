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
        src="/pogo.jpg" 
        width={500} 
        height={300}
        alt="Pogo the Peachy Penguin" 
      />
      <Card className="w-full md:w-3/4 lg:w-[47%] xl:w-[32%] h-96 lg:h-[600px]">
        <CardHeader className="mb-8">
          <CardTitle className="text-center">Pogo the Peachy Penguin</CardTitle>
          <CardDescription className="text-center">#1 Best Seller</CardDescription>
        </CardHeader>
        <CardContent className="mb-48">
          <p className="mb-5">Pogo is as charming as they come, with a soft, peach-colored belly that makes cuddling irresistible.</p>
          <p className="mb-5">Crafted with high-quality materials, Pogo the Peachy Penguin is designed to be both durable and huggable. His plush exterior is incredibly soft to the touch, ensuring endless snuggles and comfort.</p>
          <p className="mb-5">Pogo is the perfect gift for any occasion, whether it's a birthday, holiday, or just because. He's sure to bring a smile to anyone's face!</p>
          <p>Add a splash of peachy fun to your life with Pogo the Peachy Penguin. He’s waiting to slide into your home and bring joy, laughter, and a whole lot of love.</p>
        </CardContent>
      </Card>
      <Card className="w-full md:w-3/4 lg:w-[47%] xl:w-[32%] h-96 lg:h-[500px]">
        <CardHeader className="mb-8">
          <CardTitle>Buy Now</CardTitle>
          <CardDescription>15.99</CardDescription>
        </CardHeader>
        <CardContent className="mb-48">
          <p>Want it Now? Order before it runs out!</p>
        </CardContent>
        <div className="mb-8 flex justify-center">
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
