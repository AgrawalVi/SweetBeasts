'use client'

import Image from 'next/image'

interface SVGDecorationProps {
  decor_svgs: string[]
  plushie_svg: string
}

export default function SVGDecoration({
  decor_svgs,
  plushie_svg,
}: SVGDecorationProps) {
  // Triple the array to have more SVGs (total of 9 if original length is 3)
  decor_svgs = [...decor_svgs, ...decor_svgs, ...decor_svgs]

  const N = decor_svgs.length // Total number of SVGs (9 in this case)

  const marginTop = 5
  const marginBottom = 5
  const availableHeight = 100 - marginTop - marginBottom

  const topPositions = decor_svgs.map(
    (_, i) => `${marginTop + (i * availableHeight) / (N - 1)}%`,
  )

  const leftPositions = decor_svgs.map((_, i) => `${Math.sin(i) * 2.5 - 7.5}%`) // -12.5 to -7.5

  const rightPositions = decor_svgs.map(
    (_, i) => `${-Math.sin(i) * 2.5 + 103.5}%`, // 107.5 to 112.5
  )

  // Calculate rotations for a subtle effect
  const rotations = decor_svgs.map((_, i) => Math.floor(Math.sin(i) * 15))

  return (
    <div className="pointer-events-none absolute inset-0 hidden min-[1325px]:block">
      <div className="absolute w-full h-full">
        {decor_svgs.map((src, ind) => (
          <Image
            key={ind}
            src={src}
            alt={`SVG ${ind + 1}`}
            width={40}
            height={40}
            className="absolute"
            style={{
              top: topPositions[ind],
              left: leftPositions[ind],
              transform: `rotate(${rotations[ind]}deg)`,
            }}
          />
        ))}
      </div>
      <div className="absolute w-full h-full">
        {decor_svgs.map((src, ind) => (
          <Image
            key={ind}
            src={src}
            alt={`SVG ${ind + 1}`}
            width={40}
            height={40}
            className="absolute"
            style={{
              top: topPositions[ind],
              left: rightPositions[ind],
              transform: `scaleX(-1) rotate(${rotations[ind]}deg)`, // Flip along vertical axis
            }}
          />
        ))}
      </div>
    </div>
  )
}
