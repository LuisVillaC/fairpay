import { MinusCircle, PlusCircle } from "lucide-react";
import { Button } from "./ui/Button";

type Props = {
  handleClick: () => void;
  controlType: "increase" | "decrease";
};

export function QuantityControlButton({ handleClick, controlType }: Props) {
  const isIncrease = controlType === "increase";
  return (
    <Button
      className="ml-1"
      size="icon"
      onClick={handleClick}
      variant={isIncrease ? "default" : "outline"}
    >
      {isIncrease ? (
        <PlusCircle className="h-6 w-6" />
      ) : (
        <MinusCircle className="h-6 w-6" />
      )}
    </Button>
  );
}
