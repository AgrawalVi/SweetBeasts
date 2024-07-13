import {
  CardBody,
  CardContainer,
  CardItem,
} from '@/components/aceternity/3d-card'
import { cn } from '@/lib/utils'

export default function IntroducingProduct({
  className,
}: {
  className?: string
}) {
  return (
    <div
      className={cn(
        'm-0 flex h-full w-full items-center justify-center p-0',
        className,
      )}
    >
      <CardContainer
        containerClassName="p-0"
        className="m-0 h-full w-full rounded-none p-0 shadow-none"
      >
        <CardBody className="group/card relative flex h-full w-full flex-col items-center justify-center rounded-none border-none">
          <CardItem
            translateZ="30"
            className="header-gradient sm:text-56xl text-center text-[2.5rem] text-transparent transition-all big-phone:text-6xl"
          >
            Introducing
          </CardItem>
          <CardItem
            translateZ="30"
            className="header-gradient text-center text-8xl text-transparent transition-all big-phone:text-9xl sm:text-9xl 3xl:text-[10rem]"
          >
            Pogo
          </CardItem>
          <CardItem
            as="p"
            translateZ="30"
            className="header-gradient mb-4 mt-2 max-w-2xl text-center text-2xl text-transparent transition-all big-phone:text-3xl sm:text-4xl md:text-6xl"
          >
            The Peach Penguin
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  )
}
