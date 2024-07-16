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
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="details" className="relative">
        <AccordionTrigger className="py-3 hover:no-underline">
          <ClipboardPen className="" />
          Details
        </AccordionTrigger>
        <AccordionContent className="text-base">
          lorem ipsum lorem ipsum asdf sd ds ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="care" className="relative">
        <AccordionTrigger className="py-3 hover:no-underline">
          <IconIroning3 />
          Care Instructions
        </AccordionTrigger>
        <AccordionContent className="text-base">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
