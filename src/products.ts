export interface Product {
  id: number;
  name: string;
  cost: number;
}

export const products: Array<Product> = [
  {
    id: 1,
    name: "product 1",
    cost: 9.33,
  },
  {
    id: 2,
    name: "product 2",
    cost: 239.33,
  },
  {
    id: 3,
    name: "product 3",
    cost: 3.33,
  },
];
