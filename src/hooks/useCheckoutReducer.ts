import { useAppDispatch, useAppSelector } from "../store/store";
import { UserInfoType, UserUnknownInCheckout } from "../types/UserTypes";
import { ShippingMethodType } from "../types/ShippingMethodType";
import {
  OrderInfoType,
  UserCheckoutFormValues,
  UserPayoutCheckout,
} from "../types/UserCheckoutTypes";
import { ProductInCheckout } from "../types/TypeProduct";
import {
  setOrderInfo,
  setPayout,
  setProduct,
  setShippingMethod,
  setUserInfo,
} from "../store/slice";
import { useCallback } from "react";
import { cleansingCheckout } from "../store/slice/checkout-slice/checkout.slice";

interface UseCheckoutReturnType {
  stateCheckout: UserCheckoutFormValues;
  setCheckoutUserInfo: (value: UserInfoType | UserUnknownInCheckout) => void;
  setCheckoutShippingMethod: (value: ShippingMethodType) => void;
  setCheckoutPayout: (value: UserPayoutCheckout) => void;
  setCheckoutOrderInfo: (value: OrderInfoType) => void;
  setCheckoutProduct: (value: ProductInCheckout[]) => void;
  cleanCheckout: () => void;
}

const useCheckoutReducer = (): UseCheckoutReturnType => {
  const dispatch = useAppDispatch();
  const stateCheckout = useAppSelector((state) => state.checkout);

  const setCheckoutUserInfo = useCallback(
    (value: UserInfoType | UserUnknownInCheckout) => {
      dispatch(setUserInfo(value));
    },
    [dispatch]
  );
  const setCheckoutShippingMethod = useCallback(
    (value: ShippingMethodType) => {
      dispatch(setShippingMethod(value));
    },
    [dispatch]
  );
  const setCheckoutPayout = useCallback(
    (value: UserPayoutCheckout) => {
      dispatch(setPayout(value));
    },
    [dispatch]
  );
  const setCheckoutOrderInfo = useCallback(
    (value: OrderInfoType) => {
      dispatch(setOrderInfo(value));
    },
    [dispatch]
  );
  const setCheckoutProduct = useCallback(
    (value: ProductInCheckout[]) => {
      dispatch(setProduct(value));
    },
    [dispatch]
  );

  const cleanCheckout = useCallback(
    () => dispatch(cleansingCheckout()),
    [dispatch]
  );

  return {
    stateCheckout,
    setCheckoutUserInfo,
    setCheckoutShippingMethod,
    setCheckoutPayout,
    setCheckoutOrderInfo,
    setCheckoutProduct,
    cleanCheckout,
  };
};

export default useCheckoutReducer;
