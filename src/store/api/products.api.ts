import { api } from "./api";
import { TypeProduct } from "../../types/TypeProduct";
import { GetRequestProductInfo } from "../../types/GetRequestCategories";

interface GetProductsProps {
  category: string;
  page: number;
  subCategory: string;
  brand: string;
}

interface GetResponseProducts {
  totalProducts: number;
  products: TypeProduct[];
}

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<GetResponseProducts, GetProductsProps>({
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
          responseHandler: async (response) => {
            const totalProducts = parseInt(
              response.headers.get("X-Total-Count") || "0",
              10
            );

            const products = await response.json();

            return { totalProducts, products };
          },
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
