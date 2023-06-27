import { currencyFormatter } from "src/utils/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";

import { QuantityControlButton } from "./QuantityControlButton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/Table";

type CardProps = {
  products: Product[];
  handleAddProduct: (product: Product) => void;
};

const defaultProductImage = "/fair_pay_header.jpg";

export function ProductsTable({ products, handleAddProduct }: CardProps) {
  return (
    <Table>
      <TableCaption>A list of available products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">COD</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Product</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => {
          return (
            <TableRow key={product.id}>
              <TableCell className="font-medium">
                {product.id.toString().padStart(5, "0")}
              </TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage src={defaultProductImage} />
                  <AvatarFallback>{product.id}</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>
                {product.name}
                <p className="text-sm text-muted-foreground">
                  {product.short_description}
                </p>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex flex-row items-center justify-end">
                  <span className="font-semibold">
                    {currencyFormatter(product.price)}{" "}
                  </span>
                  <QuantityControlButton
                    handleClick={() => handleAddProduct(product)}
                    controlType="increase"
                  />
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
