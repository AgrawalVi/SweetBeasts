import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import AccountProfileContent from './account-profile-content'

export default function MyProfileCard() {
  return (
    <Card className="w-full sm:w-[30rem]">
      <CardHeader>
        <CardTitle>Your Profile</CardTitle>
        <CardDescription>Manage your profile here</CardDescription>
      </CardHeader>
      <CardContent>
        <AccountProfileContent />
      </CardContent>
    </Card>
  )
}
