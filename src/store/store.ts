import { configureStore } from "@reduxjs/toolkit";
import { processSlice } from "./slices/process/";

export const store = configureStore({
  reducer: {
    process: processSlice.reducer,
  },
});
