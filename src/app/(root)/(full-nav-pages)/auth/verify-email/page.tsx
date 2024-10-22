import NewVerificationForm from '@/components/auth/new-verification-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Verify Email',
}

const VerifyEmailPage = () => {
  return <NewVerificationForm />
}

export default VerifyEmailPage
