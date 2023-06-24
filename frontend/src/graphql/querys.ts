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
