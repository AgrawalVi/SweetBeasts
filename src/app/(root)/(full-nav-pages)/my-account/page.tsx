import MyAccountCard from '@/components/general/pages/my-account/my-account-card'
import MyOrdersCard from '@/components/general/pages/my-account/my-orders-card'
import MyProfileCard from '@/components/general/pages/my-account/my-profile-card'

export default function MyAccount() {
  return (
    <main className="relative flex w-full flex-col items-center justify-center space-y-8">
      <div className="mx-5 flex w-full max-w-6xl flex-col items-center">
        <div className="header-gradient text-center text-5xl sm:text-6xl">
          Your Account
        </div>
        <div className="my-10 flex w-full flex-col items-center space-y-4 sm:w-fit">
          <MyProfileCard />
          <MyOrdersCard />
          <MyAccountCard />
        </div>
      </div>
    </main>
  )
}
