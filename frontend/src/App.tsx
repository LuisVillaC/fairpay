import { ApolloProvider } from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import appRoutes from "./Routes";
import { Toaster } from "./components/common/Toaster";
import { WaiterProvider } from "./context/WaiterContext";
import { apolloClient } from "./graphql/providers/ApolloClient";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <WaiterProvider>
        <DashboardLayout>
          <RouterProvider router={appRoutes} />
          <Toaster />
        </DashboardLayout>
      </WaiterProvider>
    </ApolloProvider>
  );
}

export default App;
