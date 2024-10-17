'use client'

import React from 'react'
import { ArrowUpRight } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Container, Section } from '@/components/craft'

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

export default function FAQSection({
  content,
  title,
  subtitle,
}: FAQSectionProps) {
  return (
    <Section>
      <Container className="rounded-lg border bg-card p-4">
        <h3 className="h2-gradient text-center text-xl font-bold sm:text-3xl">
          {title}
        </h3>
        <h4 className="mb-4 text-center text-muted-foreground">{subtitle}</h4>
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
