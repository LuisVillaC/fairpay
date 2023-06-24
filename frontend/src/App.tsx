import { ApolloProvider } from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import appRoutes from "./Routes";
import { apolloClient } from "./providers/ApolloClient";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={appRoutes} />
    </ApolloProvider>
  );
}

export default App;
