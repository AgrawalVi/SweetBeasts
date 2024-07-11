'use server'

import { getGuestUserByEmail } from '@/data/shop/guest-user'
import { getUserByEmail } from '@/data/shop/user'
import { FeedbackSchema } from '@/schemas'
import * as z from 'zod'
import { createGuestUser } from '../shop/guest-user'
import { GuestUser, User } from '@prisma/client'
import { createContactUsRequestForUser } from '@/data/customer/contact-us'
import { createContactUsRequestForGuestUser } from '@/data/customer/contact-us'
import { sendFeedBackAdmin } from '@/lib/resend'
import { sendFeedBack as sendFeedBackEmail } from '@/lib/resend'


export const sendFeedBack = async (data: z.infer<typeof FeedbackSchema>) => {
    const validatedFields = FeedbackSchema.safeParse(data)
    
    if (!validatedFields.success) {
        return { error: 'Invalid Fields' }
    }
    
    const { email, name, feedback } = validatedFields.data
    
    let user: User | null = null
    let guestUser: GuestUser | null = null
    
    user = await getUserByEmail(email)
    if (!user) {
        guestUser = await getGuestUserByEmail(email)
        if (!user) {
        const response = await createGuestUser(email)
        if (response.success) {
            guestUser = response.success
        }
        }
    }
    
    if (!user && !guestUser) {
        console.error('Unable to assign user to the request')
    }
    
    let order
    
    if (user) {
        const contactUsRequest = await createContactUsRequestForUser(
        user,
        name,
        feedback,
        order,
        )
        if (!contactUsRequest) {
        console.error('unable to create contact us request in database')
        }
    } else {
        const contactUsRequest = await createContactUsRequestForGuestUser(
        guestUser!,
        name,
        feedback,
        order,
        )
        if (!contactUsRequest) {
        console.error('unable to create contact us request in database')
        }
    }
    
    try {
        await sendFeedBackEmail(email, name, feedback)
      } catch {
        return { error: 'Error sending email' }
      }
      try {
        await sendFeedBackAdmin(email, name, feedback)
      } catch {
        return { error: 'Error sending email to the team' }
      }
    
    return { success: 'Feedback sent successfully' }
}