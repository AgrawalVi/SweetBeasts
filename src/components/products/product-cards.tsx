import { CardBody, CardContainer, CardItem } from "@/components/aceternity/3d-card";
import Image from "next/image";
import { BentoGrid } from "@/components/aceternity/bento-grid";
import Link from "next/link";

export default function ProductCards() {
  return (
    <BentoGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
      <CardContainer className="w-64 rounded-lg shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] -mt-4 mb-4">
        <CardBody className="relative group/card w-full h-auto rounded-xl p-4 border border-gray-200 bg-[#F08080]">
          <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            Make things float in air
          </CardItem>
          <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Hover over this card to unleash the power of CSS perspective
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
            <Image
              src="/pogo.jpg"
              width={150}
              height={150}
              className="object-cover rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-4">
            <CardItem translateZ={20}>
              <Link href="/products/pogo" passHref>
                <button className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                  Buy Now
                </button>
              </Link>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="w-64 rounded-lg shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] -mt-4 mb-4">
        <CardBody className="relative group/card w-full h-auto rounded-xl p-4 border border-gray-200 bg-[#F08080]">
          <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            Make things float in air
          </CardItem>
          <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Hover over this card to unleash the power of CSS perspective
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
            <Image
              src="/lemon-lion.jpg"
              width={150}
              height={150}
              className="object-cover rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-4">
            <CardItem translateZ={20}>
              <Link href="/products/lemon-lion" passHref>
                <button className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                  Buy Now
                </button>
              </Link>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="w-64 rounded-lg shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] -mt-4 mb-4">
        <CardBody className="relative group/card w-full h-auto rounded-xl p-4 border border-gray-200 bg-[#F08080]">
          <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            Make things float in air
          </CardItem>
          <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Hover over this card to unleash the power of CSS perspective
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
            <Image
              src="/pineapple-parrot.jpg"
              width={150}
              height={150}
              className="object-cover rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-4">
            <CardItem translateZ={20}>
              <Link href="/products/pineapple-parrot" passHref>
                <button className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                  Buy Now
                </button>
              </Link>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="w-64 rounded-lg shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] -mt-4 mb-4">
        <CardBody className="relative group/card w-full h-auto rounded-xl p-4 border border-gray-200 bg-[#F08080]">
          <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            Make things float in air
          </CardItem>
          <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Hover over this card to unleash the power of CSS perspective
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
            <Image
              src="/tangerine-turtle.jpg"
              width={150}
              height={150}
              className="object-cover rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-4">
            <CardItem translateZ={20}>
              <Link href="/products/tangerine-turtle" passHref>
                <button className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                  Buy Now
                </button>
              </Link>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </BentoGrid>
  );
}
