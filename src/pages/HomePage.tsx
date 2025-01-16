import { useSelector } from "react-redux";

import type { RootState } from "@stores/store";

import Product from "@components/Product";

export const HomePage = () => {
  const products = useSelector((state: RootState) => state.cart.products);

  return (
    <>
      <h1>Home</h1>
      <div>
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <Product
                key={`product-${product.id}`}
                product={product}
                type="add"
              />
            );
          })
        ) : (
          <div>No Products </div>
        )}
      </div>
    </>
  );
};
