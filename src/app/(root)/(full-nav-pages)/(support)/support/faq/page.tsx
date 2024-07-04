import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function FAQ() {
  return (
    <div className="mx-auto w-screen px-10 py-8">
      <h1 className="mb-4 text-center text-6xl font-bold">
        Frequently Asked Questions
      </h1>
      <p className="mb-8 text-center text-2xl text-gray-600">
        Here are the answers to the most frequently asked questions.
      </p>

      <div className="grid gap-8">
        <Card className="mx-auto w-full lg:w-4/5 xl:w-3/4 2xl:w-2/3">
          <CardHeader className="pb-0">
            <CardTitle className="md:text-3xl">
              Most Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-start text-base md:text-lg">
                  What materials are SweetBeasts plushies made from?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base">
                  [Insert Here, idk what it is made of]
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        <Card className="mx-auto w-full lg:w-4/5 xl:w-3/4 2xl:w-2/3">
          <CardHeader className="pb-0">
            <CardTitle className="md:text-3xl">Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-start text-base md:text-lg">
                  Do you have a physical store where I can purchase SweetBeasts
                  plushies?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base">
                  At this time, SweetBeasts operates exclusively online. You can
                  browse and purchase our plushies through our website, where we
                  offer a secure and convenient shopping experience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        <Card className="mx-auto w-full lg:w-4/5 xl:w-3/4 2xl:w-2/3">
          <CardHeader className="pb-0">
            <CardTitle className="md:text-3xl">Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-start text-base md:text-lg">
                  Do you have a physical store where I can purchase SweetBeasts
                  plushies?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base">
                  At this time, SweetBeasts operates exclusively online. You can
                  browse and purchase our plushies through our website, where we
                  offer a secure and convenient shopping experience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        <Card className="mx-auto w-full lg:w-4/5 xl:w-3/4 2xl:w-2/3">
          <CardHeader className="pb-0">
            <CardTitle className="md:text-3xl">Shipping</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-start text-base md:text-lg">
                  Do you have a physical store where I can purchase SweetBeasts
                  plushies?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base">
                  At this time, SweetBeasts operates exclusively online. You can
                  browse and purchase our plushies through our website, where we
                  offer a secure and convenient shopping experience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        <Card className="mx-auto w-full lg:w-4/5 xl:w-3/4 2xl:w-2/3">
          <CardHeader className="pb-0">
            <CardTitle className="md:text-3xl">Returns</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-start text-base md:text-lg">
                  Do you have a physical store where I can purchase SweetBeasts
                  plushies?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base">
                  At this time, SweetBeasts operates exclusively online. You can
                  browse and purchase our plushies through our website, where we
                  offer a secure and convenient shopping experience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
