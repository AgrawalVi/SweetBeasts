import { addToMailingList } from '@/data/customer/mailing-list'
import { currentRole } from '@/lib/auth'
import { getAllContacts } from '@/lib/resend'

export async function GET() {
  const role = await currentRole()

  // must be an admin to access this endpoint
  if (role !== 'ADMIN') {
    return new Response('Unauthorized', { status: 401 })
  }

  const getAllContactsResponse = await getAllContacts()
  const contacts = getAllContactsResponse.data?.data

  if (!contacts) {
    return new Response('There are no contacts', { status: 200 })
  }

  for (const contact of contacts) {
    let response = await addToMailingList(contact.email, contact.id)
    if (!response) {
      return new Response('Error adding contact to email list', {
        status: 500,
      })
    }
  }

  return new Response('Successfully added all contacts to email list', {
    status: 200,
  })
}
