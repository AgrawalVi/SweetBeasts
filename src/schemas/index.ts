import * as z from 'zod'

export const JoinEmailListSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address'
  })
});