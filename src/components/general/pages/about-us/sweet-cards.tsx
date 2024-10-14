'use client'

import { CanvasRevealEffect } from '@/components/aceternity/canvas-reveal-effect'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

export default function SweetCards() {
  return (
    <>
      <div className="mx-auto flex flex-col flex-wrap items-center justify-center gap-4 px-8 py-10 lg:flex-row xl:flex-nowrap">
        <Card
          title="SUPPORT"
          icon={<S_Icon />}
          description="We are dedicated to making a difference in our communities by actively supporting hunger and wildlife related charities and by donating plushies to children in need. Our plushies provide joy and emotional support to those that need it most."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-background"
            colors={[[255, 30, 141]]}
            dotSize={3}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 bg-purple-100/90 [mask-image:radial-gradient(400px_at_center,white,transparent)] dark:bg-black/90" />
        </Card>
        <Card
          title="WELL-BEING"
          icon={<W_Icon />}
          description="Our products promote healthier lifestyles by combining fun with education. Each plushie, themed around fruits and animals, serves as a playful reminder of the importance of a balanced diet, connecting joy with healthy choices."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-background"
            colors={[[125, 211, 252]]}
            dotSize={3}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 bg-purple-100/90 [mask-image:radial-gradient(400px_at_center,white,transparent)] dark:bg-black/90" />
        </Card>
        <Card
          title="EMPATHY"
          icon={<E_Icon />}
          description="Our plushies are designed to cultivate a community that is more mindful of and compassionate towards the ongoing challenges of food insecurity and animal endangerment."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-background"
            colors={[[228, 68, 253]]}
            dotSize={3}
          />
          <div className="absolute inset-0 bg-purple-100/90 [mask-image:radial-gradient(400px_at_center,white,transparent)] dark:bg-black/90" />
        </Card>
        <Card
          title="ENGAGEMENT"
          icon={<E_Icon />}
          description="Creativity is at the center of our brand. We encourage ongoing interaction and feedback from the community. This engagement helps us continue to make improvements and truly connect with everyone our plushies reach. We owe it to all of you— without your support, SweetBeasts would not exist!"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-background"
            colors={[[5, 238, 255]]}
            dotSize={3}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 bg-purple-100/90 [mask-image:radial-gradient(400px_at_center,white,transparent)] dark:bg-black/90" />
        </Card>
        <Card
          title="TRANSFORMATION"
          icon={<T_Icon />}
          description="Our plushies do more than just entertain. They inspire change. By encouraging global awareness and a healthier lifestyle, each plushie empowers individuals with a sense of responsibility to contribute to society as a whole, leading to a more connected community"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-background"
            colors={[[255, 17, 0]]}
            dotSize={3}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 bg-purple-100/90 [mask-image:radial-gradient(400px_at_center,white,transparent)] dark:bg-black/90" />
        </Card>
      </div>
    </>
  )
}

const Card = ({
  title,
  icon,
  description,
  children,
}: {
  title: string
  description: string
  icon: React.ReactNode
  children?: React.ReactNode
}) => {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative mx-auto flex h-[30rem] w-full max-w-sm items-center justify-center border border-black/[0.2] p-4 dark:border-white/[0.2]"
    >
      <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="absolute bottom-0 left-0 right-0 top-0 mx-auto flex w-full items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {icon}
        </div>
        <h2 className="relative z-10 mt-4 text-center text-xl font-bold opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-neutral-900 group-hover/canvas-card:opacity-100 dark:group-hover/canvas-card:text-neutral-300 xl:text-2xl">
          {title}
        </h2>
        <h3 className="relative z-10 mt-4 pt-4 text-base font-semibold opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-neutral-900 group-hover/canvas-card:opacity-100 dark:group-hover/canvas-card:text-neutral-300 xl:text-lg">
          {description}
        </h3>
      </div>
    </div>
  )
}

