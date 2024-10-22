import { cn } from '@/lib/utils'
import {
  CardBody,
  CardContainer,
  CardItem,
} from '@/components/aceternity/3d-card'

export default function IntroducingProduct({
  className,
}: {
  className?: string
}) {
  return (
    <div
      className={cn(
        'relative m-0 flex h-full w-full items-center justify-center',
        className,
      )}
    >
      <CardContainer
        className="m-0 h-full w-full rounded-none p-0 shadow-none"
        containerClassName='py-0'
      >
        <CardBody className="group/card flex h-full w-full flex-col items-center justify-center rounded-none border-none">
        <CardItem
            as="div"
            translateZ="50"
            className="sm:text-56xl text-center font-coiny text-[2.5rem] text-rose-400 transition-all big-phone:text-6xl"
          >
            Introducing
          </CardItem>
          <CardItem
            as="h1"
            translateZ="50"
            className="text-center font-coiny text-8xl text-rose-400 transition-all big-phone:text-9xl sm:text-9xl 3xl:text-[10rem]"
          >
            Pogo
          </CardItem>
          <CardItem
            as="p"
            translateZ="50"
            className="mb-4 mt-2 max-w-2xl text-center font-coiny text-2xl text-rose-400 transition-all big-phone:text-3xl sm:text-4xl md:text-6xl"
          >
            The Peach Penguin
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  )
}
