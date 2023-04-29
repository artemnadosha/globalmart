import reducer, {
  addItemCart,
  removeItemCart,
  removeAllItemCart,
  changeQuantityItemProduct,
} from "./cart.slice";
import { TypeProduct } from "../../../types/TypeProduct";

describe("cart slice", () => {
  test("initialState", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      cart: [],
      quantityCart: 0,
    });
  });
  test("action addItemCart", () => {
    const initialState = {
      cart: [],
      quantityCart: 0,
    };

    const mockProduct: TypeProduct = {
      id: 1,
      thumbnail: "test",
      description: "test",
      category: "test",
      title: "test",
      brand: "test",
      rating: 4,
      discountPercentage: 2,
      price: 2,
      images: [],
      stock: 50,
    };

    expect(reducer(initialState, addItemCart(mockProduct))).toEqual({
      cart: [{ ...mockProduct, quantity: 1 }],
      quantityCart: 1,
    });
  });
  test("action removeItemCart", () => {
    const mockProduct: TypeProduct = {
      id: 1,
      thumbnail: "test",
      description: "test",
      category: "test",
      title: "test",
      brand: "test",
      rating: 4,
      quantity: 1,
      discountPercentage: 2,
      price: 2,
      images: [],
      stock: 50,
    };

    const initialState = {
      cart: [mockProduct],
      quantityCart: 0,
    };

    expect(reducer(initialState, removeItemCart(1))).toEqual({
      cart: [],
      quantityCart: 0,
    });
  });
  test("action removeAllItemCart", () => {
    const mockProductOne: TypeProduct = {
      id: 1,
      thumbnail: "test",
      description: "test",
      category: "test",
      title: "test",
      brand: "test",
      rating: 4,
      quantity: 1,
      discountPercentage: 2,
      price: 2,
      images: [],
      stock: 50,
    };
    const mockProductTwo: TypeProduct = {
      id: 1,
      thumbnail: "test",
      description: "test",
      category: "test",
      title: "test",
      brand: "test",
      rating: 4,
      quantity: 1,
      discountPercentage: 2,
      price: 2,
      images: [],
      stock: 50,
    };

    const initialState = {
      cart: [mockProductOne, mockProductTwo],
      quantityCart: 2,
    };

    expect(reducer(initialState, removeAllItemCart())).toEqual({
      cart: [],
      quantityCart: 0,
    });
  });
  test("action changeQuantityItemProduct", () => {
    const mockProductOne: TypeProduct = {
      id: 1,
      thumbnail: "test",
      description: "test",
      category: "test",
      title: "test",
      brand: "test",
      rating: 4,
      quantity: 1,
      discountPercentage: 2,
      price: 2,
      images: [],
      stock: 50,
    };

    const initialState = {
      cart: [mockProductOne],
      quantityCart: 1,
    };

    expect(
      reducer(initialState, changeQuantityItemProduct({ id: 1, quantity: 2 }))
    ).toEqual({
      cart: [{ ...mockProductOne, quantity: 2 }],
      quantityCart: 1,
    });
  });
});
