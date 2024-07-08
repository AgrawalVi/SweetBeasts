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

export const ContactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  orderNumber: z.string().optional(),
  message: z.string().min(10).max(500),
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
    name: z.string().min(1, {
      message: 'Name is required',
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

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
})

export const FindOrderSchema = z.object({
  email: z.string().email({
    message: 'Please enter an email address',
  }),
  orderNumber: z.string({
    message: 'Please enter an order number',
  }),
})
