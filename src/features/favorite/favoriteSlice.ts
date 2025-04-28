import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  reducers: {
    removeFromFavorite(state, action: PayloadAction<number>) {
      const index = state.indexOf(action.payload);
      if (index !== -1) state.splice(index, 1);
    },
    addToFavorite(state, action: PayloadAction<number>) {
      state.push(action.payload);
    },
  },
  initialState: [] as number[],
  name: "favorite",
});

export default favoriteSlice.reducer;
