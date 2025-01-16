import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product, products as initialProducts } from "../products";
import { RootState } from "./store";

export interface CounterState {
  addedIds: Array<number>;
  products: Array<Product>;
}

const initialState: CounterState = {
  addedIds: [],
  products: initialProducts,
};

const addedIds = (state: RootState) => state.cart.addedIds;
const products = (state: RootState) => state.cart.products;

export const getCartProducts = createSelector(
  [addedIds, products],
  (addedIds, products) => {
    const output: Array<Product> = [];
    addedIds?.forEach((cartProductId) => {
      const newProduct = products.find(
        (product) => product.id === cartProductId
      );
      if (newProduct) {
        output.push(newProduct);
      }
    });
    return output;
  }
);

export const getTotal = createSelector([getCartProducts], (products) => {
  return products.reduce((total, curr) => total + curr.cost, 0);
});

// export const getTotal = (state) => {
//     getCartProducts(state);
//   return cartProducts.reduce((acc, next) => {
//     return next.cost + acc;
//   }, 0);
// });

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      // prevent user from adding same cart item more than once to cart.
      if (state.addedIds.includes(action.payload)) {
        return;
      }
      state.addedIds.push(action.payload);
    },

    remove: (state, action: PayloadAction<number>) => {
      const productIndex = state.addedIds.indexOf(action.payload);

      if (productIndex > -1) {
        state.addedIds.splice(productIndex, 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = counterSlice.actions;

export default counterSlice.reducer;
