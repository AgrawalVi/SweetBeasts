import {
  GuestUser,
  LineItem,
  Order,
  Product,
  ShippingAddress,
} from '@prisma/client'

export type LineItemWithProduct = LineItem & { Product: Product }

export type GuestUserWithData = GuestUser & {
  shippingAddresses: ShippingAddress[]
  orders: Order[]
}

export type stripeLineItemWithProductId = {
  price: string
  quantity: number
  id: number
}