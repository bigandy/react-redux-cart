import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { remove, getCartProducts, getTotal } from "@stores/cartSlice";

import { useAppSelector } from "@stores/store";

export const Cart = function Cart() {
  const total = useAppSelector(getTotal);

  const products = useAppSelector(getCartProducts);

  const dispatch = useDispatch();

  return (
    <>
      <h1>Cart</h1>

      {products.length > 0 ? (
        products.map((product) => {
          return (
            <div
              key={`cart-${product.id}`}
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                border: "1px solid",
                padding: "1rem",
              }}
            >
              <div>{product.name}</div>

              <div>${product.cost}</div>
              <button onClick={() => dispatch(remove(product.id))}>
                Remove Product
              </button>
            </div>
          );
        })
      ) : (
        <div>
          No Cart Products <Link to="/">Go Home</Link>
        </div>
      )}
      <p>{total.toFixed(2)}</p>
    </>
  );
};
