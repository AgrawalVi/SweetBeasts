import FeedbackForm from '@/components/general/feedback/form'

export default function FeedbackFormPage() {
  return (
    <div>
      <h1 className="text-bold header-gradient text-center text-6xl">
        Feedback Form
      </h1>
      <h3 className="text-semibold h2-gradient text-center text-3xl text-indigo-900 dark:text-purple-300">
        Have any Suggestions?
      </h3>
      <h4 className="text-semibold h2-gradient text-center text-2xl text-indigo-900 dark:text-purple-300">
        Fill out the Form below!
      </h4>
      <p className="text-semibold p-gradient text-center text-xl">
        We will get back to you as soon as possible!
      </p>
      <FeedbackForm />
    </div>
  )
}
