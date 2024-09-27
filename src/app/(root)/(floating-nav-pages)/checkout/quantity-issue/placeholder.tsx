// 'use client'

// import { getProductById } from '@/actions/products/products'
// import { Button } from '@/components/ui/button'
// import { lineItem } from '@prisma/client'
// import { useQueries } from '@tanstack/react-query'

// interface QuantityIssueProps {
//   originalLineItems: lineItem[]
//   newLineItems: lineItem[]
// }

// export default function QuantityIssue({
//   originalLineItems,
//   newLineItems,
// }: QuantityIssueProps) {
//   const { data, isPending, isError } = useQueries({
//     queries: originalLineItems.map((item) => ({
//       queryKey: ['product', item.productId],
//       queryFn: async () => {
//         const response = await getProductById(item.productId)
//         if (response.error) {
//           throw new Error(response.error)
//         }
//         return response.success
//       },
//     })),
//     combine: (results) => {
//       return {
//         data: results.map((result) => result.data),
//         isPending: results.some((result) => result.isPending),
//         isError: results.some((result) => result.isError),
//       }
//     },
//   })

//   let lineItemsChanges: lineItem[] = []

//   for (const item of originalLineItems) {
//     if (newLineItems.find((newItem) => newItem.productId === item.productId)) {
//       lineItemsChanges.push(item)
//     }
//   }

//   console.log(lineItemsChanges)

//   if (isPending) {
//     return <div>Loading...</div>
//   }

//   if (isError) {
//     return <div>Error loading products</div>
//   }

//   return (
//     <>
//       <div className="flex flex-col items-center justify-center space-y-4">
//         <h1>Some Products are out of stock</h1>
//         <p>
//           The quantity has been reduced to match the available inventory for the
//           following items:
//         </p>
//         <div>
//           {lineItemsChanges.map((item) => (
//             <div key={item.productId}>
//               <div>
//                 {data.find((product) => product?.id === item.productId)?.name}
//               </div>
//               <div>
//                 {item.quantity} -{' '}
//                 {
//                   newLineItems.find(
//                     (newItem) => newItem.productId === item.productId,
//                   )?.quantity
//                 }
//               </div>
//             </div>
//           ))}
//         </div>
//         <Button>Continue to checkout</Button>
//       </div>
//     </>
//   )
// }

export default function QuantityIssue() {
  return <div>QuantityIssue</div>
}
