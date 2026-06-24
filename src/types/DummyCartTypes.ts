export type ProductResponseData = {
   carts: Cart[];
   total: number;
   skip: number;
   limit: number;
}

export type Cart = {
   id: number;
   products: Product[];
   total: number;
   discountedTotal: number;
   userId: number;
   totalProducts: number;
   totalQuantity: number;
}

export type Product = {
   id: number;
   title: string;
   price: number;
   quantity: number;
   total: number;
   discountPercentage: number;
   discountedTotal: number;
   thumbnail: string;
}

export type DummyProductComponentProps = {
   product: Product;
}

export type DummyCartComponentProps = {
   cart: Cart;
}
