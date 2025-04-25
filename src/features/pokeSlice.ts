import { createSlice } from "@reduxjs/toolkit";

export interface PokeData {
  description: string;
  front: string;
  name: string;
  back: string;
  id: number;
}

export interface PokeState {
  loading: boolean;
  data: PokeData[];
}

export const pokeSlice = createSlice({
  initialState: {
    loading: true,
    data: [],
  },
  reducers: {},
  name: "poke",
});

export default pokeSlice.reducer;
