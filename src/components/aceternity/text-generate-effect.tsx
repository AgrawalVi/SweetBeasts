'use client'

import { useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'

import { cn } from '@/lib/utils'

export const TextGenerateEffect = ({
  words,
  className,
  wordClassName,
}: {
  words: string
  className?: string
  wordClassName?: string
}) => {
  const [scope, animate] = useAnimate()
  let wordsArray = words.split(' ')
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      },
    )
  }, [scope.current])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className="opacity-0">
              {word}{' '}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn('font-bold', className)}>
      <div className="mt-4">
        <div
          className={cn(
            'text-2xl leading-snug tracking-wide text-neutral-800 dark:text-neutral-300',
            wordClassName,
          )}
        >
          {renderWords()}
        </div>
      </div>
    </div>
  )
}