const S_Icon = () => {
  return (
    <svg
      width="60.308"
      height="69.901"
      viewBox="0 0 60.308 69.901"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="h-10 w-10 text-cyan-600 group-hover/canvas-card:text-white dark:text-rose-400"
    >
      <g id="svgGroup" fill="currentColor">
        <path d="M 39.481 0.905 A 48.238 48.238 0 0 0 29.901 0.001 A 60.596 60.596 0 0 0 23.464 0.325 Q 14.247 1.311 8.601 5.301 A 22.217 22.217 0 0 0 6.54 6.943 A 15.609 15.609 0 0 0 1.101 19.001 Q 1.101 20.463 1.481 22.068 A 19.048 19.048 0 0 0 2.301 24.651 A 16.287 16.287 0 0 0 2.384 24.856 Q 3.015 26.399 4.016 27.954 A 26.383 26.383 0 0 0 6.151 30.801 Q 8.801 33.901 12.501 36.001 Q 15.301 37.601 18.301 39.201 Q 21.301 40.801 23.151 41.801 L 26.851 43.801 A 105.01 105.01 0 0 1 27.674 44.25 Q 28.947 44.953 29.751 45.451 A 15.574 15.574 0 0 1 30.169 45.719 A 13.639 13.639 0 0 1 31.651 46.851 A 7.118 7.118 0 0 1 31.935 47.114 Q 32.563 47.733 32.851 48.351 A 3.612 3.612 0 0 1 33.05 48.884 A 4.036 4.036 0 0 1 33.201 50.001 Q 33.201 52.495 30.287 52.983 A 9.67 9.67 0 0 1 28.701 53.101 A 19.421 19.421 0 0 1 27.966 53.087 Q 24.777 52.966 20.388 51.82 A 74.592 74.592 0 0 1 15.801 50.451 A 170.48 170.48 0 0 0 12.917 49.522 Q 8.839 48.251 6.85 47.919 A 7.274 7.274 0 0 0 5.701 47.801 Q 4.52 47.801 3.579 48.077 A 4.63 4.63 0 0 0 1.451 49.351 Q 0.001 50.901 0.001 53.101 Q 0.001 55.101 1.501 57.401 A 12.707 12.707 0 0 0 2.05 58.176 Q 2.805 59.163 3.831 60.132 A 23.883 23.883 0 0 0 5.951 61.901 A 34.473 34.473 0 0 0 8.705 63.749 A 42.799 42.799 0 0 0 12.751 65.901 A 30.812 30.812 0 0 0 13.008 66.02 Q 14.947 66.904 17.209 67.616 A 49.872 49.872 0 0 0 21.751 68.801 Q 26.901 69.901 32.401 69.901 A 60.922 60.922 0 0 0 39.58 69.505 Q 53.821 67.811 58.274 58.856 A 21.453 21.453 0 0 0 60.301 49.201 Q 60.301 44.001 57.201 40.001 A 16.239 16.239 0 0 0 56.691 39.376 Q 54.529 36.855 50.568 34.178 A 65.406 65.406 0 0 0 46.401 31.601 A 112.935 112.935 0 0 0 44.794 30.682 Q 43.936 30.2 42.971 29.675 A 226.731 226.731 0 0 0 40.501 28.351 Q 37.001 26.501 35.001 25.401 A 42.94 42.94 0 0 1 33.487 24.527 A 50.779 50.779 0 0 1 30.901 22.851 Q 28.801 21.401 27.851 20.051 A 5.959 5.959 0 0 1 27.577 19.625 A 4.741 4.741 0 0 1 26.901 17.201 A 6.716 6.716 0 0 1 26.963 16.265 Q 27.384 13.276 30.648 12.599 A 10.651 10.651 0 0 1 32.801 12.401 A 15.335 15.335 0 0 1 33.704 12.428 Q 35.494 12.533 37.442 13.053 A 26.738 26.738 0 0 1 40.901 14.251 Q 45.301 16.101 48.901 17.951 Q 51.517 19.295 53.182 19.662 A 5.255 5.255 0 0 0 54.301 19.801 Q 55.401 19.801 56.351 19.351 A 3.434 3.434 0 0 0 57.3 18.679 A 4.467 4.467 0 0 0 57.951 17.851 Q 58.601 16.801 58.601 15.301 Q 58.601 9.801 50.201 4.901 A 34.824 34.824 0 0 0 39.481 0.905 Z" />
      </g>
    </svg>
  )
}

