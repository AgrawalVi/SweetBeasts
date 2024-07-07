import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import { getUserByEmail, getUserByStripeCustomerId } from '@/data/shop/user'
import { ShippingAddress } from '@prisma/client'
import { db } from '@/lib/db'
import {
  getProductByStripePriceId,
  updateProductInventoryAndNumSold,
} from '@/data/shop/product'
import { notEmpty } from '@/lib/utils'
import { getAddressByAddressAndEmail } from '@/data/shop/address'
import { clearGuestIdCart, clearUserCart } from '../customer/cart'

import crypto from 'crypto'
import { getOrderByOrderNumber } from '@/data/shop/orders'
import {
  deleteOpenCheckoutSessionById,
  deleteOpenCheckoutSessionByStripeCheckoutSessionId,
  getAllOpenCheckoutSessionsWithProductByProductId,
} from '@/data/shop/open-checkout-session'

const generateOrderNumber = async (): Promise<string> => {
  const orderNumber = `SB${crypto.randomInt(100_000, 100_000_0).toString()}`
  // check if the order number already exists in the database
  const existingOrder = await getOrderByOrderNumber(orderNumber)
  if (existingOrder) {
    return generateOrderNumber()
  }
  return orderNumber
}

const expireAllOpenCheckoutSessionsByProductId = async (productId: number) => {
  const checkoutSessions =
    await getAllOpenCheckoutSessionsWithProductByProductId(productId)

  if (checkoutSessions.length < 0) {
    return
  }

  for (const checkoutSession of checkoutSessions) {
    try {
      await stripe.checkout.sessions.expire(
        checkoutSession.stripeCheckoutSessionId,
      )
    } catch (e) {
      console.error('Error expiring checkout session', e)
    }

    const response = await deleteOpenCheckoutSessionById(checkoutSession.id)
    if (!response) {
      console.error('Error deleting open checkout session')
    }
  }
}

