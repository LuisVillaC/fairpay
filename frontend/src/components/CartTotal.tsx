import { Loader2 } from "lucide-react";
import { useMemo } from "react";
import { currencyFormatter } from "src/utils/utils";
import { Button } from "./ui/Button";

type Props = {
  handleClick: () => void;
  selectedProducts: SelectedProducts;
  loading: boolean;
};

export function CartTotalPrice({
  handleClick,
  selectedProducts,
  loading = false,
}: Props) {
  const getTotalPrice = useMemo(() => {
    let price = 0;

    Object.entries(selectedProducts).map(([customer, productSelections]) => {
      Object.entries(productSelections).map(
        ([id_product, { product, quantity }]) => {
          const priceByProduct = product.price * quantity;
          price += priceByProduct;
          return id_product;
        }
      );
      return customer;
    });
    return price;
  }, [selectedProducts]);

  return (
    <div className="mt-5 flex flex-row justify-between rounded bg-slate-400 p-6 px-4">
      <div className="flex flex-row items-center">
        <h3 className="font-bold">Total:</h3>
        <div className="ml-4 font-semibold">
          {currencyFormatter(getTotalPrice)}
        </div>
      </div>
      <div>
        <Button onClick={handleClick} disabled={getTotalPrice === 0 || loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Place order
        </Button>
      </div>
    </div>
  );
}
