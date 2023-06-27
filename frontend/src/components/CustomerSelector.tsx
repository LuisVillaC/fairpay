import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

type CardProps = {
  table: Table;
  selectedCustomer: number;
  handleSelectCustomer: React.Dispatch<React.SetStateAction<number>>;
};

export function OrderCustomerSelector({
  table,
  handleSelectCustomer,
  selectedCustomer = 1,
}: CardProps) {
  const [tableCapacity, setTableCapacity] = useState(0);
  const handleIncreaseTableCapacity = () => {
    setTableCapacity(tableCapacity + 1);
  };

  useEffect(() => {
    if (table) {
      setTableCapacity(table.default_client_capacity);
    }
  }, [table]);

  return (
    <>
      <div className="flex flex-row flex-wrap gap-6">
        {table &&
          Array.from({ length: tableCapacity }, (_, i) => i + 1).map(
            (number: number) => (
              <Button
                key={number}
                variant="outline"
                disabled={selectedCustomer === number}
                onClick={() => {
                  handleSelectCustomer(number);
                }}
              >
                C - {number}
              </Button>
            )
          )}
        <Button onClick={handleIncreaseTableCapacity}>New</Button>
      </div>
    </>
  );
}
