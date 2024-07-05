import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FormError } from "@/components/custom/form-error";
import { FormSuccess } from "@/components/custom/form-success";

// Define the schema using Zod for validation
const ContactSchema = z.object({
  name: z.string().min(2).max(50).nonempty(),
  email: z.string().email(),
  orderNumber: z.string().optional(),
  message: z.string().min(10).max(500).nonempty(),
});

interface ContactFormInputs {
  name: string;
  email: string;
  orderNumber?: string;
  message: string;
}

// ContactForm component
export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);

  const { handleSubmit, register, formState: { errors } } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      orderNumber: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: ContactFormInputs) => {
    setIsPending(true);
    setError(undefined);
    setSuccess(undefined);

    try {
      // Simulate form submission logic
      console.log("Form submitted with data:", data);
      setSuccess("Message sent successfully!");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to send message.");
      }
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between space-y-6 w-full max-w-lg bg-white dark:bg-black border border-border shadow-lg rounded-lg p-8 min-h-[700px] lg:min-h-[800px]">
      <div className="space-y-6">
        <div className="mb-4">
          <Label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-white">Name</Label>
          <Input
            type="text"
            id="name"
            {...register("name")}
            className={`mt-1 block w-full border ${errors.name ? 'border-red-500' : 'border-purple-300'} rounded-lg p-2`}
            disabled={isPending}
          />
          {errors.name && <span className="text-red-500 text-sm">Name is required and must be between 2 to 50 characters.</span>}
        </div>
        <div className="mb-4">
          <Label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-white">Email</Label>
          <Input
            type="email"
            id="email"
            {...register("email")}
            className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-purple-300'} rounded-lg p-2`}
            disabled={isPending}
          />
          {errors.email && <span className="text-red-500 text-sm">Valid email is required.</span>}
        </div>
        <div className="mb-4">
          <Label htmlFor="orderNumber" className="block text-lg font-medium text-gray-700 dark:text-white">Order Number</Label>
          <Input
            type="text"
            id="orderNumber"
            {...register("orderNumber")}
            className={`mt-1 block w-full border ${errors.orderNumber ? 'border-red-500' : 'border-purple-300'} rounded-lg p-2`}
            disabled={isPending}
          />
          {errors.orderNumber && <span className="text-red-500 text-sm">Optional</span>}
        </div>
        <div className="mb-4">
          <Label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-white">Message</Label>
          <Textarea
            id="message"
            {...register("message")}
            className={`mt-1 block w-full border ${errors.message ? 'border-red-500' : 'border-purple-300'} rounded-lg p-2 h-40 lg:h-60`}
            disabled={isPending}
          />
          {errors.message && <span className="text-red-500 text-sm">Message is required and must be between 10 to 500 characters.</span>}
        </div>
      </div>
      <div className="mt-4">
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button type="submit" className="w-full mt-4" disabled={isPending}>
          Send Message
        </Button>
      </div>
    </form>
  );
};
