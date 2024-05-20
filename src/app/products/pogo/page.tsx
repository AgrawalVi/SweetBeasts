import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";

export default function Pogo() {
  return (
    <div className="container mx-auto flex justify-end">
      <Card className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 h-96 lg:h-[600px]">
        <CardHeader className="mb-8">
          <CardTitle>Buy Now</CardTitle>
          <CardDescription>15.99</CardDescription>
        </CardHeader>
        <CardContent className="mb-72">
          <p>Want it Now? Order before it runs out!</p>
        </CardContent>
        <div className="mb-8 flex justify-center">
        <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Quantity" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Quantity</SelectLabel>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="banana">2</SelectItem>
          <SelectItem value="blueberry">3</SelectItem>
          <SelectItem value="grapes">4</SelectItem>
          <SelectItem value="pineapple">5</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
        <CardFooter className="flex justify-center">
          <Button>Buy Now</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
