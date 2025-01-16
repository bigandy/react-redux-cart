import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useSelector } from "react-redux";

import cartReducer from "./cartSlice";

// import { Product, products } from "../products.ts";

// const productsReducer = () => {
//   const [cart, setCart] = useState<number[]>([]);

//   const addProduct = (id: number) => {
//     // prevent adding to store more than once.
//     if (cart.includes(id)) {
//       return;
//     }
//     setCart((prevState) => {
//       const newState = [...prevState];
//       newState.push(id);
//       return newState;
//     });
//   };

//   const removeProduct = (id: number) => {
//     console.log("remove this product", id);

//     setCart((prevState) => {
//       const newState = [...prevState];
//       const productIndex = newState.indexOf(id);

//       newState.splice(productIndex, 1);

//       return newState;
//     });
//   };
//   const cartProducts = useMemo(() => {
//     const output: Array<Product> = [];
//     cart.forEach((cartProductId) => {
//       const newProduct = products.find(
//         (product) => product.id === cartProductId
//       );
//       if (newProduct) {
//         output.push(newProduct);
//       }
//     });
//     return output;
//   }, [cart]);

//   return {
//     initialState: products,
//   };
// };

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
