import { cn, currencyFormatter } from "src/utils/utils";
import { QuantityControlButton } from "./QuantityControlButton";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Separator } from "./ui/Separator";
import { Table, TableBody, TableCell, TableRow } from "./ui/Table";

type Props = {
  customerId: number;
  selectedProducts: CustomerProduct;
  handleIncrease: (customerId: number, product: Product) => void;
  handleDecrease: (customerId: number, product: Product) => void;
} & React.ComponentProps<typeof Card>;

export function CustomerSelectedProducts({
  customerId,
  selectedProducts,
  handleIncrease,
  handleDecrease,
  className,
  ...props
}: Props) {
  return (
    <Card className={cn("w-full", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-left font-semibold leading-none tracking-tight sm:text-sm md:text-base lg:text-base xl:text-lg">
          Customer #{customerId} products:
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <Table>
            <TableBody>
              {Object.entries(selectedProducts).map(
                ([id_product, { product, quantity }]) => {
                  return (
                    <TableRow key={id_product}>
                      <TableCell className="font-medium">
                        {product.name}
                      </TableCell>
                      <TableCell className="text-right">
                        {currencyFormatter(product.price * quantity)}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex flex-row items-end justify-evenly">
                          <QuantityControlButton
                            handleClick={() => {
                              handleDecrease(customerId, product);
                            }}
                            controlType="decrease"
                          />
                          <span className="ml-1">{quantity}</span>
                          <QuantityControlButton
                            handleClick={() => {
                              handleIncrease(customerId, product);
                            }}
                            controlType="increase"
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
