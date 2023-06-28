import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartTotalPrice } from "src/components/CartTotal";
import { CustomerSelectedProducts } from "src/components/CustomerSelectedProducts";
import { OrderCustomerSelector } from "src/components/CustomerSelector";
import { ProductsTable } from "src/components/ProductsTable";
import { ScrollArea } from "src/components/ui/ScrollArea";
import { Separator } from "src/components/ui/Separator";
import { useWaiter } from "src/context/WaiterContext";
import {
  MakeTableBusy,
  addBulkCustomerVisit,
  addBulkCustomerVisitProducts,
} from "src/graphql/mutations/mutations";
import { getProducts, getTableById } from "src/graphql/querys";
import { useToast } from "src/hooks/useToast";

const TakeOrder = () => {
  const { toast } = useToast();
  const { waiter } = useWaiter();
  const navigate = useNavigate();
  const { tableId } = useParams();

  const { data: productsData } = useQuery(getProducts);
  const { data: tableData } = useQuery(getTableById, {
    variables: { id: tableId },
  });
  const [mutateTableVisit, { error: creatingVisitError }] =
    useMutation(MakeTableBusy);
  const [mutateBulkCustomerVisits, { error: customersVisitError }] =
    useMutation(addBulkCustomerVisit);
  const [mutateBulkCustomerVisitProducts, { error: customerProductsError }] =
    useMutation(addBulkCustomerVisitProducts);

  const [loading, setLoading] = useState(false);
  const [itemsCount, setItemsCount] = useState(0);
  const [selectedCustomer, setSelectedCustomer] = useState<number>(1);
  const [usersSelectedProducts, setUsersSelectedProducts] =
    useState<SelectedProducts>({});

  /**
   * adding product to selected user. Conditions:
   * if user does not exists. Then it's created and product added
   * if user exists and the product is not in its list. Then product is added
   * if user exists and the product is in its list. Then product quantity is increased
   * @param product
   */
  const handleAddProduct = (product: Product) => {
    const id_product = product.id;
    if (selectedCustomer in usersSelectedProducts) {
      const user = usersSelectedProducts[selectedCustomer];
      if (id_product in user) {
        user[id_product].quantity += 1; // Increase quantity
      } else {
        user[id_product] = { product, quantity: 1 }; // Add new id_product
      }
    } else {
      usersSelectedProducts[selectedCustomer] = {
        [id_product]: { product, quantity: 1 },
      };
    }
    setUsersSelectedProducts({ ...usersSelectedProducts });
    setItemsCount(itemsCount + 1);
  };

  const handleIncreaseProductQuantity = (
    customerId: number,
    product: Product
  ) => {
    const quantity = usersSelectedProducts[customerId][product.id].quantity;
    usersSelectedProducts[customerId][product.id].quantity = quantity + 1;
    setUsersSelectedProducts({ ...usersSelectedProducts });
    setItemsCount(itemsCount + 1);
  };

  const handleDecreaseProductQuantity = (
    customerId: number,
    product: Product
  ) => {
    const quantity = usersSelectedProducts[customerId][product.id].quantity;
    if (quantity > 1) {
      usersSelectedProducts[customerId][product.id].quantity = quantity - 1;
    } else {
      //removing product of the user list
      delete usersSelectedProducts[customerId][product.id];
      if (Object.keys(usersSelectedProducts[customerId]).length === 0) {
        delete usersSelectedProducts[customerId];
      }
    }
    setUsersSelectedProducts({ ...usersSelectedProducts });
    setItemsCount(itemsCount - 1);
  };

  const handleTakeOrder = async () => {
    setLoading(true);
    try {
      // creating a table visit
      const { data: savedVisitData } = await mutateTableVisit({
        variables: {
          table_id: tableId,
          waiter_id: waiter.id,
        },
      });
      if (!creatingVisitError) {
        const createdVisitData =
          savedVisitData.insert_visits_visit.returning[0].id;

        // creating a customer visit bulk data
        const customerVisitBulkData = Object.entries(usersSelectedProducts).map(
          ([customer, productSelections]) => {
            return {
              visit_id: createdVisitData,
              customer: parseInt(customer),
              created_at: "now()",
              updated_at: "now()",
              tip_percentage: 0,
            };
          }
        );
        // creating customer visit
        const { data } = await mutateBulkCustomerVisits({
          variables: {
            objects: customerVisitBulkData,
          },
        });

        if (!customersVisitError) {
          const savedCustomersVisit =
            data.insert_visits_customervisit.returning;
          const customerVisitProducts: CustomerVisitProduct[] = [];
          savedCustomersVisit.map((customerVisit: CustomerVisit) => {
            const { customer, id: customerVisitId } = customerVisit;
            //creating  customer product
            Object.entries(usersSelectedProducts[customer]).map(
              ([id_product, { product, quantity }]) => {
                Array.from({ length: quantity }, (_, i) => i + 1).map(
                  (number: number) => {
                    customerVisitProducts.push({
                      customer_visit_id: customerVisitId,
                      product_id: product.id,
                      created_at: "now()",
                      updated_at: "now()",
                    });
                    return number;
                  }
                );
                return id_product;
              }
            );
            return customer;
          });

          // saving customer visit products
          await mutateBulkCustomerVisitProducts({
            variables: {
              objects: customerVisitProducts,
            },
          });
          if (!customerProductsError) {
            toast({
              description: "Order placed successfully!",
            });
            navigate("/action/tables");
          }
        }
      }
    } catch (error) {
      // TODO handle
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto h-full px-0">
      <div className="flex flex-col justify-center md:flex-row">
        <div className="shrink-0 grow px-4 py-8 md:max-w-[66%]">
          <p className="mb-6 text-center font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">
            Select a customer and its products.
          </p>
          <h3 className="mb-4 text-left text-base font-bold leading-none tracking-tight md:text-lg xl:text-xl">
            Who customer is selecting products?
          </h3>
          <OrderCustomerSelector
            table={tableData?.tables_table_by_pk}
            selectedCustomer={selectedCustomer}
            handleSelectCustomer={setSelectedCustomer}
          />
          <h3 className="mb-4 mt-6 text-left text-base font-bold leading-none tracking-tight md:text-lg xl:text-xl">
            Select products for this customer
          </h3>
          <ScrollArea className="h-[350px] w-full rounded-md border p-4">
            <ProductsTable
              products={productsData?.products_product || []}
              handleAddProduct={handleAddProduct}
            />
          </ScrollArea>
        </div>
        <div className="shrink-0 grow-0 basis-2/6 p-4">
          <div className="mt-4 flex flex-row justify-between">
            <h3 className="mb-4 text-left text-base font-bold leading-none tracking-tight md:text-lg xl:text-xl">
              Selected products
            </h3>
            <div>
              <span>Total items:</span>
              <span>{itemsCount}</span>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col">
            {Object.entries(usersSelectedProducts).map(
              ([customer, productSelections]) => {
                return (
                  <CustomerSelectedProducts
                    className="mt-4"
                    key={customer}
                    customerId={parseInt(customer, 10)}
                    selectedProducts={productSelections}
                    handleIncrease={handleIncreaseProductQuantity}
                    handleDecrease={handleDecreaseProductQuantity}
                  />
                );
              }
            )}
            <CartTotalPrice
              selectedProducts={usersSelectedProducts}
              handleClick={handleTakeOrder}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeOrder;
