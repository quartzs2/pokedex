import { configureStore } from "@reduxjs/toolkit";

import pokeReducer from "../features/pokemon/pokeSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
