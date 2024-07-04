import { Skeleton } from '../../ui/skeleton'
import CartQuantityButtonSkeleton from './cart-quantity-button-skeleton'
import RemoveProductButtonSkeleton from './remove-product-button-skeleton'

const CartItemSkeleton = () => {
  return (
    <>
      <div className="hidden sm:block">
        <div className="grid w-full grid-cols-8 items-center space-x-6">
          <Skeleton className="col-span-2 rounded-md md:h-[96px] md:w-[96px]" />
          <div className="flex flex-col sm:col-span-3">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="w-12" />
            <CartQuantityButtonSkeleton />
          </div>
          <div className="inline-flex justify-end sm:col-span-2">
            <Skeleton className="h-6 w-12" />
          </div>
          <RemoveProductButtonSkeleton />
        </div>
      </div>
      <div className="block sm:hidden">
        <div className="grid w-full grid-cols-5 items-center">
          <Skeleton className="col-span-2 h-[96px] w-[96px] rounded-md" />
          <div className="col-span-2 flex h-full w-full flex-col justify-between">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-6 w-20" />
            <div className="flex h-full items-center">
              <CartQuantityButtonSkeleton className="pt-0" />
              <RemoveProductButtonSkeleton />
            </div>
          </div>
          <div className="inline-flex flex-col items-end justify-end">
            <Skeleton className="h-8 w-16" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItemSkeleton
