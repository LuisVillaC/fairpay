import { gql } from "@apollo/client";

export const MakeTableBusy = gql`
  mutation MakeTableBusy($table_id: bigint = "", $waiter_id: bigint = "") {
    update_tables_table_by_pk(
      pk_columns: { id: $table_id }
      _set: { status: "busy" }
    ) {
      id
      alias
      default_client_capacity
      status
    }
    insert_visits_visit(
      objects: {
        table_id: $table_id
        waiter_id: $waiter_id
        status: "started"
        created_at: "now()"
        updated_at: "now()"
      }
    ) {
      affected_rows
      returning {
        id
        status
        waiter_id
        table_id
      }
    }
  }
`;

export const addBulkCustomerVisit = gql`
  mutation addBulkCustomerVisit(
    $objects: [visits_customervisit_insert_input!] = {}
  ) {
    insert_visits_customervisit(objects: $objects) {
      returning {
        id
        customer
      }
    }
  }
`;

export const addBulkCustomerVisitProducts = gql`
  mutation addBulkCustomerVisitProducts(
    $objects: [visits_customervisitproduct_insert_input!] = []
  ) {
    insert_visits_customervisitproduct(objects: $objects) {
      affected_rows
    }
  }
`;

export const finishTableVisit = gql`
  mutation finishTableVisit($table_id: bigint = "", $visit_id: bigint = "") {
    update_tables_table_by_pk(
      pk_columns: { id: $table_id }
      _set: { status: "available" }
    ) {
      id
      status
    }
    update_visits_visit_by_pk(
      pk_columns: { id: $visit_id }
      _set: { status: "finished" }
    ) {
      status
      id
    }
  }
`;
