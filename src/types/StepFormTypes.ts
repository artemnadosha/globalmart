import { ProductInCheckout, TypeProduct } from "./TypeProduct";

export type FirstStepFormTypes = {
  userId: number | "unknown";
  firstName: string;
  secondName: string;
  age: number;
  phone: string;
  email: string;
  address: {
    city: string;
    street: string;
  };
};

export type ShippingMethodTypes = {
  shippingName: string;
  price: number;
  supportingText: string;
  deliveryTime: string;
};

export type payoutDataCreditCardTypes = {
  nameOnCard: string;
  expiry: Date;
  cardNumber: string;
  cvv: string;
};

export type ThirdStepFromTypes = {
  method: string;
  data?: payoutDataCreditCardTypes;
};

export type FourthStepFormTypes = {
  checkPrivacyPolicy: boolean;
  orderNumber: number;
};

export interface CheckoutFormValues {
  user?: FirstStepFormTypes;
  shippingMethod?: ShippingMethodTypes;
  payout?: ThirdStepFromTypes;
  orderInfo?: FourthStepFormTypes;
  product?: ProductInCheckout[];
}

export interface RequestCheckout extends CheckoutFormValues {
  id: number;
}
