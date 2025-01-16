import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface InputState {
  value: string;
}

const initialState: InputState = {
  value: "",
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update } = inputSlice.actions;

export default inputSlice.reducer;
