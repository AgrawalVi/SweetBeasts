import FeedbackForm from '@/components/general/feedback/form'

export default function FeedbackFormPage() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-bold header-gradient mb-4 text-center text-6xl">
        Feedback
      </h1>
      <p className="text-semibold font-muted-foreground mb-2 flex w-[30rem] justify-center text-center text-xl">
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
