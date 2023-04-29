import reducer, { addItemFavorite, removeItemFavorite } from "./favorite.slice";
import { TypeProduct } from "../../../types/TypeProduct";

describe("favorite slice", () => {
  test("initialState", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      favorite: [],
      quantityFavorite: 0,
    });
  });

  test("action addItemFavorite", () => {
    const initialState = {
      favorite: [],
      quantityFavorite: 0,
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

    expect(reducer(initialState, addItemFavorite(mockProduct))).toEqual({
      favorite: [mockProduct],
      quantityFavorite: 1,
    });
  });
  test("action removeItemFavorite", () => {
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

    const initialState = {
      favorite: [mockProduct],
      quantityFavorite: 0,
    };

    expect(reducer(initialState, removeItemFavorite(1))).toEqual({
      favorite: [],
      quantityFavorite: 0,
    });
  });
});
