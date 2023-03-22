export const priceWithoutDiscount = (
  price: number,
  discountPercentage: number
): number => {
  return (price * discountPercentage) / 100 + price;
};