export const createOrder = async (
  event: Stripe.CheckoutSessionCompletedEvent,
) => {
  const checkoutSession = event.data.object as Stripe.Checkout.Session
  console.log('checkoutSession', checkoutSession)

  // check that the session is completed
  if (checkoutSession.status !== 'complete') {
    return { error: 'Session is not complete' }
  }

  // verify that the payment has been processed before moving forward
  if (checkoutSession.payment_status !== 'paid') {
    return { error: 'Payment is not paid' }
  }

  // get order information from event
  const timePlaced = new Date(event.created * 1000)

  // get user and create an order in the database
  const stripeCustomerId = checkoutSession.customer as string | null

  let stripeCustomer
  let user

  if (stripeCustomerId) {
    stripeCustomer = await stripe.customers.retrieve(stripeCustomerId)
    user = await getUserByStripeCustomerId(stripeCustomerId)
    console.log('user', user)
  } else {
    // check if a user exists with the email
    const email = checkoutSession.customer_details?.email as string
    user = await getUserByEmail(email)
    if (user) {
      stripeCustomer = await stripe.customers.retrieve(user.stripeCustomerId)
    } else {
      stripeCustomer = await stripe.customers.create({
        email,
      })
    }
  }

  if (stripeCustomer.deleted) {
    console.error('Error at new-order: stripeCustomer.deleted')
    return {
      error:
        'An exception has occurred. Please contact support for assistance. CODE: STR_CD_001',
    }
  }

  let lineItems
  try {
    lineItems = await stripe.checkout.sessions.listLineItems(checkoutSession.id)
  } catch (e) {
    console.error('unable to get line items', e)
    return { error: 'Unable to get line items' }
  }

  let lineItemsToAdd = await Promise.all(
    lineItems.data.map(async (item) => {
      const product = await getProductByStripePriceId(item.price?.id)
      if (!product) {
        return null
      } else {
        return {
          productId: product.id,
          quantity: item.quantity as number,
          pricePaidInCents: item.price?.unit_amount as number,
        }
      }
    }),
  )

  // add up all the prices to get the total price paid in the lineItems array
  let totalPrice = 0
  lineItems.data.forEach((item) => {
    totalPrice +=
      (item.price?.unit_amount as number) * (item.quantity as number)
  })

  let filteredLineItemsToAdd = lineItemsToAdd.filter(notEmpty)

  // check if the customer already has used this address
  const address: ShippingAddress = {
    id: 0,
    userId: user?.id || null,
    guestUserId: null,
    email: stripeCustomer.email as string,
    recipientName: checkoutSession.shipping_details?.name || null,
    addressLine1: checkoutSession.shipping_details?.address?.line1 || null,
    addressLine2: checkoutSession.shipping_details?.address?.line2 || null,
    city: checkoutSession.shipping_details?.address?.city || null,
    state: checkoutSession.shipping_details?.address?.state || null,
    zipCode: checkoutSession.shipping_details?.address?.postal_code || null,
    countryCode: checkoutSession.shipping_details?.address?.country || null,
    createdAt: timePlaced,
    updatedAt: timePlaced,
  }

  const existingAddress = await getAddressByAddressAndEmail(
    address,
    stripeCustomer.email as string,
  )
  let addressIdToAdd
  if (existingAddress) {
    addressIdToAdd = existingAddress.id
  }

  const guestId = checkoutSession.metadata?.guestId as string

  if (guestId) {
    const response = await clearGuestIdCart(guestId)
    if (response.error) {
      console.error('error clearing guest cart after checkout', response.error)
    }
  } else if (user?.id) {
    const response = await clearUserCart(user?.id)
    if (response.error) {
      console.error('error clearing user cart after checkout', response.error)
    }
  }

  // generate an order number
  const orderNumber = await generateOrderNumber()

  // create the order in the database
  try {
    if (addressIdToAdd) {
      await db.order.create({
        data: {
          userId: user?.id,
          email: stripeCustomer.email as string,
          createdAt: timePlaced,
          updatedAt: timePlaced,
          orderNumber,
          stripeOrderId: checkoutSession.id,
          stripeCustomerId: stripeCustomer.id,
          lineItems: {
            create: filteredLineItemsToAdd.map((item) => ({
              productId: item.productId,
              quantity: item.quantity,
              pricePerUnitInCents: item.pricePaidInCents,
            })),
          },
          totalPaidInCents: totalPrice,
          shippingAddressId: addressIdToAdd,
        },
      })
    } else {
      const shippingAddress = await db.shippingAddress.create({
        data: {
          userId: user?.id,
          email: stripeCustomer.email as string,
          recipientName: checkoutSession.shipping_details?.name,
          addressLine1: checkoutSession.shipping_details?.address?.line1,
          addressLine2: checkoutSession.shipping_details?.address?.line2,
          city: checkoutSession.shipping_details?.address?.city,
          state: checkoutSession.shipping_details?.address?.state,
          zipCode: checkoutSession.shipping_details?.address?.postal_code,
          countryCode: checkoutSession.shipping_details?.address?.country,
          createdAt: timePlaced,
          updatedAt: timePlaced,
        },
      })

      await db.order.create({
        data: {
          userId: user?.id,
          email: stripeCustomer.email as string,
          createdAt: timePlaced,
          updatedAt: timePlaced,
          orderNumber,
          stripeOrderId: checkoutSession.id,
          stripeCustomerId: stripeCustomer.id,
          lineItems: {
            create: filteredLineItemsToAdd.map((item) => ({
              productId: item.productId,
              quantity: item.quantity,
              pricePerUnitInCents: item.pricePaidInCents,
            })),
          },
          totalPaidInCents: totalPrice,
          shippingAddressId: shippingAddress.id,
        },
      })
    }
  } catch (e) {
    console.error('unable to create order', e)
    return { error: 'Unable to create order' }
  }

  // decrease inventory and increase numSold for each product that's been purchased in the lineItems array
  for (const item of filteredLineItemsToAdd) {
    const product = await updateProductInventoryAndNumSold(
      item.productId,
      item.quantity,
    )
    if (!product) {
      return { error: 'Error updating product inventory and num sold' }
    }

    if (product.inventory <= 0) {
      await expireAllOpenCheckoutSessionsByProductId(product.id)
      if (product.inventory < 0) {
        console.error('Inventory is less than 0')
      }

      await deleteOpenCheckoutSessionByStripeCheckoutSessionId(
        checkoutSession.id,
      )
    }
  }

  return { success: 'order successfully created' }
}
