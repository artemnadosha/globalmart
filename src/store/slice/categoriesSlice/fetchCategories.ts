import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse, isAxiosError } from "axios";
import { SERVICES_LINK } from "../../../utils/const";

interface ProductError {
  message: string;
}

const fetchCategories = createAsyncThunk<
  string[],
  undefined,
  { rejectValue: ProductError }
>("categories/fetchCategories", async (_, { rejectWithValue }) => {
  const instance = axios.create({
    baseURL: "https://dummyjson.com/",
  });
  try {
    const response: AxiosResponse<string[]> = await instance.get(
      SERVICES_LINK.CATEGORIES
    );

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return rejectWithValue({ message: error.message });
    }
    throw error;
  }
});

export default fetchCategories;
