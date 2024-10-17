import {
  GuestUser,
  LineItem,
  Order,
  Product,
  ProductVariant,
  ShippingAddress,
} from '@prisma/client'

export type LineItemWithProduct = LineItem & {
  productVariant: ProductVariant & { parentProduct: Product }
}

export type GuestUserWithData = GuestUser & {
  shippingAddresses: ShippingAddress[]
  orders: Order[]
}

export type stripeLineItemWithProductId = {
  price: string
  quantity: number
  id: number
}

export type OrderWithData = Order & {
  lineItems: LineItemWithProduct[] | null
} & {
  shippingAddress: ShippingAddress
}

export type ResendWebhookBody = {
  type: 'contact.created' | 'contact.deleted' | 'contact.updated'
  created_at: Date
  data: {
    id: string
    audience_id: string
    created_at: Date
    updated_at: Date
    email: string
    first_name: string
    last_name: string
    unsubscribed: boolean
  }
}

export type ProductVariantWithParent = ProductVariant & {
  parentProduct: Product
}
