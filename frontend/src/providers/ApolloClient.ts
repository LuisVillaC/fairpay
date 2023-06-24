import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.REACT_APP_HASURA_GRAPHQL_URL,
    headers: {
      "x-hasura-admin-secret":
        process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET || "",
    },
    fetchOptions: { cache: "no-store" },
  }),
});
