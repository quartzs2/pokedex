import { createSlice } from "@reduxjs/toolkit";

import { fetchMultiplePokemonById } from "./pokeThunk";
import { PokeData } from "../../types/types";

export const pokeSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(fetchMultiplePokemonById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMultiplePokemonById.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchMultiplePokemonById.fulfilled, (state, action) => {
        state.loading = false;

        if (action.payload !== null) {
          state.data = action.payload;
        }
      });
  },
  initialState: {
    data: [] as PokeData[],
    loading: true,
  },
  name: "pokemon",
  reducers: {},
});

export default pokeSlice.reducer;
