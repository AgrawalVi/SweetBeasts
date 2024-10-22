import { LoginForm } from '@/components/auth/login-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
}

const LoginPage = ({
  searchParams,
}: {
  searchParams: { redirectTo?: string }
}) => {
  return <LoginForm redirectTo={searchParams.redirectTo} />
}

export default LoginPage
