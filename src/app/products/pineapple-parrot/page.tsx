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
          src="/pineapple-parrot.jpg" 
          width={500} 
          height={300}
          alt="Pina the Pineapple Parrot" 
        />
        <Card className="w-full md:w-3/4 lg:w-[47%] xl:w-[32%] h-96 lg:h-[600px]">
          <CardHeader className="mb-8">
            <CardTitle className="text-center">Pina the Pineapple Parrot</CardTitle>
            <CardDescription className="text-center">Parrot mutation with Pineapple</CardDescription>
          </CardHeader>
          <CardContent className="mb-48">
            <p className="mb-5">Meet Pina, the delightful Pineapple Parrot with her stunning, pineapple-themed plumage that's sure to captivate your heart.</p>
            <p className="mb-5">Made with premium materials, Pina the Pineapple Parrot combines durability with softness, making her perfect for endless cuddles and comfort. Her plush exterior is designed for maximum snuggle time.</p>
            <p className="mb-5">Pina is an ideal gift for any celebration, whether it's a birthday, holiday, or just a spontaneous surprise. She is guaranteed to bring joy to anyone who receives her!</p>
            <p>Bring a touch of tropical delight into your home with Pina the Pineapple Parrot. She's ready to soar into your life and fill it with happiness, laughter, and lots of love.</p>
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
  