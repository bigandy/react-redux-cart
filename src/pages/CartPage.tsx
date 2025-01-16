import { getCartProducts, getTotal, clearCart } from "@stores/cartSlice";
import { Link } from "react-router";

import { useAppSelector } from "@stores/store";

import { useDispatch } from "react-redux";

import Product from "@components/Product";

export const CartPage = () => {
  const total = useAppSelector(getTotal);

  const products = useAppSelector(getCartProducts);

  const dispatch = useDispatch();

  return (
    <>
      <h1>Cart</h1>

      {products.length > 0 ? (
        <>
          {products.map(({ product, quantity }) => {
            return (
              <Product
                key={product.id}
                product={product}
                type="remove"
                quantity={quantity}
              />
            );
          })}
          <button onClick={() => dispatch(clearCart())}>
            Remove All Products
          </button>
        </>
      ) : (
        <div>
          No Cart Products <Link to="/">Go Home</Link>
        </div>
      )}
      <p>{total.toFixed(2)}</p>
    </>
  );
};
