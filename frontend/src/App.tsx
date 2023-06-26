import { ApolloProvider } from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import appRoutes from "./Routes";
import DashboardLayout from "./layouts/DashboardLayout";
import { apolloClient } from "./providers/ApolloClient";

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
