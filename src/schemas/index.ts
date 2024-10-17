import { m } from 'framer-motion'
import * as z from 'zod'

export const JoinEmailListSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
})

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Email is required',
    })
    .email({
      message: 'Please enter a valid email address',
    }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
  code: z.optional(z.string()),
})

export const RegisterSchema = z
  .object({
    email: z
      .string()
      .min(1, {
        message: 'Email is required',
      })
      .email({
        message: 'Please enter a valid email address',
      }),
    password: z.string().min(8, {
      message: 'Minimum 8 characters required',
    }),
    confirmPassword: z.string().min(8, {
      message: 'Minimum 8 characters required',
    }),
    firstName: z.string().min(1, {
      message: 'First name is required',
    }),
    lastName: z.string().min(1, {
      message: 'Last name is required',
    }),
    newsletter: z.boolean({
      message: 'Must be either true or false',
    }),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword
    },
    {
      message: 'Passwords do not match!',
      path: ['confirmPassword'],
    },
  )

export const ResetPasswordSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Email is required',
    })
    .email({
      message: 'Please enter a valid email address',
    }),
})

export const NewPasswordSchema = z
  .object({
    password: z.string().min(8, {
      message: 'Minimum 8 characters required',
    }),
    confirmPassword: z.string().min(8, {
      message: 'Minimum 8 characters required',
    }),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword
    },
    {
      message: 'Passwords do not match!',
      path: ['confirmPassword'],
    },
  )

export const FindOrderSchema = z.object({
  email: z.string().email({
    message: 'Please enter an email address',
  }),
  orderNumber: z.string({
    message: 'Please enter an order number',
  }),
})

export const ContactSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  orderNumber: z.string().optional(),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters long' })
    .max(750, { message: 'Message cannot exceed 750 characters' }),
})

export const FeedbackSchema = z.object({
  name: z.string().min(2).max(50).nonempty(),
  email: z.string().email(),
  feedback: z.string().min(10).max(500).nonempty(),
})

export const ChangeNameSchema = z.object({
  firstName: z.string().min(1, {
    message: 'First name is required',
  }),
  lastName: z.string().min(1, {
    message: 'Last name is required',
  }),
})

export const ChangePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, {
      message: 'Current password is required',
    }),
    newPassword: z.string().min(8, {
      message: 'Minimum 8 characters required',
    }),
    confirmNewPassword: z.string().min(8, {
      message: 'Minimum 8 characters required',
    }),
  })
  .refine(
    (data) => {
      return data.newPassword === data.confirmNewPassword
    },
    {
      message: 'Passwords do not match!',
      path: ['confirmNewPassword'],
    },
  )

export const UnsubscribeSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
})