import { Rule } from "rc-field-form/es/interface";
import { algorithmLuhn } from "../../../../utils";

export const validateCreditCardNumber = async (
  rule: Rule,
  value: string
): Promise<void> => {
  const validCardNumber = /^\d{16}$/.test(value);
  const validCardNumberLuhn = validCardNumber && algorithmLuhn(value);

  if (!validCardNumberLuhn) {
    return Promise.reject("Please enter a valid credit card number.");
  } else {
    return Promise.resolve();
  }
};
