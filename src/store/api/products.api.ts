import { api } from "./api";
import { TypeProduct } from "../../types/TypeProduct";
import { GetRequestProductInfo } from "../../types/GetRequestCategories";

interface GetProductsProps {
  category: string;
  page: number;
  subCategory: string;
  brand: string;
  titleSearch: string;
}

interface GetResponseProducts {
  totalProducts: number;
  products: TypeProduct[];
}

interface paramsQuery {
  _limit: number;
  _page: number;
  category?: string;
  subCategory?: string;
  q?: string;
}

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<GetResponseProducts, GetProductsProps>({
      query: ({ category, page, subCategory, brand, titleSearch }) => {
        const params: paramsQuery = {
          _limit: 12,
          _page: page || 1,
        };
        if (category) {
          params.category = category;
        }
        if (subCategory) {
          params.subCategory = subCategory;
        }
        if (titleSearch) {
          params.q = titleSearch;
        }

        const brands = brand
          ? brand
              .split(",")
              .map((item, index) =>
                index === 0 ? `?brand=${item}` : `&brand=${item}`
              )
              .join("")
          : "";

        return {
          url: `/products${brands}`,
          params,
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
