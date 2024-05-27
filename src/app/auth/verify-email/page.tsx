"use client"

import NewVerificationForm from "@/components/auth/new-verification-form"
import { Suspense } from "react"

const VerifyEmailPage = () => {
  return (
    <Suspense>
      <NewVerificationForm />
    </Suspense>
  )
}

export default VerifyEmailPage
