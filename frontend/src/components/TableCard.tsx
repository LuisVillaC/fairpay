import { Check } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { cn } from "src/utils/utils";
import { Button } from "./ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Separator } from "./ui/Separator";

type CardProps = {
  table: Table;
} & React.ComponentProps<typeof Card>;

export function TableCard({ table, className, ...props }: CardProps) {
  const navigate = useNavigate();
  const isAvailable = table.status === "available";

  const handleTakeOrder = () => {
    navigate(`/action/tables/${table.id}/take-order`);
  };
  const handleFinishOrder = () => {
    navigate(`/action/tables/${table.id}/finish-order`);
  };

  const tableInfo = [
    {
      title: `Seats available: ${table.default_client_capacity}`,
    },
    {
      title: `This table is: ${table.status}`,
    },
  ];

  return (
    <Card className={cn("w-[230px]", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-center">{table.alias}</CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {tableInfo.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-0">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        {isAvailable ? (
          <Button
            className="w-full"
            variant="outline"
            onClick={handleTakeOrder}
          >
            <Check className="mr-2 h-4 w-4" /> Take an order!
          </Button>
        ) : (
          <Button
            className="w-full bg-green-500 "
            variant="outline"
            onClick={handleFinishOrder}
          >
            <Check className="mr-2 h-4 w-4" /> Finish Order
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
