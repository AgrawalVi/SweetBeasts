import TextSection from '@/components/custom/text-section'
import { ReasonsForSweetBeastsGrid } from '../reasons-for-sweetbeasts-grid'
import JoinEmailListForm from '@/components/sections/footer/email-list-form'

export default function HomeSweetbeastsMission() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center py-20">
      <div className="max-w-6xl xl:grid xl:grid-cols-3">
        {/* Header Section */}
        <div className="col-span-3">
          <div className="header-gradient md:text-upright flex w-full flex-col justify-center text-center text-4xl sm:text-5xl md:text-7xl">
            Our Mission
          </div>
        </div>
        {/* Text Section */}
        <div className="col-span-3">
          <TextSection text="At SweetBeasts, our plushies are created by combining the sweetness of fruits with the playfulness of animals. Each one of our creations encourages a balanced diet and a healthier lifestyle. We foster a community that strives to make the world a better place. A portion of all our sales are donated to a variety of hunger and wild-life charities of your choice. We also team up with local children’s nonprofits to donate our plushies to bring comfort and joy to children who need it most. Each purchase is a step towards building a more caring, connected, and healthier world." />
        </div>
      </div>
    </div>
  )
}
