import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ChangeNameForm } from './profile-settings/change-name-form'
import SignOutModalButton from '../../sign-out-modal-button'

export default function MyProfileCard() {
  return (
    <Card className="relative w-full sm:w-[30rem]">
      <SignOutModalButton className="top-5 block big-phone:hidden" />
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
