import { RegisterForm } from '@/components/auth/register-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register',
}

const RegisterPage = ({
  searchParams,
}: {
  searchParams: { redirectTo?: string }
}) => {
  return <RegisterForm redirectTo={searchParams.redirectTo} />
}

export default RegisterPage
