import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "./slices/librarySlice";

export const store = configureStore({
  reducer: {
    librarySlice: libraryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
