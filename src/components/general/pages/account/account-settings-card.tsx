import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ChangePasswordForm } from './account-settings/change-password-form'
import SignOutModalButton from '../../sign-out-modal-button'

export default function AccountSettingsCard() {
  return (
    <Card className="w-full sm:w-[30rem]">
      <CardHeader className="relative">
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>Manage your account settings here</CardDescription>
        <SignOutModalButton className="hidden big-phone:block" />
      </CardHeader>
      <CardContent>
        <ChangePasswordForm />
      </CardContent>
    </Card>
  )
}
