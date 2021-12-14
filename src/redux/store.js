import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./root";

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: {
    root: rootReducer,
  },
  middleware,
  devTools: process.env.NEXT_PUBLIC_ENV === "development",
});
