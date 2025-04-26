import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPokeDatas } from "@api/pokeAPI";

export const fetchMultiplePokemonById = createAsyncThunk(
  "pokemon/fetchMultiplePokemonById",
  async (maxPokemonId: number) => {
    return await fetchPokeDatas(maxPokemonId);
  },
);
