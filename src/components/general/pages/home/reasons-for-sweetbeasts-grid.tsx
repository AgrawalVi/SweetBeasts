import { cn } from '@/lib/utils'

import {
  Heart,
  MessageCircleQuestion,
  RocketIcon,
  Tags,
  ThumbsUp,
  Truck,
  WalletCards,
} from 'lucide-react'
import { IconExchange } from '@tabler/icons-react'

export function ReasonsForSweetBeastsGrid() {
  const features = [
    {
      title: 'Fast Shipping',
      description:
        'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
      icon: <Truck />,
    },
    {
      title: 'Packed with Love',
      description:
        'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
      icon: <Heart />,
    },
    {
      title: '14 Day Return Policy',
      description:
        'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
      icon: <IconExchange />,
    },
    {
      title: 'Easy Support',
      description:
        'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
      icon: <MessageCircleQuestion />,
    },
    {
      title: 'Free Shipping',
      description:
        'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
      icon: <ThumbsUp />,
    },
    {
      title: 'Our Mission',
      description:
        'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
      icon: <RocketIcon />,
    },
    {
      title: 'Payment Options',
      description:
        'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
      icon: <WalletCards />,
    },
    {
      title: 'Affordable Prices',
      description:
        'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
      icon: <Tags />,
    },
  ]
  return (
    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  )
}

const colorList = [
  'group-hover/feature:bg-red-500',
  'group-hover/feature:bg-cyan-500',
  'group-hover/feature:bg-sky-500',
  'group-hover/feature:bg-blue-500',
  'group-hover/feature:bg-indigo-500',
  'group-hover/feature:bg-violet-500',
  'group-hover/feature:bg-purple-500',
  'group-hover/feature:bg-fuchsia-500',
  'group-hover/feature:bg-pink-500',
  'group-hover/feature:bg-rose-500',
]

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) => {
  return (
    <div
      className={cn(
        'group/feature relative flex flex-col py-10 dark:border-neutral-800 lg:border-r',
        (index === 0 || index === 4) && 'dark:border-neutral-800 lg:border-l',
        index < 4 && 'dark:border-neutral-800 lg:border-b',
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-muted/50 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-muted/50 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      <div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div
          className={cn(
            'absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 dark:bg-neutral-700',
            colorList[Math.floor(Math.random() * colorList.length)],
          )}
        />
        <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-sm text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </div>
  )
}
