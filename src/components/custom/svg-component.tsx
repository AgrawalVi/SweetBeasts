import Image from 'next/image'

interface SVGDecorationProps {
  leftSvgs: string[];
  rightSvgs: string[];
}

export default function SVGDecoration({ leftSvgs, rightSvgs }: SVGDecorationProps) {
  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block">
      {/* Left side SVGs */}
      <div className="absolute top-[30%] left-[-15%] flex flex-col space-y-12">
        {leftSvgs.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`SVG Left ${index + 1}`}
            width={350}
            height={350}
            className="w-[350px] h-[350px]"
          />
        ))}
      </div>
      <div className="absolute top-[10%] left-[-25%] flex flex-col space-y-12">
        {leftSvgs.slice(2).map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`SVG Left ${index + 3}`}
            width={350}
            height={350}
            className="w-[350px] h-[350px]"
          />
        ))}
      </div>

      {/* Right side SVGs */}
      <div className="absolute top-[10%] right-[-25%] flex flex-col space-y-12">
        {rightSvgs.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`SVG Right ${index + 1}`}
            width={350}
            height={350}
            className="w-[350px] h-[350px]"
          />
        ))}
      </div>
    </div>
  )
}
