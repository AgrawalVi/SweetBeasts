'use client';
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
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ScrollFadeIn from "@/components/scrollfadein";

export default function Pogo() {
  return (
    <div className="container mx-auto flex justify-center items-center space-y-12 flex-col">
      <ScrollFadeIn>
        <Card className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 h-auto object-top">
          <CardHeader className="mb-8">
            <CardTitle className="text-center text-5xl">Pogo the Peachy Penguin</CardTitle>
            <CardDescription className="text-center text-3xl">#1 Best Seller</CardDescription>
          </CardHeader>
          <CardContent className="mb-8">
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
      </ScrollFadeIn>

      <ScrollFadeIn>
        <Image className="w-3/4 h-auto flex"
          src="/pogo.jpg" 
          width={800} 
          height={600}
          alt="Pogo the Peachy Penguin" 
        />
      </ScrollFadeIn>

      <ScrollFadeIn>
        <Card className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 h-auto object-top">
          <CardHeader className="mb-8 text-center">
            <CardTitle className="text-5xl">Want it Now? Order before it runs out!</CardTitle>
            <CardDescription className="text-3xl">$15.99</CardDescription>
          </CardHeader>
          <CardContent className="mb-6 flex flex-col items-center">
            <div className="flex justify-center items-center space-x-8 mt-4">
              <Button className="w-[150px] h-[60px] text-lg">Buy Now</Button>
              <Select>
                <SelectTrigger className="h-[60px] w-[150px] text-lg">
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
      </ScrollFadeIn>
    </div>
  );
}
