import { useQuery } from "@apollo/client";
import { TableCard } from "src/components/TableCard";
import Loading from "src/components/common/Loading";
import { getTables } from "src/graphql/querys";

const Table = () => {
  const { data, loading } = useQuery(getTables);

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col justify-center">
        <h1 className="mb-4 text-center text-3xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl">
          Available tables
        </h1>
        <p className="mb-6 text-center font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">
          Select a table to take or finish an order
        </p>
        {loading && <Loading />}
        <div className="my-8 flex flex-row flex-wrap justify-start gap-10">
          {data &&
            data.tables_table.map((table: Table) => {
              return (
                <div className="basis-1/12" key={table.id}>
                  <TableCard table={table} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Table;
