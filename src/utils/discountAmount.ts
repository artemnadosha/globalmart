export const discountAmount = (
  price: number,
  discountPercentage: number,
  quantity: number
) => {
  return ((price * discountPercentage) / 100) * (quantity || 1);
};
