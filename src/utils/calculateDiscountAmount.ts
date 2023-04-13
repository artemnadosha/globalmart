export const calculateDiscountAmount = (
  price: number,
  discountPercentage: number,
  quantity?: number
) => {
  return Math.ceil(((price * discountPercentage) / 100) * (quantity || 1));
};
