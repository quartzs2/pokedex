import favoriteReducer from "@features/favorite/favoriteSlice";
import pokeReducer from "@features/pokemon/pokeSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    pokemon: pokeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
