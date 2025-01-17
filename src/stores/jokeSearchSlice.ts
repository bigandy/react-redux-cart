import { type PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface InputState {
  value: string;
  status: string;
  error: string | null;
  searchResults: { id: string; joke: string }[];
}

const initialState: InputState = {
  value: "",
  status: "idle",
  error: null,
  searchResults: [],
};

export const jokeSearchSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    updateSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleJokeSearch.pending, (state) => {
        state.status = "pending";
      })
      .addCase(handleJokeSearch.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Store fetched jokes to the jokes state
        state.searchResults = action.payload;
      })
      .addCase(handleJokeSearch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown Error";
      });
  },
});

export const handleJokeSearch = createAsyncThunk(
  "joke/search",
  async (searchTerm: string) => {
    const response = await fetch(
      `https://icanhazdadjoke.com/search?term=${searchTerm}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );
    const { results } = await response.json();

    return results;
  }
);

// Action creators are generated for each case reducer function
export const { updateSearch } = jokeSearchSlice.actions;

export default jokeSearchSlice.reducer;
