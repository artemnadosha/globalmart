import { api } from "./api";
import { TypeProduct } from "../../types/TypeProduct";
import { GetRequestProductInfo } from "../../types/GetRequestCategories";

interface GetProductsProps {
  category: string;
  page: number;
  subCategory: string;
  brand: string;
}

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<TypeProduct[], GetProductsProps>({
      query: ({ category, page, subCategory, brand }) => {
        const categories = !!category ? `&category=${category}` : "";
        const pages = !!page ? `&_page=${page}` : "";
        const subCategories = !!subCategory
          ? `&subCategory=${subCategory}`
          : "";
        const arrBrand = brand
          .split(",")
          .map((item) => `&brand=${item}`)
          .join("");

        const brands = !!brand ? arrBrand : "";

        return {
          url: `/products?_limit=12${categories}${pages}${subCategories}${brands}`,
        };
      },
    }),
    getProductById: builder.query<TypeProduct, string>({
      query: (id: string) => ({
        url: `/products/${id}`,
      }),
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
  useGetProductsInfoQuery,
} = productsApi;