const W_Icon = () => {
  return (
    <svg
      width="91.7"
      height="69.101"
      viewBox="0 0 91.7 69.101"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="h-10 w-16 text-cyan-600 drop-shadow-md group-hover/canvas-card:text-white dark:text-rose-400"
    >
      <g id="svgGroup" fill="currentColor">
        <path d="M 68 34.7 L 68.2 10.2 A 18.246 18.246 0 0 1 68.394 7.444 Q 68.889 4.211 70.65 2.45 A 6.934 6.934 0 0 1 72.987 0.957 Q 75.35 0 79.1 0 A 18.606 18.606 0 0 1 81.472 0.142 Q 83.574 0.413 85.05 1.2 Q 86.751 2.107 88.081 4.33 A 16.078 16.078 0 0 1 88.9 5.9 A 19.705 19.705 0 0 1 89.921 8.739 Q 90.716 11.556 91.1 15.4 Q 91.7 21.4 91.7 31.3 Q 91.7 37.2 90.7 42.3 A 49.34 49.34 0 0 1 89.609 46.796 Q 88.947 49.032 88.112 50.946 A 29.951 29.951 0 0 1 88 51.2 A 34.616 34.616 0 0 1 84.947 56.68 A 31.04 31.04 0 0 1 83.95 58.05 A 30.668 30.668 0 0 1 81.305 61.072 A 24.092 24.092 0 0 1 79 63.1 Q 76.4 65.1 73.5 66.45 Q 70.6 67.8 67.85 68.35 A 27.836 27.836 0 0 1 63.48 68.881 A 25 25 0 0 1 62.5 68.9 Q 53.5 68.9 46.2 63.2 Q 39 69.1 29.9 69.1 Q 26 69.1 22.1 67.95 A 24.676 24.676 0 0 1 17.727 66.167 A 33.084 33.084 0 0 1 14.15 64 Q 10.1 61.2 7 57.05 Q 3.9 52.9 1.95 46.25 Q 0 39.6 0 31.5 Q 0 20.751 0.842 14.311 A 48.689 48.689 0 0 1 1.25 11.7 A 35.848 35.848 0 0 1 1.956 8.619 Q 2.83 5.498 4.104 3.701 A 7.308 7.308 0 0 1 5.05 2.6 Q 7.182 0.594 10.956 0.265 A 17.787 17.787 0 0 1 12.5 0.2 A 23.739 23.739 0 0 1 15.008 0.324 Q 16.235 0.455 17.258 0.723 A 9.773 9.773 0 0 1 19 1.35 A 7.573 7.573 0 0 1 20.97 2.685 A 6.432 6.432 0 0 1 22.4 4.7 A 9.939 9.939 0 0 1 23.048 6.702 Q 23.4 8.322 23.4 10.4 L 23.5 34.8 A 99.099 99.099 0 0 0 23.594 39.269 Q 23.875 45.475 25 48.7 Q 26.5 53 30.9 53 A 4.12 4.12 0 0 0 32.367 52.751 Q 33.397 52.361 34.066 51.363 A 4.7 4.7 0 0 0 34.2 51.15 A 7.396 7.396 0 0 0 34.805 49.814 Q 35.285 48.443 35.559 46.416 A 32.733 32.733 0 0 0 35.7 45.2 A 37.675 37.675 0 0 1 35.131 41.894 Q 34.631 38.087 34.473 32.572 A 191.507 191.507 0 0 1 34.4 27.1 Q 34.4 20.2 34.7 16.1 A 76.594 76.594 0 0 1 34.967 13.18 Q 35.128 11.739 35.335 10.467 A 41.196 41.196 0 0 1 35.6 9 A 13.391 13.391 0 0 1 36.027 7.369 Q 36.616 5.614 37.6 4.7 Q 39 3.4 40.75 2.85 Q 42.422 2.325 45.326 2.301 A 33.939 33.939 0 0 1 45.6 2.3 A 56.087 56.087 0 0 1 46.887 2.314 Q 47.906 2.338 48.75 2.4 Q 50.1 2.5 51.3 3 A 45.757 45.757 0 0 1 52.144 3.361 Q 52.8 3.65 53.3 3.9 Q 54.1 4.3 54.8 5.4 Q 55.322 6.221 55.678 6.875 A 14.086 14.086 0 0 1 55.9 7.3 A 4.801 4.801 0 0 1 56.121 7.829 Q 56.331 8.417 56.526 9.299 A 24.287 24.287 0 0 1 56.65 9.9 A 52.343 52.343 0 0 1 56.884 11.187 Q 57.056 12.206 57.15 13.05 Q 57.265 14.084 57.321 15.879 A 94.43 94.43 0 0 1 57.35 17.05 Q 57.4 19.7 57.45 21.65 Q 57.5 23.6 57.5 27.2 Q 57.5 39.8 56.2 45.8 A 23.312 23.312 0 0 0 56.48 47.675 Q 56.842 49.531 57.46 50.69 A 5.613 5.613 0 0 0 57.7 51.1 A 3.585 3.585 0 0 0 60.329 52.748 A 5.448 5.448 0 0 0 61.1 52.8 A 5.422 5.422 0 0 0 63.711 52.19 Q 65.568 51.19 66.5 48.55 A 18.989 18.989 0 0 0 67.217 45.781 Q 68 41.638 68 34.7 Z" />
      </g>
    </svg>
  )
}

