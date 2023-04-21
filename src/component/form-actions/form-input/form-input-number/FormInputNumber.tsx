import React, { FC } from "react";
import { FormItem } from "../../../../UI";
import { Input, InputNumber } from "antd";

interface FormInputNumberProps {
  name: string | string[];
  width?: string;
  type?: "password";
  label?: string;
  placeholder?: string;
  required?: boolean;
  max?: number;
  min?: number;
}

const FormInputNumber: FC<FormInputNumberProps> = ({
  name,
  width,
  type,
  label,
  placeholder,
  min,
  max,
  required,
}) => {
  return (
    <FormItem
      style={{ width }}
      name={name}
      label={label}
      rules={[
        { required, type: type === "password" ? "string" : "number", min, max },
      ]}
    >
      {type === "password" ? (
        <Input.Password placeholder={placeholder} maxLength={max} />
      ) : (
        <InputNumber placeholder={placeholder} />
      )}
    </FormItem>
  );
};

export default FormInputNumber;
