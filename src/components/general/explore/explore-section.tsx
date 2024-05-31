import { CardBody, CardContainer, CardItem } from "@/components/aceternity/3d-card";
import Image from "next/image";
import Link from "next/link";

export default function ExploreSection() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-background p-0 m-0">
      <CardContainer className="w-full h-full rounded-none shadow-none p-0 m-0">
        <CardBody className="relative group/card w-full h-full rounded-none p-8 border-none bg-background flex flex-col justify-center items-center">
          <CardItem translateZ="30" className="text-9xl font-bold text-center bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent">
            EXPLORE
          </CardItem>
          <CardItem as="p" translateZ="30" className="text-5xl max-w-2xl mt-2 text-center bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent mb-4">
            our Collection of Plushies
          </CardItem>
          <div className="flex justify-center items-center mt-6">
            <CardItem translateZ={30}>
              <Link href="/products/pogo" passHref>
                <button className="w-[125px] h-[50px] px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-900 dark:bg-white dark:text-black text-white text-md font-bold">
                  Plushies
                </button>
              </Link>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
