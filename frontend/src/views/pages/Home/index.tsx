import { useQuery } from "@apollo/client";
import Loading from "src/components/common/Loading";
import { Button } from "src/components/ui/Button";
import { getWaiters } from "src/graphql/querys";

const Home = () => {
  const { data, loading } = useQuery(getWaiters);
  return (
    <div className="flex flex-col justify-center">
      <h1 className="mb-4 text-center text-3xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl">
        Select a waiter
      </h1>
      <p className="mb-6 text-center font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">
        It will take table orders
      </p>
      <div className="mt-10 flex flex-row justify-center gap-6">
        {loading && <Loading />}
        {data &&
          data.waiters_waiter.map((waiter: any) => {
            return (
              <Button className="flex h-20 w-32 text-lg" variant="outline">
                {waiter.name}
              </Button>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
