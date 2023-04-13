export const calculatePriceWithoutDiscount = (
  price: number,
  discountPercentage: number,
  quantity?: number
): number => {
  return Math.ceil(
    ((price * discountPercentage) / 100 + price) * (quantity || 1)
  );
};
