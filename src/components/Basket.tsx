import { Link } from "react-router";
import { getProductsCount, getTotal } from "../stores/cartSlice";

import { useAppSelector } from "../stores/store";

const Basket = ({ ...attrs }) => {
  const total = useAppSelector(getTotal);

  const productsCount = useAppSelector(getProductsCount);

  return (
    <Link to="/cart" {...attrs}>
      ${total.toFixed(2)} <br />
      {productsCount} products in cart
    </Link>
  );
};

export default Basket;
