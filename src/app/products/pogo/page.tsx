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
    <div className="container mx-auto flex justify-center place-items-center space-x-4 flex-col">
      <Card className="w-full md:w-3/4 lg:w-[47%] xl:w-[75%] h-96 lg:h-[500px] object-top">
        <CardHeader className="mb-8">
          <CardTitle className="text-center text-4xl">Pogo the Peachy Penguin</CardTitle>
          <CardDescription className="text-center text-2xl">#1 Best Seller</CardDescription>
        </CardHeader>
        <CardContent className="mb-48">
        <p className="text-lg">
            In a land where icy glaciers meet vibrant fruit groves, Pogo the Peachy Penguin was born. Pogo hails from the magical Fruity Fjords, a unique region in Antarctica where the cold is sweetened by the presence of lush, fruit-bearing plants. Amidst the typical snowy expanse, colorful fruit trees like peach, apple, and berry bushes flourish, creating a whimsical habitat unlike any other.
          </p>
          <p className="mt-4 text-lg">
            Pogo was an ordinary penguin until he stumbled upon a hidden grove filled with enchanted peach trees. The moment he took a bite of a glowing peach, he was transformed. His feathers turned a delightful shade of peach, and he gained a sweet, fruity aroma. Now, Pogo spends his days gliding across icy lakes and through orchards, spreading joy with his charming personality and delightful scent.
          </p>
          <p className="mt-4 text-lg">
            Pogo's home is nestled in an ice cave adorned with icicles that resemble frozen fruit drops. He loves to invite other penguins over for peach parties, where they slide on ice pathways and enjoy the sweet fruits of the magical grove. His favorite spot is a cozy nook in the cave, lined with peach blossoms and warmed by the glow of enchanted fruit.
          </p>
          <p className="mt-4 text-lg">
            Every year, Pogo is the star of the Fruity Festival, a celebration where the penguins of the Fruity Fjords come together to honor their unique habitat. Pogo leads the parade with his vibrant peach-colored feathers and infectious joy. It's said that a hug from Pogo brings not only warmth but also a sense of happiness and wonder.
          </p>
          <p className="mt-4 text-lg">
            Bring a piece of this enchanting world into your home with Pogo the Peachy Penguin. Whether you're looking for a new friend or a bit of magic, Pogo is here to bring a smile to your face and a touch of fruity delight to your day.
          </p>
        </CardContent>
      </Card>
      <Image className="h-4/6 flex-col"
        src="/pogo.jpg" 
        width={500} 
        height={300}
        alt="Pogo the Peachy Penguin" 
      />
      <Card className="w-full md:w-3/4 lg:w-[47%] xl:w-[75%] h-50 lg:h-[300px]">
        <CardHeader className="mb-8 text-center">
          <CardTitle className="text-4xl">Want it Now? Order before it runs out!</CardTitle>
          <CardDescription className="text-3xl">$15.99</CardDescription>
        </CardHeader>
        <CardContent className="mb-6 flex flex-col items-center">
          <div className="flex justify-center items-center space-x-28 mt-4">
            <Button className="w-[125px] h-[50px]">Buy Now</Button>
            <Select>
              <SelectTrigger className="h-[50px] w-[120px]">
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
        </CardContent>
      </Card>
      {/* 
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
      </Card> */}
    </div>
  );
}
