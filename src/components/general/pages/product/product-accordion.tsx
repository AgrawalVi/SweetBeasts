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
        <AccordionContent className="text-base md:w-3/4">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="specs" className="relative">
        <AccordionTrigger className="py-3 hover:no-underline">
          <ClipboardPen className="" />
          Specifications
        </AccordionTrigger>
        <AccordionContent className="text-base md:w-3/4">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="care" className="relative">
        <AccordionTrigger className="py-3 hover:no-underline">
          <IconIroning3 />
          Care Instructions
        </AccordionTrigger>
        <AccordionContent className="text-base md:w-3/4">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="disclaimer" className="relative">
        <AccordionTrigger className="py-3 hover:no-underline">
          <MessageCircleWarning className="scale-x-[-1]" />
          Disclaimer
        </AccordionTrigger>
        <AccordionContent className="text-base md:w-3/4">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
