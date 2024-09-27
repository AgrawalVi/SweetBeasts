import { ProductVariantWithParent } from "@/types";

export const getProductByIdApi = async (productId: number) => {
  const response = await fetch(`/api/products/${productId}`, {
    method: 'GET'
  })

  if (response.ok) {
    return {success: (await response.json()) as ProductVariantWithParent}
  } else {
    return {error: 'Error fetching product'}
  }
}