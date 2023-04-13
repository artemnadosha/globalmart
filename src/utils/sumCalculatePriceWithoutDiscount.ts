import { calculatePriceWithoutDiscount, sumArray } from ".";
import { TypeProduct } from "../types/TypeProduct";

export const sumCalculatePriceWithoutDiscount = (
  arr: TypeProduct[]
): number => {
  const res = arr.map((item) =>
    calculatePriceWithoutDiscount(
      item.price,
      item.discountPercentage,
      item.quantity
    )
  );

  return sumArray(res);
};
