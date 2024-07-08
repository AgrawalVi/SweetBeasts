import { LoginForm } from '@/components/auth/login-form'
import { Suspense } from 'react'

const LoginPage = ({
  searchParams,
}: {
  searchParams: { redirectTo?: string }
}) => {
  return <LoginForm redirectTo={searchParams.redirectTo} />
}

export default LoginPage
