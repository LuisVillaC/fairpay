interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  short_description: string;
}

type SelectedProduct = {
  product: Product;
  quantity: number;
};

type SelectedProducts = {
  [user_id: number]: CustomerProduct;
};

type CustomerProduct = {
  [id_product: number]: SelectedProduct;
};
