import reducer, {
  setUserInfo,
  setShippingMethod,
  setPayout,
  setOrderInfo,
  setProduct,
  cleansingCheckout,
} from "./checkout.slice";
import { UserInfoType, UserUnknownInCheckout } from "../../../types/UserTypes";
import {
  OrderInfoType,
  UserCheckoutFormValues,
  UserPayoutCheckout,
} from "../../../types/UserCheckoutTypes";
import { ShippingMethodType } from "../../../types/ShippingMethodType";
import { ProductInCheckout } from "../../../types/TypeProduct";

describe("checkout slice", () => {
  test("initialState", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      user: {},
      shippingMethod: {},
      payout: {},
      orderInfo: {},
      product: [],
    });
  });
  test("set action checkout", () => {
    const initialState: UserCheckoutFormValues = {
      user: {} as UserInfoType | UserUnknownInCheckout,
      shippingMethod: {} as ShippingMethodType,
      payout: {} as UserPayoutCheckout,
      orderInfo: {} as OrderInfoType,
      product: [] as ProductInCheckout[],
    };

    const userInfoMock: UserUnknownInCheckout = {
      id: "unknown",
      age: 25,
      address: {
        city: "test",
        street: "test",
      },
      email: "test@test.test",
      firstName: "test",
      secondName: "test",
      phone: "test",
    };

    const shippingMethodMock: ShippingMethodType = {
      price: 12,
      shippingName: "test",
      deliveryTime: "test",
      supportingText: "test",
    };

    const payoutMock: UserPayoutCheckout = {
      method: "paypal",
    };

    const orderInfoMock: OrderInfoType = {
      checkPrivacyPolicy: true,
      orderNumber: 123124,
    };

    const mockProduct: ProductInCheckout[] = [
      {
        id: 1,
        title: "test",
        quantity: 1,
      },
    ];

    expect(reducer(initialState, setUserInfo(userInfoMock))).toEqual({
      ...initialState,
      user: userInfoMock,
    });

    expect(
      reducer(initialState, setShippingMethod(shippingMethodMock))
    ).toEqual({
      ...initialState,
      shippingMethod: shippingMethodMock,
    });

    expect(reducer(initialState, setPayout(payoutMock))).toEqual({
      ...initialState,
      payout: payoutMock,
    });

    expect(reducer(initialState, setOrderInfo(orderInfoMock))).toEqual({
      ...initialState,
      orderInfo: orderInfoMock,
    });

    expect(reducer(initialState, setProduct(mockProduct))).toEqual({
      ...initialState,
      product: mockProduct,
    });
  });

  test("action cleansing checkout", () => {
    const userInfoMock: UserUnknownInCheckout = {
      id: "unknown",
      age: 25,
      address: {
        city: "test",
        street: "test",
      },
      email: "test@test.test",
      firstName: "test",
      secondName: "test",
      phone: "test",
    };

    const shippingMethodMock: ShippingMethodType = {
      price: 12,
      shippingName: "test",
      deliveryTime: "test",
      supportingText: "test",
    };

    const payoutMock: UserPayoutCheckout = {
      method: "paypal",
    };

    const orderInfoMock: OrderInfoType = {
      checkPrivacyPolicy: true,
      orderNumber: 123124,
    };

    const mockProduct: ProductInCheckout[] = [
      {
        id: 1,
        title: "test",
        quantity: 1,
      },
    ];

    const initialState: UserCheckoutFormValues = {
      user: userInfoMock,
      shippingMethod: shippingMethodMock,
      payout: payoutMock,
      orderInfo: orderInfoMock,
      product: mockProduct,
    };

    expect(reducer(initialState, cleansingCheckout())).toEqual({
      user: {},
      shippingMethod: {},
      payout: {},
      orderInfo: {},
      product: [],
    });
  });
});
