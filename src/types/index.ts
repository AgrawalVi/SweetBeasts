import { LineItem, Product } from '@prisma/client'

export type LineItemWithProduct = LineItem & { Product: Product }
