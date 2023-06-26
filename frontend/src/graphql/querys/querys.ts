import { gql } from "@apollo/client";

export const getTables = gql`
  query GetTable {
    tables_table(order_by: { alias: asc }) {
      alias
      id
      status
      default_client_capacity
    }
  }
`;

export const getWaiters = gql`
  query GetWaiters {
    waiters_waiter(order_by: { name: asc }) {
      id
      name
      created_at
      updated_at
    }
  }
`;
