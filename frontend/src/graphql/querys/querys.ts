import { gql } from "@apollo/client";

export const getTables = gql`
  query GetUsers {
    auth_user {
      id
      email
      first_name
      is_superuser
      last_name
      username
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
