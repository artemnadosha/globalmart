import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../index";

interface categoriesState {
  categories: string[];
  status: "pending" | "fulfilled" | "rejected" | null;
  loading: boolean;
  error: string | null;
}

const initialState: categoriesState = {
  categories: [],
  status: null,
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "fulfilled";
        state.categories = action.payload.slice(0, 10);
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.status = "rejected";
        if (action.payload) {
          state.error = action.payload.message;
        }
      });
  },
});

export default categoriesSlice.reducer;
