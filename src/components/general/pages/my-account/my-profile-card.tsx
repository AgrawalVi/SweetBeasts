import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function MyProfileCard() {
  return (
    <Card className="w-full sm:w-[30rem]">
      <CardHeader>
        <CardTitle>Your Profile</CardTitle>
        <CardDescription>Manage your account settings here</CardDescription>
      </CardHeader>
      <CardContent>
        <div>Account Settings Content</div>
      </CardContent>
    </Card>
  )
}
