import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { ICatalog } from "../../types";

export type CatalogState = {
  catalog: ICatalog[];
  isError: boolean;
  isLoading: boolean;
};

export const getCatalog = createAsyncThunk("catalog/getCatalog", async () => {
  const response = await fetch("https://appevent.ru/dev/task1/catalog");
  const data = await response.json();
  return data;
});

const initialState: CatalogState = {
  catalog: [],
  isError: false,
  isLoading: false,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getCatalog.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })

      .addCase(getCatalog.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = true;
        state.catalog = action.payload.items;
      })

      .addCase(getCatalog.rejected, (state) => {
        state.isError = false;
        state.isLoading = true;
      })

      .addDefaultCase(() => {});
  },
});

const { reducer } = catalogSlice;

export default reducer;
