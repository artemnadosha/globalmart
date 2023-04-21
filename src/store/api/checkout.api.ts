import { api } from "./api";
import { CheckoutFormValues, RequestCheckout } from "../../types/StepFormTypes";

export const checkoutApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCheckoutById: builder.query<any, any>({
      query: ({ id }) => ({ url: `/checkout/${id}` }),
    }),
    createCheckout: builder.mutation<RequestCheckout, CheckoutFormValues>({
      query: (body) => ({
        url: "/checkout",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateCheckoutMutation } = checkoutApi;