const E_Icon = () => {
  return (
    <svg
      width="91.7"
      height="69.101"
      viewBox="0 0 91.7 69.101"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="h-10 w-20 text-cyan-600 group-hover/canvas-card:text-white dark:text-rose-400"
    >
      <g id="svgGroup" fill="currentColor">
        <path
          d="M 23.002 27.9 L 40.202 27.9 Q 44.507 27.9 46.734 29.022 A 5.369 5.369
        0 0 1 47.652 29.6 A 5.086 5.086 0 0 1 49.23 31.81 Q 49.569 32.685 49.707
        33.784 A 12.995 12.995 0 0 1 49.802 35.4 A 7.055 7.055 0 0 1 49.559
        37.313 A 4.738 4.738 0 0 1 47.252 40.25 A 8.725 8.725 0 0 1 45.326 41.03
        Q 42.972 41.7 39.302 41.7 L 23.102 41.7 L 23.102 52.3 L 44.802 52.4 A
        30.163 30.163 0 0 1 47.554 52.517 Q 50.292 52.769 51.99 53.566 A 6.446
        6.446 0 0 1 52.852 54.05 A 5.111 5.111 0 0 1 54.816 56.665 Q 55.135
        57.561 55.244 58.674 A 12.526 12.526 0 0 1 55.302 59.9 Q 55.302 62.858
        54.22 64.714 A 5.657 5.657 0 0 1 52.452 66.6 Q 49.754 68.399 44.414
        68.495 A 33.989 33.989 0 0 1 43.802 68.5 L 11.402 68.5 A 17.455 17.455 0
        0 1 8.176 68.223 Q 4.685 67.565 2.752 65.35 A 8.7 8.7 0 0 1 1.243 62.761
        Q 0.255 60.226 0.053 56.303 A 41.004 41.004 0 0 1 0.002 54.2 L 0.002 12
        A 18.243 18.243 0 0 1 0.546 7.329 Q 2.131 1.362 8.331 0.253 A 17.464
        17.464 0 0 1 11.402 0 L 43.802 0 A 29.994 29.994 0 0 1 46.831 0.143 Q
        49.939 0.459 51.893 1.48 A 7.838 7.838 0 0 1 52.452 1.8 A 5.661 5.661 0
        0 1 54.794 4.851 Q 55.302 6.318 55.302 8.3 A 12.343 12.343 0 0 1 55.118
        10.508 Q 54.902 11.698 54.428 12.609 A 5.118 5.118 0 0 1 52.852 14.45 A
        7.408 7.408 0 0 1 50.905 15.41 Q 48.981 16.06 46.098 16.175 A 32.351
        32.351 0 0 1 44.802 16.2 L 23.002 16.2 L 23.002 27.9 Z"
        />
      </g>
    </svg>
  )
}

const T_Icon = () => {
  return (
    <svg
      width="65.1"
      height="68.501"
      viewBox="0 0 65.1 68.501"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="h-10 w-10 text-cyan-600 group-hover/canvas-card:text-white dark:text-rose-400"
    >
      <g id="svgGroup" fill="currentColor">
        <path
          d="M 44.3 17.3 L 44.3 53.5 A 38.081 38.081 0 0 1 44.163 56.833 Q 43.863
        60.247 42.9 62.55 A 12.144 12.144 0 0 1 41.786 64.652 Q 40.639 66.357
        39.05 67.2 A 9.924 9.924 0 0 1 36.804 68.042 Q 35.689 68.321 34.372
        68.43 A 21.492 21.492 0 0 1 32.6 68.5 A 17.422 17.422 0 0 1 29.461
        68.237 Q 25.934 67.59 24.05 65.35 A 8.922 8.922 0 0 1 22.6 62.798 Q
        21.642 60.317 21.388 56.498 A 42.701 42.701 0 0 1 21.3 54.2 L 21.1 17.3
        L 12.6 17.3 A 31.982 31.982 0 0 1 9.306 17.142 Q 5.836 16.782 3.66 15.6
        A 8.68 8.68 0 0 1 3.15 15.3 Q 0 13.3 0 8.2 A 12.452 12.452 0 0 1 0.141
        6.264 Q 0.302 5.242 0.648 4.411 A 5.932 5.932 0 0 1 1.25 3.3 A 6.162
        6.162 0 0 1 3.543 1.33 A 8.553 8.553 0 0 1 5 0.75 Q 6.68 0.246 9.127
        0.081 A 38.297 38.297 0 0 1 11.7 0 L 54.5 0 A 24.85 24.85 0 0 1 57.331
        0.15 Q 60.784 0.547 62.6 2 A 5.927 5.927 0 0 1 64.395 4.512 Q 65.1 6.297
        65.1 8.9 Q 65.1 11.23 64.377 12.837 A 5.838 5.838 0 0 1 63.65 14.05 A
        7.324 7.324 0 0 1 60.023 16.532 A 8.976 8.976 0 0 1 59.8 16.6 A 15.085
        15.085 0 0 1 57.849 17.02 Q 56.005 17.3 53.6 17.3 L 44.3 17.3 Z"
        />
      </g>
    </svg>
  )
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}
