import FeedbackForm from "@/components/general/feedback/form";

export default function FeedbackFormPage() {
  return (
    <div>
      <h1 className="text-center text-6xl text-bold header-gradient">Feedback Form</h1>
      <h3 className="text-center text-3xl text-semibold h2-gradient text-indigo-900 dark:text-purple-300">Have any Suggestions?</h3>
      <h4 className="text-center text-2xl text-semibold h2-gradient text-indigo-900 dark:text-purple-300">Fill out the Form below!</h4>
      <p className="text-center text-xl text-semibold p-gradient">We will get back to you as soon as possible!</p>
      <FeedbackForm />
    </div>
  );
}
