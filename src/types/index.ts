import { LineItem, Product } from '@prisma/client'

export type LineItemWithProduct = LineItem & { Product: Product }

export type stripeLineItemWithProductId = {
  price: string
  quantity: number
  id: number
}
