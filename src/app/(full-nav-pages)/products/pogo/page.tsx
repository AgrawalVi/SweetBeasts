'use client'
import React from 'react'
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
import ScrollFadeIn from '@/components/custom/scroll-fade-in'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Cart from '@/components/general/cart/cart-button'
import { useCurrentUser } from '@/hooks/use-current-user'
import { useShoppingCart } from '@/hooks/use-shopping-cart'
import { Quando } from 'next/font/google'

export default function Pogo() {
  const { addToCart, setIsCartOpen } = useShoppingCart()

  const handleAddToCart = async () => {
    const newItem = {
      productId: 5,
      quantity: 1,
    }
    const response = await addToCart(newItem)
    console.log(response)
    setIsCartOpen(true) // Open the cart when an item is added
  }

  return (
    <div className="container mx-auto flex flex-col items-center justify-center space-y-24">
      <Cart /> {/* Include the Cart component */}
      <ScrollFadeIn>
        <Card className="h-auto w-full object-top md:w-4/5 lg:w-3/4 xl:w-10/12">
          <CardHeader className="mb-8">
            <CardTitle className="text-center text-6xl">
              Pogo the Peachy Penguin
            </CardTitle>
            <CardDescription className="text-center text-4xl">
              #1 Best Seller
            </CardDescription>
          </CardHeader>
          <CardContent className="mb-8">
            <p className="text-lg">
              {/* Product description */}
              In a land where icy glaciers meet vibrant fruit groves, Pogo the
              Peachy Penguin was born. Pogo hails from the magical Fruity
              Fjords, a unique region in Antarctica where the cold is sweetened
              by the presence of lush, fruit-bearing plants. Amidst the typical
              snowy expanse, colorful fruit trees like peach, apple, and berry
              bushes flourish, creating a whimsical habitat unlike any other.
            </p>
            <p className="mt-4 text-lg">
              Pogo was an ordinary penguin until he stumbled upon a hidden grove
              filled with enchanted peach trees. The moment he took a bite of a
              glowing peach, he was transformed. His feathers turned a
              delightful shade of peach, and he gained a sweet, fruity aroma.
              Now, Pogo spends his days gliding across icy lakes and through
              orchards, spreading joy with his charming personality and
              delightful scent.
            </p>
            <p className="mt-4 text-lg">
              Pogo's home is nestled in an ice cave adorned with icicles that
              resemble frozen fruit drops. He loves to invite other penguins
              over for peach parties, where they slide on ice pathways and enjoy
              the sweet fruits of the magical grove. His favorite spot is a cozy
              nook in the cave, lined with peach blossoms and warmed by the glow
              of enchanted fruit.
            </p>
            <p className="mt-4 text-lg">
              Every year, Pogo is the star of the Fruity Festival, a celebration
              where the penguins of the Fruity Fjords come together to honor
              their unique habitat. Pogo leads the parade with his vibrant
              peach-colored feathers and infectious joy. It's said that a hug
              from Pogo brings not only warmth but also a sense of happiness and
              wonder.
            </p>
            <p className="mt-4 text-lg">
              Bring a piece of this enchanting world into your home with Pogo
              the Peachy Penguin. Whether you're looking for a new friend or a
              bit of magic, Pogo is here to bring a smile to your face and a
              touch of fruity delight to your day.
            </p>
          </CardContent>
        </Card>
      </ScrollFadeIn>
      <div className="flex h-[700px] w-full flex-col items-center justify-between space-y-8 md:w-4/5 lg:w-3/4 lg:flex-row lg:space-x-8 lg:space-y-0 xl:w-10/12">
        <ScrollFadeIn>
          <div className="relative h-full w-full">
            <Image
              className="object-cover"
              src="/pogo.jpg"
              layout="fill"
              alt="Pogo the Peachy Penguin"
            />
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <Card className="flex h-full w-full flex-col justify-between">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl">
                Want it Now? Order before it runs out!
              </CardTitle>
              <CardDescription className="text-2xl">$15.99</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="mt-2 flex items-center justify-center space-x-8">
                <Button
                  className="h-[80px] w-[200px] text-xl"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <Select>
                  <SelectTrigger className="h-[80px] w-[200px] text-xl">
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
              <div className="mt-8 w-full">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Details</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-lg">- Size: 10 inches tall</p>
                      <p className="text-lg">- Material: Soft plush</p>
                      <p className="text-lg">- Scent: Peach</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
            <CardFooter className="mt-8 flex items-center justify-center">
              <p className="text-center text-2xl">Share with Friends</p>
            </CardFooter>
          </Card>
        </ScrollFadeIn>
      </div>
    </div>
  )
}
