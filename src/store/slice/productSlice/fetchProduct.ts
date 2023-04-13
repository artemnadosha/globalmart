import { TypeProduct } from "../../../types/TypeProduct";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse, isAxiosError } from "axios";
import { SERVICES_LINK } from "../../../utils/const";

interface ProductError {
  message: string;
}

type DATA_REQUEST_TYPE = {
  products: TypeProduct[];
  total: 0;
  limit: 10;
  skip: 10;
};

interface fetchProductProps {
  skip?: number;
  category?: string;
}

const fetchProduct = createAsyncThunk<
  DATA_REQUEST_TYPE,
  fetchProductProps,
  { rejectValue: ProductError }
>(
  "product/fetchProduct",
  async ({ skip = 0, category }, { rejectWithValue }) => {
    const instance = axios.create({
      baseURL: "https://dummyjson.com/",
    });
    try {
      const response: AxiosResponse<DATA_REQUEST_TYPE> = await instance.get(
        !!category
          ? `${SERVICES_LINK.PRODUCT_CATEGORY}/${category}`
          : `${SERVICES_LINK.PRODUCTS}?limit=10&skip=${skip}`
      );
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue({ message: error.message });
      }
      throw error;
    }
  }
);

export default fetchProduct;
