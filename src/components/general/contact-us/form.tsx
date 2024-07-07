import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormError } from "@/components/custom/form-error";
import { FormSuccess } from "@/components/custom/form-success";
import { ContactSchema } from "@/schemas";


interface ContactFormInputs {
  name: string;
  email: string;
  orderNumber?: string;
  message: string;
}

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);

  const form = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      orderNumber: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormInputs) => {
    setIsPending(true);
    setError(undefined);
    setSuccess(undefined);

    try {
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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-between space-y-6 w-full max-w-lg bg-white dark:bg-black border border-muted-foreground shadow-lg rounded-lg p-8 min-h-[700px] lg:min-h-[800px]"
      >
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="John Doe"
                    disabled={isPending}
                    className="dark:border-purple-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="john.doe@example.com"
                    disabled={isPending}
                    className="dark:border-purple-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="orderNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Order Number</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Optional"
                    disabled={isPending}
                    className="dark:border-purple-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Your message here..."
                    disabled={isPending}
                    className="h-40 lg:h-60 dark:border-purple-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-4">
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full mt-4" disabled={isPending}>
            Send Message
          </Button>
        </div>
      </form>
    </Form>
  );
}
