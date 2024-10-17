import Image from 'next/image'

interface SVGDecorationProps {
  leftSvgs: string[]
  rightSvgs: string[]
}

export default function SVGDecoration({
  leftSvgs,
  rightSvgs,
}: SVGDecorationProps) {
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block">
      {/* Left side SVGs */}
      <div className="absolute left-[-20%] top-[10%]">
        {leftSvgs.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`SVG Left ${index + 1}`}
            width={350}
            height={350}
            className=""
          />
        ))}
      </div>

      {/* Right side SVGs */}
      <div className="absolute right-[-25%] top-[10%] flex flex-col space-y-12">
        {rightSvgs.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`SVG Right ${index + 1}`}
            width={350}
            height={350}
            className="h-[350px] w-[350px]"
          />
        ))}
      </div>
    </div>
  )
}
