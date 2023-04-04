export const priceWithoutDiscount = (
  price: number,
  discountPercentage: number,
  quantity?: number
): number => {
  return ((price * discountPercentage) / 100 + price) * (quantity || 1);
};
