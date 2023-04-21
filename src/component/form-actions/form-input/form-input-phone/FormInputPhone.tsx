import React, { FC } from "react";
import { FormItem, PhoneInputField } from "../../../../UI";

interface FormInputPhoneProps {
  name: string | string[];
  label?: string;
  required?: boolean;
  min?: number;
  max?: number;
}

const FormInputPhone: FC<FormInputPhoneProps> = ({
  name,
  label,
  required,
  min,
  max,
}) => {
  return (
    <FormItem
      name={name}
      label={label}
      rules={[
        {
          required,
          min,
          max,
          type: "string",
        },
      ]}
    >
      <PhoneInputField />
    </FormItem>
  );
};

export default FormInputPhone;
