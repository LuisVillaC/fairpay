import { ApolloProvider } from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import appRoutes from "./Routes";
import { WaiterProvider } from "./context/WaiterContext";
import { apolloClient } from "./graphql/providers/ApolloClient";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <WaiterProvider>
        <DashboardLayout>
          <RouterProvider router={appRoutes} />
        </DashboardLayout>
      </WaiterProvider>
    </ApolloProvider>
  );
}

export default App;
