import 'server-only'

import { db } from '@/lib/db'
import { ShippingAddress } from '@prisma/client'

export const getAddressByAddressAndEmail = async (
  address: ShippingAddress,
  email: string,
) => {
  // first get all addresses for the user:
  let addresses: ShippingAddress[] = []
  try {
    addresses = await db.shippingAddress.findMany({
      where: {
        email,
      },
    })
  } catch {
    return null
  }
  // then see if there's an addresses that matches the one that is passed in
  const matchingAddress = addresses.find((existingAddress) => {
    return (
      existingAddress.recipientName === address.recipientName &&
      existingAddress.addressLine1 === address.addressLine1 &&
      existingAddress.addressLine2 === address.addressLine2 &&
      existingAddress.city === address.city &&
      existingAddress.state === address.state &&
      existingAddress.zipCode === address.zipCode &&
      existingAddress.countryCode === address.countryCode
    )
  })

  if (matchingAddress) {
    return matchingAddress
  } else {
    return null
  }
}

export const getAddressById = async (id: number) => {
  try {
    const address = await db.shippingAddress.findUnique({
      where: {
        id,
      },
    })
    return address
  } catch (e) {
    console.error('Error getting address by id', e)
    return null
  }
}

export const transferShippingAddressToUserFromGuestUser = async (
  id: number,
  userId: string,
) => {
  try {
    const shippingAddress = await db.shippingAddress.update({
      where: {
        id,
      },
      data: {
        userId,
        guestUserId: null,
      },
    })
    return shippingAddress
  } catch (e) {
    console.error(
      'Error transferring shipping address to user from guest user',
      e,
    )
    return null
  }
}
