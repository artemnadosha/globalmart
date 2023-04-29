import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfoType, UserUnknownInCheckout } from "../../../types/UserTypes";
import { ShippingMethodType } from "../../../types/ShippingMethodType";
import {
  OrderInfoType,
  UserCheckoutFormValues,
  UserPayoutCheckout,
} from "../../../types/UserCheckoutTypes";
import { ProductInCheckout } from "../../../types/TypeProduct";

const initialState: UserCheckoutFormValues = {
  user: {} as UserInfoType | UserUnknownInCheckout,
  shippingMethod: {} as ShippingMethodType,
  payout: {} as UserPayoutCheckout,
  orderInfo: {} as OrderInfoType,
  product: [] as ProductInCheckout[],
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setUserInfo: (
      state,
      action: PayloadAction<UserInfoType | UserUnknownInCheckout>
    ) => {
      state.user = action.payload;
    },
    setShippingMethod: (state, action: PayloadAction<ShippingMethodType>) => {
      state.shippingMethod = action.payload;
    },
    setPayout: (state, action: PayloadAction<UserPayoutCheckout>) => {
      state.payout = action.payload;
    },
    setOrderInfo: (state, action: PayloadAction<OrderInfoType>) => {
      state.orderInfo = action.payload;
    },
    setProduct: (state, action: PayloadAction<ProductInCheckout[]>) => {
      state.product = action.payload;
    },
    cleansingCheckout: (state) => {
      state.user = {} as UserInfoType | UserUnknownInCheckout;
      state.shippingMethod = {} as ShippingMethodType;
      state.payout = {} as UserPayoutCheckout;
      state.orderInfo = {} as OrderInfoType;
      state.product = [] as ProductInCheckout[];
    },
  },
});

export const {
  setUserInfo,
  setShippingMethod,
  setPayout,
  setOrderInfo,
  setProduct,
  cleansingCheckout,
} = checkoutSlice.actions;
export default checkoutSlice.reducer;
