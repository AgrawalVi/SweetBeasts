import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Pogo() {
  return (
    <div className="container mx-auto flex justify-end space-x-4">
      <Image
        className="h-4/6"
        src="/tangerine-turtle.jpg"
        width={500}
        height={300}
        alt="Tango the Tangerine Turtle"
      />
      <Card className="h-96 w-full md:w-3/4 lg:h-[600px] lg:w-[47%] xl:w-[32%]">
        <CardHeader className="mb-6">
          <CardTitle className="text-center">
            Tango the Tangerine Turtle
          </CardTitle>
          <CardDescription className="text-center">
            What happens when turtles eat too many tangerines
          </CardDescription>
        </CardHeader>
        <CardContent className="mb-48">
          <p className="mb-5">
            Introducing Tango, the adorable Tangerine Turtle with his vibrant,
            tangerine-colored shell that's sure to steal your heart.
          </p>
          <p className="mb-5">
            Crafted with top-quality materials, Tango the Tangerine Turtle
            offers a perfect blend of durability and softness. His plush
            exterior is made for endless snuggles and comfort, making him a
            delightful companion.
          </p>
          <p className="mb-5">
            Tango makes a wonderful gift for any occasion, be it a birthday,
            holiday, or just a spontaneous surprise. He's guaranteed to bring
            joy and a smile to anyone who meets him!
          </p>
          <p>
            Invite a splash of citrusy charm into your home with Tango the
            Tangerine Turtle. He's ready to crawl into your life and fill it
            with warmth, laughter, and lots of love.
          </p>
        </CardContent>
      </Card>
      <Card className="h-96 w-full md:w-3/4 lg:h-[500px] lg:w-[47%] xl:w-[32%]">
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
  )
}
