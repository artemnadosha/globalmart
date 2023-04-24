import { api } from "./api";
import {} from "../../types/UserTypes";
import {
  UserCheckoutFormValues,
  UserCheckoutRequestTypes,
} from "../../types/UserCheckoutTypes";

export const checkoutApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCheckoutById: builder.query<any, any>({
      query: ({ id }) => ({ url: `/checkout/${id}` }),
    }),
    createCheckout: builder.mutation<
      UserCheckoutRequestTypes,
      UserCheckoutFormValues
    >({
      query: (body) => ({
        url: "/checkout",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateCheckoutMutation } = checkoutApi;
