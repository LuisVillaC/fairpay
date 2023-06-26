import { ApolloProvider } from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import appRoutes from "./Routes";
import { apolloClient } from "./graphql/providers/ApolloClient";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <DashboardLayout>
        <RouterProvider router={appRoutes} />
      </DashboardLayout>
    </ApolloProvider>
  );
}

export default App;
