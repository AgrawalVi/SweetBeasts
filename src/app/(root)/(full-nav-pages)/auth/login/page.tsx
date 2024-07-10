import { LoginForm } from '@/components/auth/login-form'

const LoginPage = ({
  searchParams,
}: {
  searchParams: { redirectTo?: string }
}) => {
  return <LoginForm redirectTo={searchParams.redirectTo} />
}

export default LoginPage
