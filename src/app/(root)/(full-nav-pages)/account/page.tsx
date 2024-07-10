import AccountSettingsCard from '@/components/general/pages/account/account-settings-card'
import AccountOrdersCard from '@/components/general/pages/account/account-orders-card'
import AccountProfileCard from '@/components/general/pages/account/account-profile-card'

export default function MyAccount() {
  return (
    <main className="relative flex w-full flex-col items-center justify-center space-y-8">
      <div className="mx-5 flex w-full max-w-6xl flex-col items-center">
        <div className="header-gradient text-center text-5xl sm:text-6xl">
          Your Account
        </div>
        <div className="my-10 h-full max-w-5xl flex-col items-start justify-start space-y-4 xl:grid xl:grid-cols-2 xl:gap-4 xl:space-y-0">
          <AccountOrdersCard />
          <div className="flex flex-col space-y-4">
            <AccountProfileCard />
            <AccountSettingsCard />
          </div>
        </div>
      </div>
    </main>
  )
}
