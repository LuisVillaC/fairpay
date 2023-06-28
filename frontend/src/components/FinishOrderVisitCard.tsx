import { useEffect, useState } from "react";
import { cn, currencyFormatter } from "src/utils/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/Select";
import { Separator } from "./ui/Separator";

type CardProps = {
  customerVisit: CustomerVisitResume;
} & React.ComponentProps<typeof Card>;

const defaultTipValue = 10;
const tipsOptions = [0, 5, 8, 10, 15];

export function FinishOrderVisitCard({
  customerVisit,
  className,
  ...props
}: CardProps) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedTip, setSelectedTip] = useState(defaultTipValue);
  const [tipPrice, setTipPrice] = useState(0);
  const [customerProducts, setCustomerProducts] = useState<CustomerProduct>({});

  useEffect(() => {
    let productsPrice = 0;
    const filteredCustomerProducts: CustomerProduct = {};
    customerVisit.visits_customervisitproducts.map(
      ({ products_product }, index) => {
        if (products_product.id in filteredCustomerProducts) {
          filteredCustomerProducts[products_product.id]["quantity"]++;
        } else {
          filteredCustomerProducts[products_product.id] = {
            product: products_product,
            quantity: 1,
          };
        }
        productsPrice += products_product.price;
        return index;
      }
    );
    const tipValue = (productsPrice * selectedTip) / 100;
    productsPrice += tipValue;
    setTipPrice(tipValue);
    setTotalPrice(productsPrice);
    setCustomerProducts({ ...filteredCustomerProducts });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerVisit, selectedTip]);

  const cardInfoItem = (component: JSX.Element) => {
    return (
      <div className="mb-4 grid grid-cols-[25px_1fr] items-start last:mb-0 last:pb-0">
        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
        <div className="space-y-0">
          <p className="text-sm font-medium leading-none">{component}</p>
        </div>
      </div>
    );
  };

  return (
    <Card className={cn("w-[330px]", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-center">
          Customer: {customerVisit.customer}
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {Object.entries(customerProducts).map(
            ([product_id, { product, quantity }], index) =>
              cardInfoItem(
                <div key={index}>
                  {product.name} x {quantity} - (
                  {currencyFormatter(product.price * quantity)})
                </div>
              )
          )}
          <div className="flex flex-col items-start">
            <span className="mr-4 font-semibold">Tip:</span>
            <div className="flex flex-row items-center">
              <Select
                defaultValue={`${selectedTip}`}
                onValueChange={(value: string) => {
                  setSelectedTip(parseInt(value, 10));
                }}
              >
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select a tip" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Suggested</SelectLabel>
                    {tipsOptions.map((tipOption) => {
                      return (
                        <SelectItem value={`${tipOption}`}>
                          {tipOption} %
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <span className="ml-4 font-light text-gray-500 md:text-sm">
                Value : {currencyFormatter(tipPrice)}
              </span>
            </div>
          </div>
        </div>
        <Separator />
      </CardContent>
      <CardFooter>
        <div className="flex flex-row items-center">
          <h3 className="font-bold">Total:</h3>
          <span className="ml-4 font-semibold">
            {currencyFormatter(totalPrice)}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
