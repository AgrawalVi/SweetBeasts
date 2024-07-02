import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

function FAQ() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-6xl font-bold text-center mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-600 text-2xl text-center mb-8">Here are the answers to the most frequently asked questions.</p>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What materials are SweetBeasts plushies made from?</AccordionTrigger>
                     <AccordionContent>
                        [Insert Here, idk what it is made of]
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-12">
                    <AccordionTrigger>How do I clean my SweetBeasts plushie?</AccordionTrigger>
                     <AccordionContent>
                        dith explain
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Are SweetBeasts plushies suitable for young children?</AccordionTrigger>
                     <AccordionContent>
                     Yes, our plushies are designed with safety in mind and are suitable for all ages. However, we recommend parental supervision for very young children, especially with smaller plushies and accessories.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Do you offer customization options for your plushies?</AccordionTrigger>
                     <AccordionContent>
                     Currently, we do not offer customization options for individual plushies. However, we regularly introduce new designs and collections, so stay tuned for updates!
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-5">
                    <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
                     <AccordionContent>
                     Currently, we do not ship internationally. However, we are working on expanding our shipping options, so please check back for updates!
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-6">
                    <AccordionTrigger>Do you have a physical store where I can purchase SweetBeasts plushies?</AccordionTrigger>
                     <AccordionContent>
                     At this time, SweetBeasts operates exclusively online. You can browse and purchase our plushies through our website, where we offer a secure and convenient shopping experience.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-7">
                    <AccordionTrigger>How can I stay informed about SweetBeasts news and promotions?</AccordionTrigger>
                     <AccordionContent>
                     To stay informed about SweetBeasts news, promotions, and exclusive offers, sign up for our newsletter and follow us on social media platforms like Instagram or Discord.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-8">
                    <AccordionTrigger>Can I suggest a fruit or animal combination for a future SweetBeasts plushie?</AccordionTrigger>
                     <AccordionContent>
                     We love hearing from our customers! While we can't guarantee specific designs, we welcome your suggestions and feedback. Feel free to share your ideas with us through our Contact Us page.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-9">
                    <AccordionTrigger>Does SweetBeasts participate in charitable initiatives or donate to causes?</AccordionTrigger>
                     <AccordionContent>
                     SweetBeasts is committed to giving back to the community. We periodically collaborate with charitable organizations and donate a portion of our proceeds to support causes we care about.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-10">
                    <AccordionTrigger>Do SweetBeasts plushies have a scent or fragrance?</AccordionTrigger>
                     <AccordionContent>
                     SweetBeasts plushies are fragrance-free and do not have added scents. They are designed to be hypoallergenic and suitable for sensitive individuals.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-11">
                    <AccordionTrigger>What makes SweetBeasts plushies unique compared to other plush toy brands?</AccordionTrigger>
                     <AccordionContent>
                     SweetBeasts plushies are uniquely designed with vibrant fruit-inspired themes and crafted from high-quality materials for durability and softness. Each plushie embodies our commitment to creativity, quality, and customer satisfaction.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default FAQ;
