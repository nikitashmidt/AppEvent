import { configureStore } from "@reduxjs/toolkit";

import catalogSlice from "./slices/catalogSlice";
import basketSlice from "./slices/basketSlice";

const store = configureStore({
  reducer: {
    catalogSlice,
    basketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
