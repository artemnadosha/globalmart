import { api } from "./api";
import { TypeProduct } from "../../types/TypeProduct";
import { GetRequestProductInfo } from "../../types/GetRequestCategories";

interface GetProductsProps {
  category: string;
  page: number;
}

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<TypeProduct[], GetProductsProps>({
      query: ({ category, page }) => ({
        url: `/products?_limit=12${
          !!category ? "&category=" + category : ""
        }&_page=${page}`,
      }),
    }),
    getProductById: builder.query<TypeProduct, string>({
      query: (id: string) => ({
        url: `/products/${id}`,
      }),
    }),
    getProductsTotal: builder.query<number, string>({
      query: (category) => ({
        url: `/products${category ? "?category=" + category : ""}`,
      }),
      transformResponse: (response: TypeProduct[]): number => response.length,
    }),
    getProductsInfo: builder.query<GetRequestProductInfo[], void>({
      query: () => ({
        url: "/products-info",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductsTotalQuery,
  useGetProductsInfoQuery,
} = productsApi;
