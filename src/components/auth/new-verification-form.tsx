'use client'

import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { PuffLoader } from 'react-spinners'

import { CardWrapper } from '@/components/auth/card-wrapper'
import { FormError } from '@/components/custom/form-error'
import { FormSuccess } from '@/components/custom/form-success'
import { newVerification } from '@/actions/auth/new-verification'

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()
  const [loading, setLoading] = useState(true)

  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const onSubmit = useCallback(() => {
    if (success || error) {
      return
    }
    if (!token) {
      setLoading(false)
      setError('Token does not exist')
      return
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success)
        setError(data.error)
        setLoading(false)
      })
      .catch(() => {
        setError('Something went wrong!')
      })
  }, [token, success, error])

  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <CardWrapper
      headerLabel={loading ? 'Verifying email...' : ''}
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="flex w-full items-center justify-center">
        {loading && <PuffLoader color="#fb7185" />}
      </div>
      <FormSuccess message={success} />
      {!success && <FormError message={error} />}
    </CardWrapper>
  )
}

export default NewVerificationForm
