import { Link } from "react-router";
import {
  add,
  remove,
  decreaseQuantity,
  increaseQuantity,
} from "@stores/cartSlice";
import { useDispatch } from "react-redux";

import type { ProductInterface } from "src/products";

interface Props {
  product: ProductInterface;
  type: "add" | "remove";
  quantity?: number;
}

const Product = ({ product, type = "remove", quantity }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="product-wrapper">
      <div>
        <Link to={`products/${product.id}`}>{product.name}</Link>
      </div>

      <div>${product.cost}</div>

      {quantity && (
        <div>
          {quantity}
          <button onClick={() => dispatch(increaseQuantity(product.id))}>
            +
          </button>
          <button onClick={() => dispatch(decreaseQuantity(product.id))}>
            -
          </button>
        </div>
      )}

      <button
        onClick={() =>
          dispatch(type === "add" ? add(product.id) : remove(product.id))
        }
      >
        {type === "add" ? "Add" : "Remove"} Product
      </button>
    </div>
  );
};

export default Product;
