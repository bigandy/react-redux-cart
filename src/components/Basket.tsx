import { Link } from "react-router";
import { getCartProducts, getTotal } from "../stores/cartSlice";

import { useAppSelector } from "../stores/store";

export const Basket = () => {
  const total = useAppSelector(getTotal);

  const products = useAppSelector(getCartProducts);

  return (
    <Link to="/cart">
      ${total.toFixed(2)} - {products.length}
    </Link>
  );
};
