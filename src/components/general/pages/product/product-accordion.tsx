import { IconIroning3 } from '@tabler/icons-react'
import { ClipboardPen, MessageCircleWarning, ScrollText } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function ProductAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="description" className="relative">
        <AccordionTrigger className="py-3 hover:no-underline">
          <ScrollText className="" />
          Description
        </AccordionTrigger>
        <AccordionContent className="flex text-base">
          Pogo, our debut plushie, is the adorable fusion of a peach and a
          penguin! Crafted with a luxuriously soft exterior and a squishy
          interior, Pogo is designed to be your ideal cuddle buddy. Experience
          the perfect blend of comfort and charm with Pogo at your side!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="details" className="relative">
        <AccordionTrigger className="py-3 hover:no-underline">
          <ClipboardPen className="" />
          Details
        </AccordionTrigger>
        <AccordionContent className="text-base">
          <ul className="list-inside list-disc pl-2">
            <li>11 x 9.8 x 11 inches</li>
            <li>Smooth, soft, high-quality fabric</li>
            <li>Polyester filling for extra cuddliness</li>
            <li>Embroidered eyes and blush for a charming, handcrafted look</li>
            <li>
              Each purchase directly supports our charitable initiatives,
              spreading joy and making a positive impact on the world
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="care" className="relative">
        <AccordionTrigger className="py-3 hover:no-underline">
          <IconIroning3 />
          Care Instructions
        </AccordionTrigger>
        <AccordionContent className="text-base">
          To keep your plushie in top condition, clean it by gently surface
          washing by hand. Avoid submerging it in water to maintain its shape
          and softness.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
