import TextSection from '@/components/custom/text-section'
import { ReasonsForSweetBeastsGrid } from '../reasons-for-sweetbeasts-grid'
import JoinEmailListForm from '@/components/sections/footer/email-list-form'

export default function HomeSweetbeastsMission() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center py-20">
      <div className="max-w-6xl xl:grid xl:grid-cols-3">
        <div className="header-gradient md:text-upright flex w-full flex-col justify-center text-center text-4xl sm:text-5xl md:text-7xl">
          Our Mission
        </div>
        <div className="col-span-2">
          <TextSection text="At SweetBeasts we are dedicated to bringing joy and comfort to everyone through our plushies. We are committed to supporting children in need, spreading joy across generations, and promoting healthier lifestyles. Through our products and initiatives, we aim to make a positive impact on the world, one plushie at a time." />
        </div>
      </div>
    </div>
  )
}
