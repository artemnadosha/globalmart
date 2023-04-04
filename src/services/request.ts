import axios, { AxiosResponse } from "axios";
import { SERVICES_LINK } from "../utils/const";
import { TypeProduct } from "../types/TypeProduct";

interface requestProps {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  headers?: Record<string, string>;
}

type DATA_REQUEST_TYPE = {
  products: TypeProduct[];
};

export interface PromiseData {
  res: any;
  status: number;
}

export const request = async ({
  url,
  method = "GET",
  body,
  headers,
}: requestProps): Promise<PromiseData> => {
  const instance = axios.create({
    baseURL: "https://dummyjson.com/",
  });

  try {
    const response: AxiosResponse<DATA_REQUEST_TYPE | string[]> =
      await instance.get(url);
    const { data, status } = response;

    return { res: data, status };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const { response } = error;
      if (response) {
        return { res: response.data, status: response.status };
      }
    }
    throw error;
  }
};

interface SERVICES_GET_REQUEST_INT {
  getProduct: () => Promise<PromiseData>;
  getCategories: () => Promise<PromiseData>;
  getProductCategory: (productCategory: string) => Promise<PromiseData>;
}

export const SERVICES_GET_REQUEST: SERVICES_GET_REQUEST_INT = {
  getProduct: async () => await request({ url: SERVICES_LINK.PRODUCTS }),
  getCategories: async () => await request({ url: SERVICES_LINK.CATEGORIES }),
  getProductCategory: async (productCategory) =>
    await request({
      url: `${SERVICES_LINK.PRODUCT_CATEGORY}/${productCategory}`,
    }),
};
