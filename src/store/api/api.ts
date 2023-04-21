import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TypeProduct } from "../../types/TypeProduct";

const API_URL = "http://localhost:4001";
export const api = createApi({
  reducerPath: "api",
  // tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: () => ({}),
  // endpoints: (builder) => ({
  //   getProducts: builder.query<TypeProduct[], void>({
  //     query: () => ({
  //       url: "/products",
  //     }),
  //   }),
  // }),
});

// export const { useGetProductsQuery } = api;
