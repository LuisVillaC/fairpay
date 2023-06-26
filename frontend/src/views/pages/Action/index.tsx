import { Button } from "src/components/ui/Button";
import { useWaiter } from "src/context/WaiterContext";

const WaiterAction = () => {
  const { waiter } = useWaiter();
  return (
    <div className="flex flex-col justify-center">
      <h1 className="mb-4 text-center text-3xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl">
        Select a action
      </h1>
      <p className="mb-6 text-center  font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">
        <b className="font-bold">{waiter?.name}</b> will take table orders.
      </p>
      <div className="mt-8 flex flex-row justify-center gap-6">
        <Button className="flex h-20 w-40 text-lg" variant="outline">
          New order
        </Button>
        <Button className="flex h-20 w-40 text-lg" variant="outline">
          View orders
        </Button>
      </div>
    </div>
  );
};

export default WaiterAction;
