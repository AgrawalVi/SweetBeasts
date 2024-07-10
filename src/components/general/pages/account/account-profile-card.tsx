import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ChangeNameForm } from './profile-settings/change-name-form'

export default function MyProfileCard() {
  return (
    <Card className="w-full sm:w-[30rem]">
      <CardHeader>
        <CardTitle>Your Profile</CardTitle>
        <CardDescription>Manage your profile here</CardDescription>
      </CardHeader>
      <CardContent>
        <ChangeNameForm />
      </CardContent>
    </Card>
  )
}
