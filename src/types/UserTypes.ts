import { ProductInCheckout, TypeProduct } from "./TypeProduct";
import { ShippingMethodType } from "./ShippingMethodType";

export interface UserInfoType {
  id: number;
  firstName: string;
  secondName: string;
  age: number | undefined;
  phone: string | undefined;
  email: string;
  address: {
    city: string;
    street: string;
  };
}

export interface UserUnknownInCheckout extends Omit<UserInfoType, "id"> {
  id: "unknown";
}

export type UserPayoutCreditCard = {
  method: "creditCard";
  data: {
    nameOnCard: string;
    expiry: string;
    cardNumber: string;
    cvv: string;
  };
};

export type UserPayoutPaypal = {
  method: "paypal";
};

export type UserPayoutApplePay = {
  method: "applePay";
};

export type UserPayoutInfoType = UserPayoutCreditCard &
  UserPayoutPaypal &
  UserPayoutApplePay;

export interface UserCreateType extends Omit<UserInfoType, "id"> {
  payout: UserPayoutInfoType;
  cartItems: TypeProduct[] | [];
  favoriteItems: TypeProduct[] | [];
}

export default interface UserType extends UserInfoType {
  payout: UserPayoutInfoType;
  cartItems: TypeProduct[] | [];
  favoriteItems: TypeProduct[] | [];
}
