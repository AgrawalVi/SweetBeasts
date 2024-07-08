import { RegisterForm } from '@/components/auth/register-form'

const RegisterPage = ({
  searchParams,
}: {
  searchParams: { redirectTo?: string }
}) => {
  return <RegisterForm redirectTo={searchParams.redirectTo} />
}

export default RegisterPage
