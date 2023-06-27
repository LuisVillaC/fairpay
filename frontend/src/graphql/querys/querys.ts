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

export const getTableById = gql`
  query GetTableById($id: bigint = "") {
    tables_table_by_pk(id: $id) {
      id
      alias
      default_client_capacity
      status
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

export const getProducts = gql`
  query Products {
    products_product(order_by: { name: asc }) {
      id
      image
      name
      price
      short_description
    }
  }
`;
