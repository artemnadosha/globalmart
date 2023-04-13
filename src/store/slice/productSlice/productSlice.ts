import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeProduct } from "../../../types/TypeProduct";
import { fetchProduct } from "../index";

interface productState {
  products: TypeProduct[];
  total: number;
  limit: number;
  skip: number;
  status: "pending" | "fulfilled" | "rejected" | null;
  loading: boolean;
  error: string | null;
}

const initialState: productState = {
  products: [],
  total: 0,
  limit: 10,
  skip: 0,
  status: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "fulfilled";
        state.products = action.payload.products;
        state.total = action.payload.total;
        state.limit = action.payload.limit;
        state.skip = action.payload.skip;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.status = "rejected";
        if (action.payload) {
          state.error = action.payload.message;
        }
      });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
