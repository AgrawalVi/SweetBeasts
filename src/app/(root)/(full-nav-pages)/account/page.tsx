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
        <div className="mt-10 hidden h-full grid-cols-2 gap-4 lg:grid">
          <div className="flex flex-col space-y-4">
            <AccountProfileCard />
            <AccountOrdersCard />
          </div>
          <div>
            <AccountSettingsCard />
          </div>
        </div>
        <div className="mt-10 flex flex-col space-y-4 lg:hidden">
          <AccountProfileCard />
          <AccountOrdersCard />
          <AccountSettingsCard />
        </div>
      </div>
    </main>
  )
}
