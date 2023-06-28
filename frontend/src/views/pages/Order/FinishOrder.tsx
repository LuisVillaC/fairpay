import { useMutation, useQuery } from "@apollo/client";
import { Loader2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { FinishOrderVisitCard } from "src/components/FinishOrderVisitCard";
import { ReturnButton } from "src/components/ReturnButton";
import Loading from "src/components/common/Loading";
import { Button } from "src/components/ui/Button";
import { finishTableVisit } from "src/graphql/mutations/mutations";
import { getVisitResume } from "src/graphql/querys";
import { toast } from "src/hooks/useToast";

const FinishOrder = () => {
  const navigate = useNavigate();
  const { tableId } = useParams();
  const { data, loading: loadingResume } = useQuery(getVisitResume, {
    variables: { table_id: tableId },
  });

  const [mutateFinishVisit, { error: finishingVisitError, loading }] =
    useMutation(finishTableVisit);

  const handleFinishTableVisit = async () => {
    if (data) {
      await mutateFinishVisit({
        variables: {
          table_id: tableId,
          visit_id: data.visits_customervisit[0].visit_id,
        },
      });
      if (!finishingVisitError) {
        toast({
          description: "Order finished successfully, the table is available",
        });
        navigate("/action/tables");
      }
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div>
        <ReturnButton href="/action/tables" />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="mb-4 text-center text-3xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl">
          Finish order
        </h1>
        <p className="mb-6 text-center font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">
          Finishing order for table: {tableId}
        </p>
        {loadingResume && <Loading />}
        <div className="my-8 flex flex-row flex-wrap justify-center gap-10">
          {data &&
            data.visits_customervisit.map(
              (customerVisit: CustomerVisitResume) => {
                return (
                  <div className="basis-1/12" key={customerVisit.customer}>
                    <FinishOrderVisitCard customerVisit={customerVisit} />
                  </div>
                );
              }
            )}
        </div>
        <div className="flex justify-center">
          <Button
            onClick={handleFinishTableVisit}
            disabled={loading || loadingResume}
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Finish order
          </Button>
        </div>
      </div>
    </div>
  );
};
export default FinishOrder;
