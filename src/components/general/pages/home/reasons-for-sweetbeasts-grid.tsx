import { IconExchange } from '@tabler/icons-react'
import {
  Heart,
  MessageCircleQuestion,
  Rocket,
  ShieldCheck,
  Tags,
  Truck,
  WalletCards,
} from 'lucide-react'

import { cn } from '@/lib/utils'

export function ReasonsForSweetBeastsGrid() {
  const features = [
    {
      title: 'Quality and Safety',
      description:
        'Our plushies are made from high-quality, safe materials, ensuring they are perfect for all ages.',
      icon: <ShieldCheck />,
    },
    {
      title: 'Support a New Business',
      description:
        'Your purchase helps a budding business grow and thrive, enabling us to bring more joy through our plushies.',
      icon: <Rocket />,
    },
    {
      title: 'Affordable Prices',
      description:
        'Our plushies are competitively priced, offering great value without compromising quality.',
      icon: <Tags />,
    },
    {
      title: 'Community Support',
      description:
        'We actively contribute to local hospitals and organize food drives, making a positive impact in our community.',
      icon: <Heart />,
    },
    {
      title: 'Fast Shipping',
      description:
        'Most orders are dispatched within 24 hours and delivered within 3-5 business days.',
      icon: <Truck />,
    },
    {
      title: 'Excellent Customer Support',
      description:
        'Reach our dedicated support team at support@sweetbeasts.shop for any assistance you need.',
      icon: <MessageCircleQuestion />,
    },
    {
      title: 'Free Shipping',
      description:
        'Enjoy free shipping on all orders, with no minimum purchase required.',
      icon: <WalletCards />,
    },
    {
      title: 'Easy Returns',
      description:
        'Return any product within 14 days for a full refund or exchange, no questions asked.',
      icon: <IconExchange />,
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
