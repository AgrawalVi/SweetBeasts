// React and Next.js imports
import React from 'react'

// Third-party library imports
import { ArrowUpRight } from 'lucide-react'

// UI component imports
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

// Custom components
import { Section, Container } from '@/components/craft'

export type FAQItem = {
  question: string
  answer: string
  link?: string
}

interface FAQSectionProps {
  content: FAQItem[]
  title?: string
  subtitle?: string
}

const FAQ = ({ content, title, subtitle }: FAQSectionProps) => {
  return (
    <Section>
      <Container className="rounded-lg border bg-card">
        <h3 className="!mt-0">{title}</h3>
        <h4 className="text-muted-foreground">{subtitle}</h4>
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value={item.question}
                className="rounded-md border bg-muted/20 px-4 transition-all duration-500 ease-in-out hover:bg-muted/50 dark:hover:bg-muted/80"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default FAQ
