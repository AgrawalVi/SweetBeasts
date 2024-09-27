// route config to cache GET endpoint
export const dynamic = 'force-static'

import { type NextRequest, NextResponse } from 'next/server'
import { getProductVariantWithParentById } from "@/data/shop/product";

export const GET = async (req: NextRequest) => {
  const productId = req.url.split('/').pop()

  if (!productId || isNaN(Number(productId)) || !/^\d+$/.test(productId)) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }
  console.log(productId)

  const product = await getProductVariantWithParentById(Number(productId))

  if (!product || product.archived) {
    return NextResponse.json({error: 'Product not found'}, {status: 400})
  }

  return NextResponse.json(product)
}