import React, { FC } from "react";
import { FormItem } from "../../../../UI";
import { Input } from "antd";
import { CreditCardFilled } from "@ant-design/icons";
import { validateCreditCardNumber } from "./FormInputCreditCard.utils";

interface FormInputCreditCardProps {
  name: string | string[];
  required?: boolean;
  label?: string;
  width?: string;
}

const FormInputCreditCard: FC<FormInputCreditCardProps> = ({
  name,
  label,
  required,
  width,
}) => {
  return (
    <FormItem
      style={{ width }}
      label={label}
      name={name}
      rules={[
        {
          required,
          type: "number",
          validator: validateCreditCardNumber,
        },
      ]}
    >
      <Input maxLength={16} showCount prefix={<CreditCardFilled />} />
    </FormItem>
  );
};

export default FormInputCreditCard;
