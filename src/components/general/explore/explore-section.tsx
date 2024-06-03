import {
  CardBody,
  CardContainer,
  CardItem,
} from '@/components/aceternity/3d-card'
import Image from 'next/image'
import Link from 'next/link'

export default function ExploreSection() {
  return (
    <div className="m-0 flex h-full w-full items-center justify-center bg-background p-0">
      <CardContainer className="m-0 h-full w-full rounded-none p-0 shadow-none">
        <CardBody className="group/card relative flex h-full w-full flex-col items-center justify-center rounded-none border-none bg-background p-8">
          <CardItem
            translateZ="30"
            className="bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-center text-9xl font-bold text-transparent"
          >
            EXPLORE
          </CardItem>
          <CardItem
            as="p"
            translateZ="30"
            className="mb-4 mt-2 max-w-2xl bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-center text-5xl text-transparent"
          >
            our Collection of Plushies
          </CardItem>
          <div className="mt-6 flex items-center justify-center">
            <CardItem translateZ={30}>
              <Link href="/products/pogo" passHref>
                <button className="text-md h-[50px] w-[125px] rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-900 px-4 py-2 font-bold text-white dark:bg-white dark:text-black">
                  Plushies
                </button>
              </Link>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  )
}
