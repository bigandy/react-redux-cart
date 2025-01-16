import { type PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface InputState {
  value: string;
  status: string;
  error: string | null;
  jokes: { id: string; joke: string }[];
}

const initialState: InputState = {
  value: "",
  status: "idle",
  error: null,
  jokes: [],
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
      // .addCase(userLoggedOut, (state) => {
      //   // Clear out the list of posts whenever the user logs out
      //   return initialState;
      // })
      .addCase(handleJokeSearch.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(handleJokeSearch.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.jokes.push(...action.payload);
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
    // console.log("Searching");
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
