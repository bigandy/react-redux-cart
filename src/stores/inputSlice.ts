import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface InputState {
  input: string;
}

const initialState: InputState = {
  input: "",
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update } = inputSlice.actions;

export default inputSlice.reducer;
