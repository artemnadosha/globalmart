import { calculateDiscountAmount, sumArray } from ".";
import { TypeProduct } from "../types/TypeProduct";

export const sumCalculateDiscountAmount = (arr: TypeProduct[]): number => {
  const res = arr.map((item) =>
    calculateDiscountAmount(item.price, item.discountPercentage, item.quantity)
  );

  return sumArray(res);
};
