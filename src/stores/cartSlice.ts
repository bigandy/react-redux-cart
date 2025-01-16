import type { PayloadAction } from "@reduxjs/toolkit";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  type ProductInterface,
  products as initialProducts,
} from "../products";
import { RootState } from "./store";

interface StoreProductRecord {
  product: ProductInterface;
  quantity: number;
}

export interface CartState {
  addedProducts: {
    [k: number]: number;
  };
  products: Array<ProductInterface>;
}

const initialState: CartState = {
  addedProducts: {},
  products: initialProducts,
};

const addedProducts = (state: RootState) => state.cart.addedProducts;
const products = (state: RootState) => state.cart.products;

export const getCartProducts = createSelector(
  [addedProducts, products],
  (addedProducts, products) => {
    const output: Array<StoreProductRecord> = [];
    Object.entries(addedProducts)?.forEach(([cartProductId, quantity]) => {
      const newProduct = products.find(
        (product) => product.id === +cartProductId
      );
      if (newProduct) {
        output.push({ product: newProduct, quantity });
      }
    });
    return output;
  }
);

export const selectProductById = (state: RootState, productId: number) =>
  state.cart.products.find((product) => product.id === productId);

export const getTotal = createSelector([getCartProducts], (products) => {
  return products.reduce(
    (total, curr) => total + curr.product.cost * curr.quantity,
    0
  );
});

export const getProductsCount = createSelector(
  [getCartProducts],
  (products) => {
    return products.reduce((total, curr) => total + curr.quantity, 0);
  }
);

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      if (state.addedProducts[action.payload]) {
        state.addedProducts[action.payload]++;
      } else {
        state.addedProducts[action.payload] = 1;
      }
    },

    remove: (state, action: PayloadAction<number>) => {
      delete state.addedProducts[action.payload];
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      state.addedProducts[action.payload]++;
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      if (state.addedProducts[action.payload] > 1) {
        state.addedProducts[action.payload]--;
      } else {
        delete state.addedProducts[action.payload];
      }
    },

    clearCart: (state) => {
      state.addedProducts = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, clearCart, decreaseQuantity, increaseQuantity } =
  counterSlice.actions;

export default counterSlice.reducer;
