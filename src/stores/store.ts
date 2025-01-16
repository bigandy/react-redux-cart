import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useSelector } from "react-redux";

import cartReducer from "@stores/cartSlice";
import jokesReducer from "@stores/jokeSearchSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    jokes: jokesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {cart: CartState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
