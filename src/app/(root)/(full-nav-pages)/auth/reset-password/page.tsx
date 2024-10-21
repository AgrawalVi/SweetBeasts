import { ForgotPasswordForm } from '@/components/auth/forgot-password-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reset Password',
}

const ForgotPassword = () => {
  return <ForgotPasswordForm />
}

export default ForgotPassword
