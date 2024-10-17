import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { IconIroning3 } from '@tabler/icons-react'

import { ClipboardPen, MessageCircleWarning, ScrollText } from 'lucide-react'

export default function ProductAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="description" className="relative">
        <AccordionTrigger className="py-3 hover:no-underline">
          <ScrollText className="" />
          Description
        </AccordionTrigger>
        <AccordionContent className="flex text-base">
          Pogo, our debut plushie, embodies a dream brought to life! Crafted
          with a luxuriously soft exterior and a snuggly interior, Pogo is
          designed to be your ideal cuddle buddy. Experience the perfect blend
          of comfort and charm with Pogo at your side!
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
            <li>Polyester filling for extra cuddliness :)</li>
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
