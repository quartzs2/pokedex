import { configureStore } from "@reduxjs/toolkit";

import pokeReducer from "../features/pokeSlice";

export const store = configureStore({
  reducer: {
    poke: pokeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
