import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetHeader } from "../ui/sheet";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { useCurrentUser } from "@/hooks/use-current-user";

export default function Cart() {

  const user = useCurrentUser()
  return (
    <Sheet>
      <SheetTrigger>
        <Button>
          <ShoppingCart size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetClose />
        </SheetHeader>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl">Your cart is empty</p>
          <Button>Continue Shopping</Button>
        </div>
      </SheetContent>
    </Sheet>
  )

}