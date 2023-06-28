import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";

type Props = {
  href: string;
};

export function ReturnButton({ href }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(href);
  };
  return (
    <Button className="ml-1" onClick={handleClick}>
      <MoveLeft className="h-6 w-6" />
    </Button>
  );
}
