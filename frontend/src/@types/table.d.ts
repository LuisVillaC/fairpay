interface Table {
  id: number;
  alias: string;
  status: "available" | "busy";
  default_client_capacity: number;
}
