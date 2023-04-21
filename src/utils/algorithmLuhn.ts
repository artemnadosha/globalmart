export const algorithmLuhn = (cardNumber: string) => {
  const checkDigit = +cardNumber.slice(-1);
  const digits = cardNumber.slice(0, -1).split("").map(Number).reverse();

  let sum = checkDigit;
  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i];
    if (i % 2 === 0) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
  return sum % 10 === 0;
};
