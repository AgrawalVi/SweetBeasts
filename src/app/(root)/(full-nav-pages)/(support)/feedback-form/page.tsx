import FeedbackForm from '@/components/general/feedback/form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Give Feedback',
  description: "Feedback form for SweetBeasts"
}

export default function FeedbackFormPage() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-bold header-gradient mb-4 text-center text-4xl sm:text-6xl">
        Give Feedback
      </h1>
      <p className="text-semibold font-muted-foreground flex w-full justify-center pb-6 text-center sm:text-xl lg:w-[50rem]">
        At SweetBeasts, we value your feedback and suggestions deeply. We are
        always looking for ways to improve our products and services. If you
        have any suggestions or feedback, please fill out the form below. We
        appreciate every opportunity to improve our offerings, and we appreciate
        any criticism.
      </p>
      <FeedbackForm />
    </div>
  )
}
