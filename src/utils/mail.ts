import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const generalAudienceId = process.env.RESEND_GENERAL_AUDIENCE_ID

export const addToGeneralEmailList = async (email: string) => {
  if (generalAudienceId) {
    await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId: generalAudienceId,
    })
  }
}
