interface CustomerVisit {
  id: number;
  customer: number;
}

interface CustomerVisitProduct {
  customer_visit_id: number;
  product_id: number;
  created_at: string;
  updated_at: string;
}
