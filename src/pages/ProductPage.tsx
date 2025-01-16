import { memo } from "react";

import { selectProductById, add } from "@stores/cartSlice";

import { useAppSelector } from "@stores/store";
import { useDispatch } from "react-redux";

import { useParams } from "react-router";

export const ProductPage = memo(() => {
  const { id } = useParams();

  const product = useAppSelector((state) => selectProductById(state, +id!));
  const dispatch = useDispatch();

  if (!product) {
    return (
      <div>
        <h1>No Product Exists with that ID</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>${product.cost}</p>

      <button onClick={() => dispatch(add(product.id))}>Add to Cart</button>
    </div>
  );
});
