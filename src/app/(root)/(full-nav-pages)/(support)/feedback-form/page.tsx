import FeedbackForm from "@/components/general/feedback/form";

export default function FeedbackFormPage() {
  return (
    <div className="flex flex-col items-center min-h-screen px-2 py-4">
      <div className="w-full max-w-3xl">
        <h1 className="text-center text-6xl font-bold mb-6 header-gradient">Feedback Form</h1>
        <h3 className="text-center text-3xl font-semibold mb-4 h2-gradient text-indigo-900 dark:text-purple-300">Have any Suggestions?</h3>
        <h4 className="text-center text-2xl font-semibold mb-4 h2-gradient text-indigo-900 dark:text-purple-300">Fill out the Form below!</h4>
        <p className="text-center text-xl font-semibold mb--64 p-gradient">We will get back to you as soon as possible!</p>
        <FeedbackForm />
      </div>
    </div>
  );
}
