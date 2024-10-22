import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface ZoomableImageProps {
  src: string
  alt: string
  className?: string
}

function useIsTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    const hasTouchScreen = () => {
      if (typeof window === 'undefined') return false
      if ('ontouchstart' in window) return true
      if (navigator.maxTouchPoints > 0) return true
      return false
    }

    setIsTouchDevice(hasTouchScreen())
  }, [])

  return isTouchDevice
}

export default function ZoomableImage({
  src,
  alt,
  className,
}: ZoomableImageProps) {
  const isTouchDevice = useIsTouchDevice()

  const [zoomLevel, setZoomLevel] = useState(1)

  // For desktop hover-based zoom
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({
    transform: 'scale(1)',
    transformOrigin: 'center center',
  })

  // For mobile touch-based zoom and drag
  const [isDragging, setIsDragging] = useState(false)
  const [lastPosition, setLastPosition] = useState<{
    x: number
    y: number
  } | null>(null)
  const [positionOffset, setPositionOffset] = useState<{
    x: number
    y: number
  }>({ x: 0, y: 0 })

  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  // Store image and container dimensions
  const [imageDimensions, setImageDimensions] = useState<{
    width: number
    height: number
  }>({ width: 0, height: 0 })
  const [containerDimensions, setContainerDimensions] = useState<{
    width: number
    height: number
  }>({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (imageRef.current && containerRef.current) {
        const img = imageRef.current
        const container = containerRef.current
        setImageDimensions({ width: img.offsetWidth, height: img.offsetHeight })
        setContainerDimensions({
          width: container.offsetWidth,
          height: container.offsetHeight,
        })
      }
    }

    updateDimensions()

    // Update on window resize
    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [src, zoomLevel])

  // Desktop hover-based zoom
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isTouchDevice) return
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()

    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(2)',
    })
  }

  const handleMouseLeave = () => {
    if (isTouchDevice) return
    setZoomStyle({
      transform: 'scale(1)',
      transformOrigin: 'center center',
    })
  }

  // Mobile touch-based zoom and drag
  const toggleZoom = () => {
    if (!isTouchDevice) return
    const newZoomLevel = zoomLevel === 1 ? 2 : 1
    setZoomLevel(newZoomLevel)
    setPositionOffset({ x: 0, y: 0 }) // Reset position when zoom level changes
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (zoomLevel === 1) return
    const touch = e.touches[0]
    setIsDragging(true)
    setLastPosition({ x: touch.clientX, y: touch.clientY })
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !lastPosition) return
    const touch = e.touches[0]
    const deltaX = touch.clientX - lastPosition.x
    const deltaY = touch.clientY - lastPosition.y

    let newOffsetX = positionOffset.x + deltaX
    let newOffsetY = positionOffset.y + deltaY

    // Calculate scaled image dimensions
    const scaledImageWidth = imageDimensions.width * zoomLevel
    const scaledImageHeight = imageDimensions.height * zoomLevel

    // Calculate extra dimensions
    const extraWidth = scaledImageWidth - containerDimensions.width
    const extraHeight = scaledImageHeight - containerDimensions.height

    // Maximum allowable offsets
    const maxOffsetX = extraWidth > 0 ? extraWidth / (2 * zoomLevel) : 0
    const maxOffsetY = extraHeight > 0 ? extraHeight / (2 * zoomLevel) : 0

    const minOffsetX = -maxOffsetX
    const minOffsetY = -maxOffsetY

    // Limit offsets
    newOffsetX = Math.max(Math.min(newOffsetX, maxOffsetX), minOffsetX)
    newOffsetY = Math.max(Math.min(newOffsetY, maxOffsetY), minOffsetY)

    setPositionOffset({ x: newOffsetX, y: newOffsetY })
    setLastPosition({ x: touch.clientX, y: touch.clientY })
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    setLastPosition(null)
  }

  // Apply styles
  let imageStyle: React.CSSProperties = {}
  if (isTouchDevice) {
    // Mobile
    imageStyle = {
      transform: `scale(${zoomLevel}) translate(${positionOffset.x}px, ${positionOffset.y}px)`,
      transformOrigin: 'center center',
      transition: isDragging ? 'none' : 'transform 0.3s ease-in-out',
    }
  } else {
    // Desktop
    imageStyle = zoomStyle
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      onClick={toggleZoom}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ touchAction: 'none' }} // Prevent default touch actions
    >
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        width={800}
        height={800}
        className={`mx-auto h-auto max-h-[80vh] w-full rounded-lg object-cover transition-transform duration-300 ease-in-out ${className}`}
        style={imageStyle}
        onLoad={() => {
          if (imageRef.current && containerRef.current) {
            const img = imageRef.current
            const container = containerRef.current
            setImageDimensions({
              width: img.offsetWidth,
              height: img.offsetHeight,
            })
            setContainerDimensions({
              width: container.offsetWidth,
              height: container.offsetHeight,
            })
          }
        }}
      />
    </div>
  )
}
