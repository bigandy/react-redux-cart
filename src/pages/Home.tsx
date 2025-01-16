import { add } from "@stores/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "@stores/store";

export function Home() {
  const products = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Home</h1>
      <div>
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <div key={`product-${product.id}`}>
                {product.name}
                <button onClick={() => dispatch(add(product.id))}>
                  Buy Product
                </button>
              </div>
            );
          })
        ) : (
          <div>No Products </div>
        )}
      </div>
    </>
  );
}
