import {
  UserInfoType,
  UserPayoutApplePay,
  UserPayoutCreditCard,
  UserPayoutPaypal,
  UserUnknownInCheckout,
} from "./UserTypes";
import { ShippingMethodType } from "./ShippingMethodType";
import { ProductInCheckout } from "./TypeProduct";

export type OrderInfoType = {
  checkPrivacyPolicy: boolean;
  orderNumber: number;
};
export type UserPayoutCheckout =
  | UserPayoutCreditCard
  | UserPayoutPaypal
  | UserPayoutApplePay;

export interface UserCheckoutFormValues {
  user: UserInfoType | UserUnknownInCheckout;
  shippingMethod: ShippingMethodType;
  payout: UserPayoutCheckout;
  orderInfo: OrderInfoType;
  product: ProductInCheckout[];
}

export interface UserCheckoutRequestTypes extends UserCheckoutFormValues {
  id: number;
}
