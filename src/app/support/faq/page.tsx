import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function FAQ() {
  return (
    <div className="w-screen mx-auto px-4 py-8">
      <h1 className="text-6xl font-bold text-center mb-4">Frequently Asked Questions</h1>
      <p className="text-gray-600 text-2xl text-center mb-8">Here are the answers to the most frequently asked questions.</p>

      <div className="grid gap-8">
        <Card className="w-4/5 mx-auto">
          <CardHeader>
            <CardTitle>Most Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What materials are SweetBeasts plushies made from?</AccordionTrigger>
                <AccordionContent>
                  [Insert Here, idk what it is made of]
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        <Card className="w-4/5 mx-auto">
          <CardHeader>
            <CardTitle>Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-6">
                <AccordionTrigger>Do you have a physical store where I can purchase SweetBeasts plushies?</AccordionTrigger>
                <AccordionContent>
                  At this time, SweetBeasts operates exclusively online. You can browse and purchase our plushies through our website, where we offer a secure and convenient shopping experience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        <Card className="w-4/5 mx-auto">
          <CardHeader>
            <CardTitle>Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-6">
                <AccordionTrigger>Do you have a physical store where I can purchase SweetBeasts plushies?</AccordionTrigger>
                <AccordionContent>
                  At this time, SweetBeasts operates exclusively online. You can browse and purchase our plushies through our website, where we offer a secure and convenient shopping experience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        <Card className="w-4/5 mx-auto">
          <CardHeader>
            <CardTitle>Shipping</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-6">
                <AccordionTrigger>Do you have a physical store where I can purchase SweetBeasts plushies?</AccordionTrigger>
                <AccordionContent>
                  At this time, SweetBeasts operates exclusively online. You can browse and purchase our plushies through our website, where we offer a secure and convenient shopping experience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        <Card className="w-4/5 mx-auto">
          <CardHeader>
            <CardTitle>Returns</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-6">
                <AccordionTrigger>Do you have a physical store where I can purchase SweetBeasts plushies?</AccordionTrigger>
                <AccordionContent>
                  At this time, SweetBeasts operates exclusively online. You can browse and purchase our plushies through our website, where we offer a secure and convenient shopping experience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

