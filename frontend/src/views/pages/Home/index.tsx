import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Loading from "src/components/common/Loading";
import { Button } from "src/components/ui/Button";
import { useWaiter } from "src/context/WaiterContext";
import { getWaiters } from "src/graphql/querys";

const Home = () => {
  const { data, loading } = useQuery(getWaiters);
  const { setWaiter } = useWaiter();
  const navigate = useNavigate();

  const handleSelectWaiter = (selectedWaiter: Waiter) => {
    setWaiter(selectedWaiter);
    navigate("/action");
  };

  return (
    <div className="flex flex-col justify-center">
      <h1 className="mb-4 text-center text-3xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl">
        Select a waiter
      </h1>
      <p className="mb-6 text-center font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">
        It will take table orders
      </p>
      <div className="mt-8 flex flex-row justify-center gap-6">
        {loading && <Loading />}
        {data &&
          data.waiters_waiter.map((waiter: Waiter) => {
            return (
              <Button
                key={waiter.id}
                className="flex h-20 w-32 text-lg"
                variant="outline"
                onClick={() => handleSelectWaiter(waiter)}
              >
                {waiter.name}
              </Button>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
