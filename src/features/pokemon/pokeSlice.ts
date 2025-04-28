import { createSelector, createSlice } from "@reduxjs/toolkit";
import { PokeData } from "@src/types/types";
import { RootState } from "@app/store";

import { fetchMultiplePokemonById } from "./pokeThunk";

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

export const selectPokemonById = (pokemonId: number) =>
  createSelector(
    (state: RootState) => state.pokemon.data,
    (pokemon) => pokemon.find((element: PokeData) => element.id === pokemonId),
  );

export const selectPokemonByRegexp = (pokemonReg: RegExp) =>
  createSelector(
    (state: RootState) => state.pokemon.data,
    (pokemon) =>
      pokemon.filter((element: PokeData) => element.name.match(pokemonReg)),
  );

export default pokeSlice.reducer;
